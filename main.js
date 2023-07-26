var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

setInterval(function () {
  let date = new Date();
  hour.innerText = date.getHours();
  minute.innerText = date.getMinutes();
  second.innerText = date.getSeconds();
}, 1000);
