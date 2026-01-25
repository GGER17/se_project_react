const coordinates = { lat: "25.9018", lon: "-97.4975" };
const apiKey = "d173ea9da169c7d2ecec54e7fb563266";

const weatherConditionsImages = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clearsky.svg", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/day/cloudyday.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/day/fog.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/day/storm.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/day/day.svg", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clearskyn.svg", import.meta.url).href,
    },
    clouds: {
      name: "clouds",
      image: new URL("../assets/night/cloudyn.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/night/fogn.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rainn.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snown.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/night/stormn.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/night/night.svg", import.meta.url).href,
    },
  },
};

export { coordinates, apiKey, weatherConditionsImages };
