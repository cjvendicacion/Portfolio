const draggableElement = document.getElementById('quick-access');
let pos = { top: 0, left: 0, x: 0, y: 0 };
let isNavBoxVisible = false;

const mouseDownHandler = function (e) {
    pos = {
        left: draggableElement.offsetLeft,
        top: draggableElement.offsetTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    isNavBoxVisible = false;
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    const newTop = pos.top + dy;
    const maxTop = window.innerHeight - draggableElement.offsetHeight;
    const finalTop = newTop < 0 ? 0 : newTop > maxTop ? maxTop : newTop;

    draggableElement.style.transition = 'left 0.0s ease-in-out';
    draggableElement.style.top = `${finalTop}px`;
    draggableElement.style.left = `${pos.left + dx}px`;
    isNavBoxVisible = false;
};

const mouseUpHandler = function () {
    const screenWidth = window.innerWidth;
    const elementWidth = draggableElement.offsetWidth;
    const elementPosition = draggableElement.getBoundingClientRect().left;

    if (elementPosition < screenWidth / 2) {
        draggableElement.style.left = '0';
        draggableElement.style.transition = 'left 0.2s ease-in-out';
    } else {
        draggableElement.style.left = `${screenWidth - elementWidth}px`;
        draggableElement.style.transition = 'left 0.2s ease-in-out';
    }

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

const touchStartHandler = function (e) {
    const touch = e.targetTouches[0];
    pos = {
        left: draggableElement.offsetLeft,
        top: draggableElement.offsetTop,
        x: touch.clientX,
        y: touch.clientY,
    };

    draggableElement.style.transition = 'left 0.0s ease-in-out';
    document.addEventListener('touchmove', touchMoveHandler);
    document.addEventListener('touchend', touchEndHandler);
    isNavBoxVisible = false;
};

const touchMoveHandler = function (e) {
    const touch = e.targetTouches[0];
    const dx = touch.clientX - pos.x;
    const dy = touch.clientY - pos.y;
    const newTop = pos.top + dy;
    const maxTop = window.innerHeight - draggableElement.offsetHeight;
    const finalTop = newTop < 0 ? 0 : newTop > maxTop ? maxTop : newTop;

    draggableElement.style.top = `${finalTop}px`;
    draggableElement.style.left = `${pos.left + dx}px`;
    isNavBoxVisible = false;
};

const touchEndHandler = function () {
    const screenWidth = window.innerWidth;
    const elementWidth = draggableElement.offsetWidth;
    const elementPosition = draggableElement.getBoundingClientRect().left;

    if (elementPosition < screenWidth / 2) {
        draggableElement.style.left = '0';
        draggableElement.style.transition = 'left 0.2s ease-in-out';
    } else {
        draggableElement.style.left = `${screenWidth - elementWidth}px`;
        draggableElement.style.transition = 'left 0.2s ease-in-out';
    }

    document.removeEventListener('touchmove', touchMoveHandler);
    document.removeEventListener('touchend', touchEndHandler);
};

draggableElement.addEventListener('mousedown', mouseDownHandler);
draggableElement.addEventListener('touchstart', touchStartHandler);

// ************************** navigation box *******************************

const navBox = document.querySelector('.nav-box');
let timeoutId; // global variable for timeout ID

draggableElement.addEventListener('mouseup', function(event) {
    if (isNavBoxVisible) {
        navBox.style.display = 'none';
        isNavBoxVisible = false;
    } else {
        navBox.style.display = 'block';
        isNavBoxVisible = true;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        navBox.style.display = 'none';
        isNavBoxVisible = false;
    }, 5000);
});

// --------------------- blinkers --------------------------

function faultyBlinkingText(element, delay, textShadow) {
    let isOn = true;
    setInterval(function() {
        if (isOn) {
            element.style.textShadow = textShadow;
            element.style.color = 'white';
            isOn = false;
        } else {
            element.style.textShadow = "none";
            element.style.color = 'gray';
            isOn = true;
        }
    }, delay);
}

shortDesc = document.getElementById('short-description');
nameText = document.getElementById('name-text');
faultyBlinkingText(shortDesc, 1000, '0 0 20px lime');
faultyBlinkingText(nameText, 1500, '0 0 20px yellow');

const items = document.querySelectorAll('.set-items');
let index = 0;

function changeBoxShadow() {
    items.forEach((item) => {
        item.style.backgroundColor = 'transparent';
        item.style.boxShadow = '0 0 32px 0 rgba(0, 0, 0, 0.36)';
    });
    items[index].style.boxShadow = '0 0 32px 0 yellow';
    items[index].style.backgroundColor = 'white';

    index++;

    if (index >= items.length) {
        index = 0;
    }
}

setInterval(changeBoxShadow, 500);
  

//------------------ birthday ------------------------

function getAge() {
    const birthDate = new Date('1999-10-06');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function calculateAge(birthday) {
    let ageInMs = Date.now() - birthday.getTime();
  
    let year = Math.floor(ageInMs / 31536000000);
    ageInMs = ageInMs % 31536000000;
  
    let month = Math.floor(ageInMs / 2592000000);
    ageInMs = ageInMs % 2592000000;
  
    let day = Math.floor(ageInMs / 86400000);
    ageInMs = ageInMs % 86400000;
  
    let hour = Math.floor(ageInMs / 3600000);
    ageInMs = ageInMs % 3600000;
  
    let minute = Math.floor(ageInMs / 60000);
    ageInMs = ageInMs % 60000;
  
    let second = Math.floor(ageInMs / 1000);
  
    let ageString = '';
    if (year > 0) ageString += year + 'Y ';
    if (month > 0) ageString += month + 'M ';
    if (day > 0) ageString += day + 'D ';
    if (hour > 0) ageString += hour + 'h ';
    if (minute > 0) ageString += minute + 'm ';
    if (second > 0) ageString += second + 's';
  
    return ageString.trim();
}
setInterval(() => {
    document.getElementById('age-text').innerHTML = calculateAge(new Date('1999-10-06'));
}, 1000);
