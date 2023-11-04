function displayTemperature(response) {
  console.log(response.data.temperature.current);
  temperatureElement = document.querySelector("#temp");
  temperature = Math.round(response.data.temperature.current);
  let city = response.data.city
  let country = response.data. country
  let description = response.data.condition.description
  temperatureElement.innerHTML =`The temperature in ${response.data.city} ${response.data.country} is ${temperature} degrees (${description})`;
}

let city = "lagos"
let apiKey ="4175dd44d23bf5fo300715703fa0tf94"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`


axios.get(apiUrl).then(displayTemperature);