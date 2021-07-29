// function getBackgroundClass(hour) {
//     if (hour < currentHour) {
//         currentHour.css("class", past)
//     } else if (hour === currentHour) {
//         currentHour.css("class", present)
//     } else if (hour > currentHour)
// }

const currentDay = document.querySelector("#currentDay");

const saveBtn0 = document.querySelector("#save0");
const saveBtn1 = document.querySelector("#save1");
const saveBtn2 = document.querySelector("#save2");
const saveBtn3 = document.querySelector("#save3");
const saveBtn4 = document.querySelector("#save4");
const saveBtn5 = document.querySelector("#save5");
const saveBtn6 = document.querySelector("#save6");
const saveBtn7 = document.querySelector("#save7");
const saveBtn8 = document.querySelector("#save8");

var formFillArea = document.querySelector(".form-control");

const r9 = document.querySelector("#r9");
const r10 = document.querySelector("#r10");
const r11 = document.querySelector("#r11");
const r12 = document.querySelector("#r12");
const r13 = document.querySelector("#r13");
const r14 = document.querySelector("#r14");
const r15 = document.querySelector("#r15");
const r16 = document.querySelector("#r16");
const r17 = document.querySelector("#r17");

const tr9 = document.querySelector('#tr9');
const tr10 = document.querySelector('#tr10');
const tr11 = document.querySelector('#tr11');
const tr12 = document.querySelector('#tr12');
const tr13 = document.querySelector('#tr13');
const tr14 = document.querySelector('#tr14');
const tr15 = document.querySelector('#tr15');
const tr16 = document.querySelector('#tr16');
const tr17 = document.querySelector('#tr17');

var activity0 = localStorage.getItem("activity0");
var activity1 = localStorage.getItem("activity1");
var activity2 = localStorage.getItem("activity2");
var activity3 = localStorage.getItem("activity3");
var activity4 = localStorage.getItem("activity4");
var activity5 = localStorage.getItem("activity5");
var activity6 = localStorage.getItem("activity6");
var activity7 = localStorage.getItem("activity7");
var activity8 = localStorage.getItem("activity8");

formFill0.value = activity0;
formFill1.value = activity1;
formFill2.value = activity2;
formFill3.value = activity3;
formFill4.value = activity4;
formFill5.value = activity5;
formFill6.value = activity6;
formFill7.value = activity7;
formFill8.value = activity8;

var currentHour = moment().format('h');

renderDay();
renderBackgroundColor9();
renderBackgroundColor10();
renderBackgroundColor11();
renderBackgroundColor12();
renderBackgroundColor13();
renderBackgroundColor14();
renderBackgroundColor15();
renderBackgroundColor16();
renderBackgroundColor17();

// renders the current day and time using moment(), increments every second
function renderDay() {
    currentDay.innerHTML = `<h1>${moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>`
    setInterval(renderDay, 1000);
};

function renderBackgroundColor9() {
    if (currentHour < r9.textContent) {
        tr9.setAttribute("class", "bg-danger");
    } else if (currentHour === r9.textContent) {
        tr9.setAttribute("class", "bg-success");
    } else if (currentHour > r9.textContent) {
        tr9.setAttribute("class", "bg-white");
    }
}

function renderBackgroundColor10() {
    if (currentHour < r10.textContent) {
        tr10.setAttribute("class", "bg-white");
    } else if (currentHour === r10.textContent) {
        tr10.setAttribute("class", "bg-success");
    } else if (currentHour > r10.textContent) {
        tr10.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor11() {
    if (currentHour < r11.textContent) {
        tr11.setAttribute("class", "bg-white");
    } else if (currentHour === r11.textContent) {
        tr11.setAttribute("class", "bg-success");
    } else if (currentHour > r11.textContent) {
        tr11.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor12() {
    if (currentHour < r12.textContent) {
        tr12.setAttribute("class", "bg-white");
    } else if (currentHour === r12.textContent) {
        tr12.setAttribute("class", "bg-success");
    } else if (currentHour > r12.textContent) {
        tr12.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor13() {
    if (currentHour < r13.textContent) {
        tr13.setAttribute("class", "bg-white");
    } else if (currentHour === r13.textContent) {
        tr13.setAttribute("class", "bg-success");
    } else if (currentHour > r13.textContent) {
        tr13.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor14() {
    if (currentHour < r14.textContent) {
        tr14.setAttribute("class", "bg-white");
    } else if (currentHour === r14.textContent) {
        tr14.setAttribute("class", "bg-success");
    } else if (currentHour > r14.textContent) {
        tr14.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor15() {
    if (currentHour < r15.textContent) {
        tr15.setAttribute("class", "bg-white");
    } else if (currentHour === r15.textContent) {
        tr15.setAttribute("class", "bg-success");
    } else if (currentHour > r15.textContent) {
        tr15.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor16() {
    if (currentHour < r16.textContent) {
        tr16.setAttribute("class", "bg-white");
    } else if (currentHour === r16.textContent) {
        tr16.setAttribute("class", "bg-success");
    } else if (currentHour > r16.textContent) {
        tr16.setAttribute("class", "bg-danger");
    }
}
function renderBackgroundColor17() {
    if (currentHour < r17.textContent) {
        tr17.setAttribute("class", "bg-white");
    } else if (currentHour === r17.textContent) {
        tr17.setAttribute("class", "bg-success");
    } else if (currentHour > r17.textContent) {
        tr17.setAttribute("class", "bg-white");
    }
}


// brute force button saves (there is most definitely a more efficient method to track the closest form value)
saveBtn0.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill0").value;
    localStorage.setItem("activity0", formSubmit);
})

saveBtn1.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill1").value;
    localStorage.setItem("activity1", formSubmit);
})

saveBtn2.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill2").value;
    localStorage.setItem("activity2", formSubmit);
})

saveBtn3.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill3").value;
    localStorage.setItem("activity3", formSubmit);
})

saveBtn4.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill4").value;
    localStorage.setItem("activity4", formSubmit);
})

saveBtn5.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill5").value;
    localStorage.setItem("activity5", formSubmit);
})

saveBtn6.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill6").value;
    localStorage.setItem("activity6", formSubmit);
})

saveBtn7.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill7").value;
    localStorage.setItem("activity7", formSubmit);
})

saveBtn8.addEventListener("click", function() {
    formSubmit = document.querySelector("#formFill8").value;
    localStorage.setItem("activity8", formSubmit);
})
