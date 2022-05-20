localStorage = Window.localStorage;
window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('announcement-5-20')) {
        hideAnnouncement();
    }
});


function hideAnnouncement() {
    localStorage.setItem('announcement-50-20', 'true');
    announcement = document.getElementById('announcement');
    announcement.style.display = 'none';
}