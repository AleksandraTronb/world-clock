function updateTime() {
  let SydneyElement = document.querySelector("#sydney");

  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");
  SydneyDateElement.innerHTML = `${SydneyTime.format("LL")}`;
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //[]- js misses everithing in square brackets
  /*sydneyTimeElement.innerHTML = `${sydneyTime.format(
  "h:mm:ss"
)} <small>${sydneyTime.format("A")}</small>`;*/
  let LondonElement = document.querySelector("#london");

  let LondonDateElement = LondonElement.querySelector(".date");
  let LondonTimeElement = LondonElement.querySelector(".time");
  let LondonTime = moment().tz("Europe/London");
  LondonDateElement.innerHTML = `${LondonTime.format("LL")}`;
  LondonTimeElement.innerHTML = LondonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `
  <div class="cities" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("LL")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelelctElement = document.querySelector("#citySelect");
citySelelctElement.addEventListener("change", updateCityTime);
