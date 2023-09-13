const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("December 24, 2023 00:00:00").getTime();
const now = new Date();
const countDown = function () {
  let today = new Date().getTime();
  let dd = christmas - today;

  let ddDate = {
    day: Math.floor(dd / (1000 * 60 * 60 * 24)),
    hr: Math.floor((dd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min: Math.floor((dd % (1000 * 60 * 60)) / (1000 * 60)),
    sec: Math.floor((dd % (1000 * 60)) / 1000),
  };
  document.querySelector(".day").innerText = ddDate.day;
  document.querySelector(".hour").innerText = ddDate.hr;
  document.querySelector(".min").innerText = ddDate.min;
  document.querySelector(".sec").innerText = ddDate.sec;
};

countDown();
setInterval(() => {
  countDown();
}, 1000);
