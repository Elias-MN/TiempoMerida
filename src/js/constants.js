const base = "https://api.open-meteo.com/";
const resourcePath = "v1/forecast";
const queryParameters =
  "?latitude=38.9161&longitude=-6.3437&current=temperature_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin&forecast_days=3";
const endPoint = `${resourcePath}${queryParameters}`;

export const API_URL = `${base}${endPoint}`;
export const STRONG_WIND = 41;
export const HIGH_TEMPERATURE = 30;
export const LOW_TEMPERATURE = 10;
export const PHRASES = [
  "El tiempo está tan perfecto que ni el WiFi se atreve a fallar.",
  "¡Hoy el sol compila sin errores, sal a disfrutarlo!",
  "El tiempo está tan bueno que parece que alguien encontró el algoritmo perfecto.",
  "Con este tiempo, hasta el código te perdonará por dejarlo en pausa.",
  "Con este clima, hasta el NPC de la tienda te diría que salgas de casa.",
  "Hoy el sol tiene mejores gráficos que cualquier videojuego.",
  "Con este tiempo, el único lag es quedarte en casa pensando si salir.",
  "El mundo exterior está en ultra HD, sin pantallas de carga. ¡Sal y compruébalo!",
];
export const STRONG_WIND_PHRASE =
  "¡El viento está tan fuerte que mi sombra ya me está pidiendo permiso para volar!";
export const HIGH_TEMPERATURE_PHRASE =
  "Hoy hace tanto calor que ni el sol quiere salir de su casa";
export const LOW_TEMPERATURE_PHRASE =
  "¡Hace tanto frío que los pingüinos están pidiendo calefacción!";
