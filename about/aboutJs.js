// Get current year to the footer 
"use strict";
const getCurrentYear = () => {
    const d = new Date();
    const footerMensage = `&copy; ${d.getFullYear()} Sample Text. All Rights Reserved`;
    document.getElementById('currentYear').innerHTML = footerMensage;
    console.log(footerMensage);
    
}
// create greeating func
const greeting = () => {
    const d = new Date();
    const greetingElement = document.getElementById("greeatings");
    if (d.getHours() <= 12) {
        greetingElement.textContent = 'Good Morning! I am Iago and welcome to my hub!';
        greetingElement.className = 'morning';
    } else if (d.getHours() <= 17 ) {
        greetingElement.textContent = 'Good afternoon! I am Iago and welcome to my hub!';
        greetingElement.className = 'afternoon';
    } else {
        greetingElement.textContent = 'Good evening! I am Iago and welcome to my hub!';
        greetingElement.className = 'evening';
    }
}
// create aelrt
const sayHello = () => { 
    alert('nice meeting you!')
}
// setup button
const buttonPress = () => { 
    const btn = document.getElementById("btn");
    btn.addEventListener("click", sayHello);
}

const buttonButtonHover = () => { 
    const btn = document.getElementById("btn");
    btn.addEventListener('mouseover', function(event) {
        btn.className = 'buttonHover';
    });

    btn.addEventListener('mouseout', function() {
        btn.className = 'buttonNormal';
    });

    
}

const populateList = () => {
    const list = document.getElementById("list");
    for (let i = 0; i < 12; i++) {
        const li = document.createElement("li");
        if (i % 2) {
            li.textContent = "even"
        } else {
            li.textContent = "odd"
        }
        list.appendChild(li);
      }
}





// add listener to wait for dom loading due to error happening
document.addEventListener('DOMContentLoaded', () => {
    getCurrentYear();
    greeting();
    buttonPress();
    buttonButtonHover();
    populateList();
});



