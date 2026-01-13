async function loginUser() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (emailInput === "" || passwordInput === "") {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Veuillez remplir tous les champs.";
        return;
    }

    if (!emailInput.includes("@laplateforme.io")) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Accès refusé. Domaine non autorisé.";
        return;
    }

    
    let users = JSON.parse(localStorage.getItem('usersDB'));

    if (!users) {
        try {
            const response = await fetch('js/data.json');
            const data = await response.json();
            users = data.users;
            
            localStorage.setItem('usersDB', JSON.stringify(users));
        } catch (error) {
            console.error(error);
            errorMsg.style.display = "block";
            errorMsg.innerText = "Erreur: Impossible de lire le fichier data.json";
            return;
        }
    }

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailInput && users[i].password === passwordInput) {
            foundUser = users[i];
            break;
        }
    }

    if (foundUser) {
        sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
        
        document.getElementById('login-page').style.display = "none";
        errorMsg.style.display = "none";

        if (foundUser.role === 'admin' || foundUser.role === 'moderator') {
            document.getElementById('admin-page').style.display = "block";
            loadAdminDashboard();
        } else {
            document.getElementById('calendar-page').style.display = "block";
            loadCalendar();
        }
    } else {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Email ou mot de passe incorrect.";
    }
}


function logout() {
    sessionStorage.removeItem('currentUser');
    location.reload(); 
}


function loadCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    calendarGrid.innerHTML = ""; 

    const today = new Date().getDate(); 

    for (let i = 1; i <= 30; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-card'; 
        dayDiv.innerHTML = `<strong>Jour ${i}</strong>`;

        if (i < today) {
            dayDiv.classList.add('disabled');
            dayDiv.innerHTML += `<br><small>Passé</small>`; 
        } else {
            dayDiv.addEventListener('click', function() {
                dayDiv.classList.toggle('selected');
            });
        }
        calendarGrid.appendChild(dayDiv);
    }
}


function submitPresence() {
    const selectedDaysElements = document.querySelectorAll('.day-card.selected');
    
    if (selectedDaysElements.length === 0) {
        M.toast({html: 'Veuillez sélectionner au moins un jour.', classes: 'rounded red darken white-text'}); 
        return;
    }

    let selectedDays = [];
    selectedDaysElements.forEach(function(day) {
        const text = day.innerText.replace("Passé", "").trim(); 
        const number = text.replace("Jour ", "").trim();
        selectedDays.push(parseInt(number)); 
    });

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    const requestData = {
        userId: currentUser.id,
        userName: currentUser.name,
        email: currentUser.email,
        days: selectedDays,
        status: "En attente"
    };

    let allRequests = JSON.parse(localStorage.getItem('requests')) || [];
    allRequests.push(requestData);
    localStorage.setItem('requests', JSON.stringify(allRequests));

M.toast({html: 'Demande envoyée avec succès !', classes: 'rounded blue darken-2 white-text'}); 
   statusMsg.style.display = "block";
    
    setTimeout(() => { 
        statusMsg.style.display = "none"; 
    }, 2000);
}


function loadAdminDashboard() {
    const tableBody = document.getElementById('requests-table-body');
    const noRequestsMsg = document.getElementById('no-requests-msg');
    tableBody.innerHTML = "";

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const adminControls = document.getElementById('admin-controls');
    
    if (currentUser && currentUser.role === 'admin') {
        adminControls.style.display = "block";
    } else {
        adminControls.style.display = "none";
    }

    const allRequests = JSON.parse(localStorage.getItem('requests')) || [];

    if (allRequests.length === 0) {
        noRequestsMsg.style.display = "block";
        return;
    } else {
        noRequestsMsg.style.display = "none";
    }

    allRequests.forEach((req, index) => {
        const row = document.createElement('tr');
        
        let statusColor = "orange-text";
        if (req.status === "Accepted") statusColor = "yellow-text";
        if (req.status === "Refused") statusColor = "red-text";

        
        row.innerHTML = `
            <td>${req.userName}</td>
            <td>${req.email || 'N/A'}</td>
            <td>${req.days.join(", ")}</td>
            <td class="${statusColor}" style="font-weight:bold;">${req.status}</td>
            
            <td style="white-space: nowrap;">
                <button class="btn-small green waves-effect waves-light" onclick="updateStatus(${index}, 'Accepted')">
                    <i class="material-icons">check</i>
                </button>
                <button class="btn-small red waves-effect waves-light" onclick="updateStatus(${index}, 'Refused')">
                    <i class="material-icons">close</i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function updateStatus(index, newStatus) {
    let allRequests = JSON.parse(localStorage.getItem('requests')) || [];
    
    allRequests[index].status = newStatus;
    
    localStorage.setItem('requests', JSON.stringify(allRequests));
    
    loadAdminDashboard();
    
    M.toast({html: 'Statut mis à jour !', classes: 'rounded'});
}


function manageUsers() {
    const targetEmail = prompt("Entrez l'email de l'utilisateur à modifier :");
    if (!targetEmail) return;

    let users = JSON.parse(localStorage.getItem('usersDB'));
    
    const userIndex = users.findIndex(u => u.email === targetEmail);

    if (userIndex === -1) {
        alert("Utilisateur non trouvé !");
        return;
    }

    const newRole = prompt("Nouveau rôle (admin / moderator / student) :", users[userIndex].role);
    
    if (newRole !== "admin" && newRole !== "moderator" && newRole !== "student") {
        alert("Rôle invalide !");
        return;
    }

    users[userIndex].role = newRole;
    localStorage.setItem('usersDB', JSON.stringify(users)); 
    
    alert(`Succès ! ${users[userIndex].name} est maintenant : ${newRole}`);
}


document.addEventListener('DOMContentLoaded', function() {
    const savedUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (savedUser) {
        document.getElementById('login-page').style.display = "none";

        if (savedUser.role === 'admin' || savedUser.role === 'moderator') {
            document.getElementById('admin-page').style.display = "block";
            loadAdminDashboard();
        } else {
            document.getElementById('calendar-page').style.display = "block";
            loadCalendar();
        }
    }
});