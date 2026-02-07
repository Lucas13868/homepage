const theme_btn = document.getElementById("theme-btn");
const body = document.body;
const root = document.documentElement;
const slider = document.getElementById("slider");

const themeSaved = localStorage.getItem("theme");
const sizeSaved = localStorage.getItem("font-size");
const fontSaved = localStorage.getItem("font");

//Loading chosed theme, font-size, font-family
if (themeSaved === "dark") {
    body.classList.add("dark");
}

if (sizeSaved > 0){
    root.style.setProperty("--font-size", `${sizeSaved}px`);
    slider.value = sizeSaved;
}

if (fontSaved != "") {
    root.style.setProperty("--font-family", fontSaved);
}

//Switching page theme
theme_btn.addEventListener("click", function() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")){
        theme_btn.innerText = "Tema claro"; //changing button text
        localStorage.setItem("theme", "dark"); //saving current theme
    }
    else {
        theme_btn.innerText = "Tema escuro";
        localStorage.setItem("theme", "light");
    }
});

const form = document.getElementById("configForm");

//Changing font-size and font-family
form.addEventListener("change", function(event) {
    let triggerObject = event.target;

    if (triggerObject.type == "range") {
        window_width = window.innerWidth;
        font_size = 18;

        //if the user is on cellphone, the font-size will be smaller
        if (window_width < 750) {
            font_size = triggerObject.value - 5;
        }
        else {
            font_size = triggerObject.value;
        }

        body.style.fontSize = `${font_size}px`;

        localStorage.setItem("font-size", font_size);
    }
    else if (triggerObject.type == "radio") {
        body.style.fontFamily = triggerObject.value;

        localStorage.setItem("font", triggerObject.value);
    }
});

//Moving the slider's progress bar
function range_progress() {
    
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    let progress = ((val - min) / (max - min)) * 100 + "%";
    slider.style.setProperty("--range-progress", progress);
}

slider.addEventListener("input", range_progress);
range_progress();

const config_btn = document.getElementById("config-btn");

//Opening and closing config popup
config_btn.addEventListener("click", function() {
    const config_div = document.querySelector(".config");

    config_div.hidden = !config_div.hidden;

    correctConfigDiv();

    let radioItem = document.querySelector(`input[name='font'][value='${fontSaved}']`)
    if (radioItem) {
        radioItem.checked = true;
    }
});

//Closes popup if user clicks somewhere outside the config display
document.addEventListener("click", function(event) {
    const config_div = document.querySelector(".config");

    if (!config_div.contains(event.target) && !config_btn.contains(event.target)) {
        config_div.hidden = true;
    }
});

//Corrects the popup position if it is off-screen
function correctConfigDiv() {
    const config = document.querySelector(".config");

    config.style.marginLeft = "0px";

    const rect = config.getBoundingClientRect();
    const window_width = window.innerWidth;

    if (rect.left < 0) {
        config.style.marginLeft = `${Math.abs(rect.left) + 20}px`;
    }
    else if (rect.right > window_width) {
        let variation = rect.right - window_width;
        config.style.marginLeft = `-${variation + 20}px`;
    }
}