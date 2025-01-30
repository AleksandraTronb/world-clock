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
updateTime();
setInterval(updateTime, 1000);
