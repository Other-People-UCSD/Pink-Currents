localStorage = Window.localStorage;
window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('announcement-2-10')) {
        hideAnnouncement();
    }
});


function hideAnnouncement() {
    localStorage.setItem('announcement-2-10', 'true');
    announcement = document.getElementById('announcement');
    announcement.style.display = 'none';
}