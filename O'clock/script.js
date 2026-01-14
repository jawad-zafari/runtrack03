document.addEventListener('DOMContentLoaded', function() {
    // Horloge

    function updateClock() {

        const now = new Date();

   
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

       
        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');

       
        const timeString = h + ':' + m + ':' + s;

        
        const clockScreen = document.getElementById('screen-horloge');
        
       
        if (clockScreen) {
            clockScreen.innerHTML = timeString;
        }
    }

 
    setInterval(updateClock, 1000);

   
    updateClock();

    // Minuteur

    let timerInterval;

   
    const btnStartTimer = document.getElementById('btn-timer-start');
    const btnStopTimer = document.getElementById('btn-timer-stop');

 
    function startTimer() {
        stopTimer();

        timerInterval = setInterval(function() {
            const input = document.getElementById('timerInput');
            let timeLeft = parseInt(input.value);

            if (timeLeft > 0) {
                input.value = timeLeft - 1;
            } else {
                stopTimer();
                alert("Temps écoulé !");
            }
        }, 1000);
    }

   
    function stopTimer() {
        clearInterval(timerInterval);
    }

   
    
    if (btnStartTimer) {
        btnStartTimer.addEventListener('click', startTimer);
    }

    if (btnStopTimer) {
        btnStopTimer.addEventListener('click', stopTimer);
    }

    // Chronomètre

    let chronoInterval;      
    let chronoSeconds = 0;   
    let isRunning = false;   

    
    const btnToggle = document.getElementById('btn-chrono-toggle');
    const btnLap = document.getElementById('btn-chrono-lap');
    const btnReset = document.getElementById('btn-chrono-reset');
    const chronoScreen = document.getElementById('chrono-screen');
    const lapsList = document.getElementById('laps-list');

  
    function updateChronoDisplay() {
        const h = Math.floor(chronoSeconds / 3600);
        const m = Math.floor((chronoSeconds % 3600) / 60);
        const s = chronoSeconds % 60;

        const hStr = String(h).padStart(2, '0');
        const mStr = String(m).padStart(2, '0');
        const sStr = String(s).padStart(2, '0');

        chronoScreen.innerHTML = hStr + ':' + mStr + ':' + sStr;
    }

   
    function toggleChrono() {
        if (isRunning) {
          
            clearInterval(chronoInterval);
            isRunning = false;

           
            btnToggle.innerHTML = 'Démarrer <i class="material-icons right">play_arrow</i>';
            btnToggle.classList.remove('red');
            btnToggle.classList.add('green');

        } else {
           
            chronoInterval = setInterval(function() {
                chronoSeconds++; 
                updateChronoDisplay(); 
            }, 1000);
            isRunning = true;

     
            btnToggle.innerHTML = 'Arrêter <i class="material-icons right">pause</i>';
            btnToggle.classList.remove('green');
            btnToggle.classList.add('red');
        }
    }

   
    function recordLap() {
        if (chronoSeconds > 0) {
            
            const li = document.createElement('li');
            li.className = 'collection-item'; 
            li.innerText = 'Tour: ' + chronoScreen.innerHTML; 

          
            lapsList.appendChild(li);
        }
    }

    
    function resetChrono() {
        
        if (isRunning) {
            toggleChrono();
        }

       
        chronoSeconds = 0;
        updateChronoDisplay();

        
        const items = lapsList.querySelectorAll('.collection-item');
        items.forEach(function(item) {
            item.remove();
        });
    }

   
    
    if (btnToggle) btnToggle.addEventListener('click', toggleChrono);
    if (btnLap) btnLap.addEventListener('click', recordLap);
    if (btnReset) btnReset.addEventListener('click', resetChrono);


    //  Réveil

    let alarmTime = null; 
    let alarmTimeout = null;

    const inputAlarm = document.getElementById('alarm-input');
    const statusAlarm = document.getElementById('alarm-status');
    const btnSetAlarm = document.getElementById('btn-alarm-set');
    const btnCancelAlarm = document.getElementById('btn-alarm-cancel');

    function setAlarm() {
        
        const selectedTime = inputAlarm.value;

        if (!selectedTime) {
            alert("Veuillez choisir une heure !"); 
            return;
        }

        alarmTime = selectedTime;

        
        statusAlarm.innerHTML = "Alarme réglée pour " + alarmTime;
        statusAlarm.classList.remove('grey-text');
        statusAlarm.classList.add('green-text');

        btnSetAlarm.classList.add('disabled'); 
        btnCancelAlarm.classList.remove('disabled');
    }

    
    function cancelAlarm() {
        alarmTime = null; 
        
        statusAlarm.innerHTML = "Pas d'alarme active";
        statusAlarm.classList.remove('green-text');
        statusAlarm.classList.add('grey-text');

        btnSetAlarm.classList.remove('disabled');
        btnCancelAlarm.classList.add('disabled');
    }

    
    function checkAlarm() {
        if (!alarmTime) return;

        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        
        const currentTime = h + ":" + m;

        
        if (currentTime === alarmTime) {
            alert("⏰ DRING DRING ! Il est " + currentTime);
            
            cancelAlarm();
        }
    }

   
    if (btnSetAlarm) btnSetAlarm.addEventListener('click', setAlarm);
    if (btnCancelAlarm) btnCancelAlarm.addEventListener('click', cancelAlarm);

    
    setInterval(checkAlarm, 1000);
});