localStorage = Window.localStorage;
window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('announcement-3-15')) {
        hideAnnouncement();
    }
});


function hideAnnouncement() {
    localStorage.setItem('announcement-3-15', 'true');
    announcement = document.getElementById('announcement');
    announcement.style.display = 'none';
}