// Función para mostrar la fecha y hora
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric'
    };
    datetimeElement.innerText = now.toLocaleDateString('es-ES', options);
}

// Función para obtener la ubicación
function getLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            locationElement.innerText = `Latitud: ${lat}, Longitud: ${lon}`;
        }, (error) => {
            locationElement.innerText = "No se pudo obtener la ubicación.";
        });
    } else {
        locationElement.innerText = "La geolocalización no es soportada por tu navegador.";
    }
}

// Actualiza la fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Llama a la función de ubicación al cargar la página
window.onload = getLocation;
