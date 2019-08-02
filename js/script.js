const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 8, 23).getTime();
const fourthOfJuly2 = new Date(year, 11, 21).getTime();
// countdown
function changeVal() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;
  console.log();
  
  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff/1000/60/24);
  let minutes = Math.floor(diff/1000/60);
  let seconds = Math.floor(diff / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "天</div>剩余</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "时</div>剩余</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "分</div>剩余</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "秒</div>剩余</div> \
</div>";

  const diff2 = fourthOfJuly2 - today;
  console.log();

  // math
  let days2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));
  let hours2 = Math.floor(diff2/1000/60/24);
  let minutes2 = Math.floor(diff2/1000/60);
  let seconds2 = Math.floor(diff2 / 1000);
  document.getElementById("timer2").innerHTML =
  "<div class=\"days\"> \
  <div class=\"numbers\">" + days2 + "天</div>剩余</div> \
  <div class=\"hours\"> \
  <div class=\"numbers\">" + hours2 + "时</div>剩余</div> \
  <div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes2 + "分</div>剩余</div> \
  <div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds2 + "秒</div>剩余</div> \
  </div>";

}
window.onload = function(){

  changeVal()
  let timer = setInterval(changeVal, 1000);
}