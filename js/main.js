var mybutton = document.getElementById("scroll");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {

        mybutton.style.backgroundColor = "#2A455D";


    } else {
        mybutton.style.backgroundColor = "transparent ";


    }

}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);




// Set cookie consent
function acceptCookieConsent() {


    // localStorage.deleteCookie('name');
    localStorage.setItem('name', 'acceptcooki');
    sessionStorage.setItem("name", "acceptcooki");
    document.getElementById("cookiestexst").style.display = "none";
    document.getElementById("cookies").style.display = "none";


}



if (localStorage.getItem("name") == null) {

    console.log("Item does no exist");
    document.getElementById("cookiestexst").style.display = "flex";
    document.getElementById("cookies").style.display = "flex";



} else if (localStorage.getItem("name") !== null) {
    console.log("Item exist");
    document.getElementById("cookiestexst").style.display = "none";
    document.getElementById("cookies").style.display = "none";
}
////////////////ice/////////////
const randomIce = () => {
    const parentIce = document.createElement("div");
    ice.append(parentIce);
    const creatRandomIce = setInterval(() => {
        const ice = document.createElement("div");
        ice.classList.add("ice");
        ice.innerHTML = ".";
        ice.style.left = `${Math.random()*100}%`;
        ice.style.animationDuration = `${(Math.random() +0.5)*10}s`;


        parentIce.append(ice);

    }, 50);

    setTimeout(() => {
        clearInterval(creatRandomIce);
    }, 10000);
    setTimeout(() => {
        parentIce.remove();
    }, 17000);
    setTimeout(() => {
        randomIce();
    }, 10000);
}
randomIce();
// clearInterval(randomIce);