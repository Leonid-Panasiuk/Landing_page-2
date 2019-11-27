// MAP MARKER
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.838320, lng: 24.079680 },
        zoom: 15
    });
    var PecodePosition = { lat: 49.838320, lng: 24.079680 };
    var marker = new google.maps.Marker({
        position: PecodePosition,
        map: map,
        title: 'Pecode',
        icon: {
            url: "icons/pin.png"
        }
    });
}
// ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


