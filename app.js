const apiKey = "&appid=26ce19f7020e8d2bb28f6a502c124710&units=metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const country = document.querySelector(".country-input");
const submit = document.querySelector(".button");
const content = document.querySelector(".content");
const img = document.querySelector(".hava-png");
const tempHeader = document.querySelector(".temp");
const cName = document.querySelector(".country-name");
const desc = document.querySelector(".desc");
const c = document.querySelector(".country")

const iconGenerator = (icon) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return iconUrl;
};

const events = (data) => {
  data.main.temp;
  img.src = iconGenerator(data.weather[0].icon);
  tempHeader.innerHTML = `${data.main.temp} C°`;
  if (data.name.includes("Province")) {
    cName.innerHTML = data.name.slice(0, data.name.length - 9);
  } else {
    cName.innerHTML = data.name;
  }
  desc.innerHTML = data.weather[0].main;
  console.log(data);
  c.innerHTML = data.sys.country
};

submit.addEventListener("click", () => {
  const full = url + country.value + apiKey;
  fetch(full)
    .then((res) => res.json())
    .then((data) => events(data))
    .catch((err) => console.log(err.message));
  country.value = "";
});
