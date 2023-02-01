//   ================== Navbar ==================
(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }


    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })


})();
//   ================== Loader ==================


// ================== Validation Email ==================

function validate() {
    let valid = document.getElementById('valid');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        valid.classList.add('valid');
        valid.classList.remove('unvalid');
        text.innerHTML = "Your email Is Valid"
        text.style.color = "#00ff08"
    }
    else {
        valid.classList.remove('valid')
        valid.classList.add('unvalid');
        text.innerHTML = "Please Enter Vaild email"
        text.style.color = "#dc3545"
    }
    if (email == "") {
        valid.classList.remove('valid');
        valid.classList.remove('unvalid');
        text.innerHTML = "";
    }
};

function subvalidate() {
    let valid = document.getElementById('valid');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        valid.classList.add('valid');
        valid.classList.remove('unvalid');
        text.innerHTML = "Your email Is Valid"
        text.style.color = "#00ff08"
    }
    else {
        valid.classList.remove('valid')
        valid.classList.add('unvalid');
        text.innerHTML = "Please Enter Vaild email"
        text.style.color = "#dc3545"
    }
    if (email == "") {
        valid.classList.remove('valid');
        valid.classList.remove('unvalid');
        text.innerHTML = "";
    }
};