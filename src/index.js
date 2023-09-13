const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("December 25, 2023 00:00:00").getTime();
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

  clockTitle.innerText = `${ddDate.day}days ${ddDate.hr}hours ${ddDate.min}mins ${ddDate.sec}sec`;
};

countDown();
setInterval(() => {
  countDown();
}, 1000);
