# 🌤️ Weather App

A beautiful, interactive weather application that displays real-time weather information for cities worldwide with an animated cloud background and location map.

![Weather App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

### 🌍 Multi-City Weather Search
- Search weather for any city in the world
- Quick access buttons for popular cities (Bandung, Jakarta, Kediri, Surabaya, Tokyo, London)
- Real-time weather data from OpenWeatherMap API

### 📊 Comprehensive Weather Information
- **Current Temperature** - Displayed in Celsius
- **Feels Like Temperature** - Apparent temperature
- **Weather Description** - Current weather conditions (e.g., Clear Sky, Few Clouds)
- **Humidity** - Percentage of moisture in the air
- **Wind Speed** - Wind velocity in meters per second
- **Atmospheric Pressure** - Pressure in hPa
- **Visibility** - Distance visibility in kilometers
- **Weather Icon** - Visual representation of current weather

### 🕐 Timezone & Local Time
- Displays timezone offset (UTC+/-)
- Shows current local time in the searched city
- Real-time date display

### 🗺️ Interactive Location Map
- Powered by Leaflet.js
- OpenStreetMap integration
- Location marker with city name popup
- Zoom and pan functionality
- Side-by-side layout with weather info (desktop)

### 🎨 Beautiful UI/UX
- **Animated Cloud Background** - 5 floating clouds with smooth animations
- **Glass-morphism Design** - Modern frosted glass effect
- **Gradient Background** - Beautiful blue gradient theme
- **Responsive Design** - Works perfectly on mobile and desktop
- **Smooth Animations** - Fade-in and bounce-in effects
- **Loading States** - Visual feedback during data fetching
- **Error Handling** - User-friendly error messages

## 🚀 Demo

Simply open `index.html` in your browser to start using the app!

## 📸 Screenshots

### Desktop View
```
┌─────────────────────────────────────────────────┐
│            🌤️ Weather App                      │
│     Search weather for any city worldwide       │
│                                                  │
│  [Search Bar] [Quick Access Buttons]            │
│                                                  │
│  ┌──────────────────┬────────────────────────┐  │
│  │  Weather Info    │    Location Map        │  │
│  │  - Temperature   │    [Interactive Map]   │  │
│  │  - Description   │                        │  │
│  │  - Details Grid  │                        │  │
│  └──────────────────┴────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Mobile View
Weather info and map stack vertically for optimal mobile viewing.

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with custom animations
- **JavaScript (ES6+)** - Functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet.js** - Interactive maps
- **OpenWeatherMap API** - Weather data
- **OpenStreetMap** - Map tiles

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and CDN resources)

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/DerickAmadeus/WeatherApp.git
```

2. Navigate to the project directory:
```bash
cd WeatherApp
```

3. Open `index.html` in your browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

That's it! No build process or dependencies to install.

## 🔑 API Configuration

The app uses OpenWeatherMap API. The API key is already included in the code for demonstration purposes.

**For production use:**
1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `index.js`:
```javascript
let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=YOUR_API_KEY&units=metric`);
```

## 📖 Usage

### Search for a City
1. Type the city name in the search bar
2. Click the **🔍 Search** button or press Enter
3. View the weather information and location on the map

### Quick Search
Click any of the quick access buttons:
- **Bandung** 🇮🇩
- **Jakarta** 🇮🇩
- **Kediri** 🇮🇩
- **Surabaya** 🇮🇩
- **Tokyo** 🇯🇵
- **London** 🇬🇧

### Refresh Data
Click the **🔄 Refresh** button to update the current city's weather data.

### Interact with Map
- **Drag** to pan around
- **Scroll** to zoom in/out
- **Click marker** to see city name popup

## 📁 Project Structure

```
WeatherApp/
│
├── index.html          # Main HTML file with structure and animations
├── index.js            # JavaScript functionality and API calls
└── README.md           # Project documentation
```

## 🎯 Key Features Breakdown

### Weather Data Display
```javascript
- Temperature (°C)
- Feels Like Temperature (°C)
- Weather Description
- Humidity (%)
- Wind Speed (m/s)
- Pressure (hPa)
- Visibility (km)
- Timezone (UTC offset)
- Local Time & Date
```

### Animated Elements
- **5 Floating Clouds** with different animation speeds (25s - 40s)
- **Fade-in animations** for smooth page load
- **Bounce-in animations** for weather card appearance
- **Smooth transitions** on all interactive elements

### Responsive Breakpoints
- **Mobile**: < 768px (Single column layout)
- **Desktop**: ≥ 768px (Two column layout)

## 🐛 Error Handling

The app includes comprehensive error handling:
- **Network errors** - Connection issues
- **City not found** - Invalid city names
- **API errors** - Server-side issues

Error messages are displayed in a user-friendly format with suggestions.

## 🌟 Future Enhancements

Potential features for future versions:
- [ ] 5-day weather forecast
- [ ] Weather alerts and warnings
- [ ] Multiple language support
- [ ] Dark/Light theme toggle
- [ ] Save favorite cities
- [ ] Weather comparison between cities
- [ ] Historical weather data
- [ ] Air quality index (AQI)
- [ ] UV index display
- [ ] Sunrise/sunset times

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**DerickAmadeus**
- GitHub: [@DerickAmadeus](https://github.com/DerickAmadeus)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data API
- [Leaflet.js](https://leafletjs.com/) - Interactive maps library
- [OpenStreetMap](https://www.openstreetmap.org/) - Map tiles
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- Weather icons from OpenWeatherMap

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

Made with ❤️ and ☁️ by DerickAmadeus
