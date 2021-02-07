import AppRouter from "./router/routes";
import { useState, useEffect } from "react";
import axios from "axios";

// Styles
import "./assets/scss/_index.scss";

function App() {
  const apiKey = "1975d69f04a4a6b224580324dcf44509";

  const [meteo, setMeteo] = useState("Fetching Data...");

  function geo_success(position) {
    const request = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
    axios.get(request)
      .then(res => {
        setMeteo(`${res.data.name} : ${Math.round(res.data.main.temp)}°C`)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function geo_error(position) {
    setMeteo("Position access denied !");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geo_success, geo_error);
  }, []);

  return (
    <div className="app">
      <AppRouter />
      <div className="meteoCard">{meteo}</div>
    </div>
  );
}

export default App;
