let footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
    let totalHeight = document.body.scrollHeight - window.innerHeight;

    let scrolled = window.scrollY;

    let pourcentage = (scrolled / totalHeight) * 100;

if (pourcentage < 0) pourcentage = 0;
if (pourcentage > 100) pourcentage = 100;    

    let r = Math.round(52 + (76 - 52) * (pourcentage / 100));   
    let g = Math.round(152 + (205 - 152) * (pourcentage / 100)); 
    let b = Math.round(219 + (50 - 219) * (pourcentage / 100));  

footer.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});