  // navigation links
// get product links and product arrow
var navP = document.getElementById("nav-p");
var navPArrow = document.getElementById("pro-arrow");

// toggle show/hide links and flip arrow on click
function toggleProducts() { 
    if (navP.style.display === "none") {
        navP.style.display = "block";
        navCom.style.display = "none";
        navConn.style.display = "none";
        navPArrow.style.transform = "rotate(180deg)";
        navComArrow.style.transform = "rotate(0deg)";
        navConnArrow.style.transform = "rotate(0deg)";
    } else {
        navP.style.display = "none";
        navPArrow.style.transform = "rotate(0deg)";
    }   
}

// get company links and company arrow
var navCom = document.getElementById("nav-com");
var navComArrow = document.getElementById("com-arrow");

// toggle show/hide links and flip arrow on click
function toggleCompany() { 
    if (navCom.style.display === "none") {
        navCom.style.display = "block";
        navP.style.display = "none";
        navConn.style.display = "none";
        navComArrow.style.transform = "rotate(180deg)";
        navPArrow.style.transform = "rotate(0deg)";
        navConnArrow.style.transform = "rotate(0deg)";
    } else {
        navCom.style.display = "none";
        navComArrow.style.transform = "rotate(0deg)";
    }   
}

// get connect links and connect arrow
var navConn = document.getElementById("nav-con");
var navConnArrow = document.getElementById("con-arrow");

// toggle show/hide links and flip arrow on click
function toggleConnect() { 
    if (navConn.style.display === "none") {
        navConn.style.display = "block";
        navP.style.display = "none";
        navCom.style.display = "none";
        navConnArrow.style.transform = "rotate(180deg)";
        navPArrow.style.transform = "rotate(0deg)";
        navComArrow.style.transform = "rotate(0deg)";
        
    } else {
        navConn.style.display = "none";
        navConnArrow.style.transform = "rotate(0deg)";
    }   
}