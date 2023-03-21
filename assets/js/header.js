// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;

var header;
var searchInput;

/**
 * On page load, set event listeners on the window and search navigation function.
 */
window.addEventListener('DOMContentLoaded', function () {
    header = document.querySelector('header');
    searchInput = document.getElementById('search-input');

    window.addEventListener('scroll', function () {
        didScroll = true;
    });

    searchInput.addEventListener('focus', function () {
        searchInput.placeholder = '';
    });
    
    searchInput.addEventListener('blur', function () {
        searchInput.placeholder = 'Search';
    });
    
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' || event.code === 'Enter') {
            searchInput.placeholder = 'Search';
        }
    });

    /**
     * Every 250ms, if the user scrolled within this time, 
     * determine if the header is shown or hidden. 
     * 
     * This delay is meant to offer a smooth transition for the header.
     */
    scrollWait = setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
});

/**
 * Triggered when the user scrolls the page.
 * If the user has scrolled past the top part of the page, the header can be hidden.
 */
function hasScrolled() {
    var st = window.scrollY;

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > header.offsetHeight) {
        // Scroll Down
        document.querySelector('header').classList.remove('nav-down');
        document.querySelector('header').classList.add('nav-up');
    } else {
        // Scroll Up
        if (st + window.innerHeight < document.documentElement.offsetHeight) {
            document.querySelector('header').classList.remove('nav-up');
            document.querySelector('header').classList.add('nav-down');

        }
    }

    lastScrollTop = st;
}

/**
 * Opens the mobile navigation.
 */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById('navContent').classList.remove('hidden');
}

/**
 * Closes the mobile navigation.
 */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('navContent').classList.add('hidden');
}