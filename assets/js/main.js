// Loader
window.onload = () => {
    let loader = document.getElementById('loader');
    loader.style.visibility = 'hidden';
    loader.style.opacity = 0;
}

// Navbar
// Toggler icon functionality
var button = document.querySelector('.navbar--toggler__icon');
var collapse = document.querySelector('.collapse');
var navbar = document.querySelector('.navbar');
collapse.style.display = 'block';

function myNav() {
    collapse.style.display == 'none';
    if (collapse.style.display == 'none') {
        collapse.style.display = 'block';
    } else {
        collapse.style.display = 'none';
    }
}
button.addEventListener('click', myNav());

// Media functions
const sm = window.matchMedia('(min-width: 319px)');
const mm = window.matchMedia('(min-width: 374px)');
const ml = window.matchMedia('(min-width: 424px)');
const tab = window.matchMedia('(min-width: 767px)');
const tabL = window.matchMedia('(min-width: 1023px)');
const gL = window.matchMedia('(min-width: 1279px)');
const lap = window.matchMedia('(min-width: 1439px)');
const k4 = window.matchMedia('(min-width: 2559px)');
// buttons
var navCollapse = document.querySelector('.navbar--collapse');
var services = document.querySelector('.dropdown--toggle');
var dropM = document.querySelector('.dropdown--menu');
var navLink2 = document.querySelector('.abo-bt');
var navLink3 = document.querySelector('.con-bt');

// sm to tab
if (sm.matches || mm.matches || ml.matches || tab.matches) {
    // collapsing items on navbar
    function close() {
        let closing = () => {
            navCollapse.style.display = 'none';
        }
        return closing;
    }
    try {
        navLink2.onclick = close();
        navLink3.onclick = close();
    } catch (e) {}
    // Dropdown Menu
    function serviceDisplay() {
        if (dropM.style.display === 'none') {
            dropM.style.display = 'block';
        } else {
            dropM.style.display = 'none';
        }
    }

    services.addEventListener('click', serviceDisplay());
}

// Mision 'n vision container
var button2 = document.querySelector('.mnv');
var mnvContainer = document.querySelector('.misionVision--container');

function misionVision() {
    if (mnvContainer.style.display == 'none') {
        mnvContainer.style.display = 'block';
    } else {
        mnvContainer.style.display = 'none';
    }
}
try {
    button2.addEventListener('click', misionVision());
} catch (e) {}

// Footer items
var dtf1 = document.querySelector('.nvd1');
var dtf2 = document.querySelector('.nvd2');
var dtf3 = document.querySelector('.nvd3');
var dfm1 = document.querySelector('.dfm1');
var dfm2 = document.querySelector('.dfm2');
var dfm3 = document.querySelector('.dfm3');

function dfmx1() {
    if (dfm1.style.display == 'none') {
        dfm1.style.display = 'block';
    } else {
        dfm1.style.display = 'none';
    }
}

function dfmx2() {
    if (dfm2.style.display == 'none') {
        dfm2.style.display = 'block';
    } else {
        dfm2.style.display = 'none';
    }
}

function dfmx3() {
    if (dfm3.style.display == 'none') {
        dfm3.style.display = 'block';
    } else {
        dfm3.style.display = 'none';
    }
}

dtf1.addEventListener('click', dfmx1());
dtf2.addEventListener('click', dfmx2());
dtf3.addEventListener('click', dfmx3());

dfm1.style.display = 'none';
dfm2.style.display = 'none';
dfm3.style.display = 'none';

// All about forms
// buttons
// Next
const next1 = document.querySelector('#next-button1');
const next2 = document.querySelector('#next-button2');
const next3 = document.querySelector('#next-button3');
const next4 = document.querySelector('#next-button4');
const next5 = document.querySelector('#next-button5');
const next6 = document.querySelector('#next-button6');
const next7 = document.querySelector('#next-button7');
// Return
const back2 = document.querySelector('#back-button2');
const back3 = document.querySelector('#back-button3');
const back4 = document.querySelector('#back-button4');
const back5 = document.querySelector('#back-button5');
const back6 = document.querySelector('#back-button6');
const back7 = document.querySelector('#back-button7');
// forms
const form1 = document.querySelector('#assistant1');
const form2 = document.querySelector('#assistant2');
const form3 = document.querySelector('#assistant3');
const form4 = document.querySelector('#assistant4');
const form5 = document.querySelector('#assistant5');
const form6 = document.querySelector('#assistant6');
const form7 = document.querySelector('#assistant7');

const formArr = [form1, form2, form3, form4, form5, form6, form7];
try{
    next1.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-100%);"
        });
    }

    back2.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(0);"
        });
    }

    next2.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-200%);"
        });
    }

    back3.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-100%);"
        });
    }

    next3.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-300%);"
        });
    }

    back4.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-200%);"
        });
    }

    next4.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-400%);"
        });
    }

    back4.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-200%);"
        });
    }

    next5.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-500%);"
        });
    }

    back5.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-300%);"
        });
    }

    next6.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-600%);"
        });
    }

    back6.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-400%);"
        });
    }

    back7.onclick = () => {
        formArr.forEach((element) => {
            element.style = "transform: translateX(-500%);"
        });
    }
}catch (e) {}


// Contact form
const sendContactButton = document.getElementById('send-contact-form');
const contactForm = document.getElementById('contact-form');
const mail = document.getElementById('inputEmail');
const username = document.getElementById('inputUserName');
const affair = document.getElementById('inputAffair');
const msg = document.getElementById('inputComments');

affair.addEventListener('change', () => {
    if(affair != null){
        username.addEventListener('change', () => {
            if(username != null){
                mail.addEventListener('change', () => {
                    if(mail != null){
                        msg.addEventListener('change', () => {
                            if(msg != null){
                                sendContactButton.onclick = () => {
                                    swal("Mensaje enviado", "", "success");
                                }
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1500);
                            }
                        })
                    }
                })
            }
        });
    }
});