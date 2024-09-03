import { useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import mist from "./utils/images/mist.jpg";
import rain from "./utils/images/shower_rain.jpg";
import clear_sky from "./utils/images/clear_sky.jpg";
import scatter_cloud from "./utils/images/scatter_cloud.jpg";
import shower_rain from "./utils/images/shower_rain.jpg";
import thunderstorm from "./utils/images/thunderstorm.jpg";
import snow from "./utils/images/snow.jpg";

function App() {
  const { icon_code } = useSelector(
    (store) => store.weather
  );
  let weather_bg = null;
  const icon = icon_code?.slice(0, 2);

  switch (icon) {
    case "01":
      weather_bg = clear_sky;
      break;
    case "02":
      weather_bg = clear_sky;
      break;
    case "03":
      weather_bg = scatter_cloud;
      break;
    case "04":
      weather_bg = scatter_cloud;
      break;
    case "09":
      weather_bg = shower_rain;
      break;
    case "10":
      weather_bg = rain;
      break;
    case "11":
      weather_bg = thunderstorm;
      break;
    case "13":
      weather_bg = snow;
      break;
    case "50":
      weather_bg = mist;
      break;
    default:
      weather_bg = scatter_cloud;
      break;
  }

  return (
    <div className="app">
      <img className="h-screen w-full absolute background-img" src={weather_bg} alt="img" />
      <Body />
    </div>
  );
}

export default App;
