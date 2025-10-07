// Global variable to store current city
let currentCity = 'Bandung';
let map = null;
let marker = null;

// Wait for DOM to load before fetching data
document.addEventListener('DOMContentLoaded', function() {
    fetchData(currentCity);
});

// Handle search form submission
function handleSearch(event) {
    event.preventDefault();
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    
    if (city) {
        currentCity = city;
        fetchData(city);
        cityInput.value = ''; // Clear input after search
    }
}

// Quick search function for quick access buttons
function quickSearch(city) {
    currentCity = city;
    fetchData(city);
}

// Refresh current city data
function refreshCurrentCity() {
    fetchData(currentCity);
}

async function fetchData(city) {
    // Show loading state
    showLoading();

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=717b64c259b63d6656a8032709d0a797&units=metric`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
            }
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        console.log(data); // Keep console log for debugging
        
        // Display the weather data
        displayWeatherData(data);
    }
    catch(error) {
        console.error('Error fetching data:', error);
        showError(error.message);
    }
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('weather-card').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');
}

function showError(message) {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('weather-card').classList.add('hidden');
    document.getElementById('error').classList.remove('hidden');
    document.getElementById('error-message').textContent = message;
}

function displayWeatherData(data) {
    // Hide loading and error states
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('error').classList.add('hidden');
    document.getElementById('weather-card').classList.remove('hidden');

    // Populate weather data
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('country').textContent = data.sys.country;
    
    // Timezone info (offset in seconds from UTC)
    const timezoneOffsetSeconds = data.timezone;
    const timezoneOffsetHours = timezoneOffsetSeconds / 3600;
    const timezoneSign = timezoneOffsetHours >= 0 ? '+' : '';
    document.getElementById('timezone-value').textContent = `UTC${timezoneSign}${timezoneOffsetHours}`;
    
    // Calculate and display local time
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utcTime + (timezoneOffsetSeconds * 1000));
    const timeString = localTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    const dateString = localTime.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    });
    document.getElementById('time-value').textContent = `${timeString}, ${dateString}`;
    
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + '°C';
    document.getElementById('feels-like').textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    
    // Weather icon
    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weather-icon').alt = data.weather[0].description;

    // Weather details
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('wind-speed').textContent = data.wind.speed + ' m/s';
    document.getElementById('pressure').textContent = data.main.pressure + ' hPa';
    document.getElementById('visibility').textContent = (data.visibility / 1000).toFixed(1) + ' km';

    // Initialize or update map
    initMap(data.coord.lat, data.coord.lon, data.name);

    // Last updated time
    const updateTime = new Date();
    document.getElementById('last-updated').textContent = updateTime.toLocaleTimeString();
}

function initMap(lat, lon, cityName) {
    // If map doesn't exist, create it
    if (!map) {
        map = L.map('map').setView([lat, lon], 10);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Create marker
        marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<b>${cityName}</b>`).openPopup();
    } else {
        // Update existing map
        map.setView([lat, lon], 10);
        
        // Update marker position
        if (marker) {
            marker.setLatLng([lat, lon]);
            marker.bindPopup(`<b>${cityName}</b>`).openPopup();
        } else {
            marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup(`<b>${cityName}</b>`).openPopup();
        }
    }
    
    // Invalidate size to ensure proper rendering
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
        }
    }, 100);
}