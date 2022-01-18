localStorage = Window.localStorage;
window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('announcement-10-22')) {
        hideAnnouncement();
    }
});


function hideAnnouncement() {
    localStorage.setItem('announcement-10-22', 'true');
    announcement = document.getElementById('announcement');
    announcement.style.display = 'none';
}