















/* ==========================================
   BUSINESSPRO - SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const modal = document.getElementById("orderModal");
    const closeBtn = document.querySelector(".close");
    const orderButtons = document.querySelectorAll(".order-btn");
    const serviceSelect = document.getElementById("serviceSelect");
    const form = modal.querySelector("form");

    /* ===========================
       OPEN MODAL
    =========================== */

    orderButtons.forEach(button => {

        button.addEventListener("click", function () {

            const service = this.dataset.service;

            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            if (service && serviceSelect) {
                serviceSelect.value = service;
            }

        });

    });

    /* ===========================
       CLOSE MODAL
    =========================== */

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (e) {

        if (e.target === modal) {
            closeModal();
        }

    });

    function closeModal() {

        modal.style.display = "none";
        document.body.style.overflow = "auto";

    }

    /* ===========================
       ESC KEY CLOSE
    =========================== */

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            closeModal();

        }

    });

    /* ===========================
       FORM SUBMIT
    =========================== */

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullName = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const service = serviceSelect.value;
        const budget = form.querySelectorAll("select")[1].value;
        const details = form.querySelector("textarea").value;

        console.log({
            fullName,
            email,
            phone,
            service,
            budget,
            details
        });

        alert(
            "Thank you, " +
            fullName +
            "! Your project request has been submitted successfully."
        );

        form.reset();

        closeModal();

    });

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/* ==========================================
   CARD HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/* ==========================================
   FADE-IN ON SCROLL
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".service-card,.why-us,.cta").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});



/*==========================================
        PREMIUM SERVICES JAVASCRIPT
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
        SCROLL ANIMATION
    ==============================*/

    const serviceBoxes = document.querySelectorAll(".service-box");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    serviceBoxes.forEach(box => {
        observer.observe(box);
    });



    /*==============================
        SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /*==============================
        CARD TILT EFFECT
    ==============================*/

    serviceBoxes.forEach(card => {

        card.addEventListener("mousemove", function (e) {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x - rect.width / 2) / 25;

            const rotateX = (rect.height / 2 - y) / 25;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

        });

    });



    /*==============================
        IMAGE PARALLAX
    ==============================*/

    document.querySelectorAll(".service-image img")

        .forEach(image => {

            image.addEventListener("mousemove", function (e) {

                const rect = image.getBoundingClientRect();

                const x = (e.clientX - rect.left) / rect.width;

                const y = (e.clientY - rect.top) / rect.height;

                image.style.transform =
                    `scale(1.08)
                 translate(${(x - .5) * 15}px, ${(y - .5) * 15}px)`;

            });

            image.addEventListener("mouseleave", function () {

                image.style.transform = "scale(1)";

            });

        });



    /*==============================
        BUTTON RIPPLE
    ==============================*/

    document.querySelectorAll(".order-btn,.learn-btn")

        .forEach(button => {

            button.addEventListener("click", function (e) {

                let ripple = document.createElement("span");

                ripple.className = "ripple";

                this.appendChild(ripple);

                let x = e.clientX - this.offsetLeft;

                let y = e.clientY - this.offsetTop;

                ripple.style.left = x + "px";
                ripple.style.top = y + "px";

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            });

        });



    /*==============================
        ORDER MODAL
    ==============================*/

    const modal = document.getElementById("orderModal");

    const close = document.querySelector(".close");

    document.querySelectorAll(".order-btn")

        .forEach(btn => {

            btn.addEventListener("click", () => {

                if (modal) {

                    modal.style.display = "flex";

                    document.body.style.overflow = "hidden";

                }

            });

        });

    if (close) {

        close.onclick = () => {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    }

    window.onclick = (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    };



    /*==============================
        COUNTER ANIMATION
    ==============================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const speed = target / 80;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + speed);

                setTimeout(update, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        update();

    });

});



/*==================================================
        TSA INTELLIGENCE - SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        SCROLL REVEAL
    =========================================*/

    const cards = document.querySelectorAll(".service-card-details");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .25

    });

    cards.forEach(card => {

        observer.observe(card);

    });




    /*=========================================
        SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });




    /*=========================================
        IMAGE PARALLAX
    =========================================*/

    document.querySelectorAll(".service-image img")

        .forEach(image => {

            image.addEventListener("mousemove", function (e) {

                const rect = image.getBoundingClientRect();

                const x = (e.clientX - rect.left) / rect.width;

                const y = (e.clientY - rect.top) / rect.height;

                image.style.transform =

                    `scale(1.08)
            translate(${(x - .5) * 18}px,
            ${(y - .5) * 18}px)`;

            });

            image.addEventListener("mouseleave", () => {

                image.style.transform = "scale(1)";

            });

        });




    /*=========================================
        3D CARD EFFECT
    =========================================*/

    cards.forEach(card => {

        card.addEventListener("mousemove", function (e) {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x - rect.width / 2) / 30;

            const rotateX = (rect.height / 2 - y) / 30;

            card.style.transform =

                `perspective(1200px)
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });




    /*=========================================
        RIPPLE BUTTON
    =========================================*/

    document.querySelectorAll(".order-btn,.learn-btn")

        .forEach(button => {

            button.addEventListener("click", function (e) {

                const ripple = document.createElement("span");

                ripple.classList.add("ripple");

                this.appendChild(ripple);

                const x = e.offsetX;

                const y = e.offsetY;

                ripple.style.left = x + "px";

                ripple.style.top = y + "px";

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            });

        });




    /*=========================================
        ORDER MODAL
    =========================================*/

    const modal = document.getElementById("orderModal");

    const close = document.querySelector(".close");

    const service = document.getElementById("serviceSelect");

    document.querySelectorAll(".order-btn")

        .forEach(btn => {

            btn.addEventListener("click", () => {

                if (modal) {

                    modal.style.display = "flex";

                    document.body.style.overflow = "hidden";

                }

                if (service) {

                    service.value = btn.dataset.service;

                }

            });

        });

    if (close) {

        close.onclick = () => {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    }

    window.onclick = (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

    };

});/*==========================================
        COUNTER
==========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 80);

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================================
        SCROLL PROGRESS
==========================================*/

window.addEventListener("scroll", () => {

    const winScroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("scrollProgress").style.width = scrolled + "%";

});


/*==========================================
        CURSOR GLOW
==========================================*/

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
