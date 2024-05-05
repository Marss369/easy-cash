// Owl Carosual

const banner = document.getElementById("banner");

if(banner){

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
};



// Mobile Nav

const navToggle = document.getElementById("toggle-btn");

const mobNav = document.getElementById("mobile-nav");

// Function to disable scrolling
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

// Function to enable scrolling
function enableScroll() {
    window.onscroll = function () { };
}


navToggle.addEventListener("click", (e) => {

    if (mobNav.classList.contains("nav-show")) {

        mobNav.classList.remove("nav-show");

        enableScroll();

        navToggle.querySelector("i").classList.remove("fa-xmark");
        navToggle.querySelector("i").classList.add("fa-bars");

    } else {

        mobNav.classList.add("nav-show");

        disableScroll();

        navToggle.querySelector("i").classList.remove("fa-bars");
        navToggle.querySelector("i").classList.add("fa-xmark");
    }

})