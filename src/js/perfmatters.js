// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
/*eslint-disable no-unused-vars*/
import '../css/style.css';
import '../css/print.css';
import './analytics.js';
import profilePic from '../img/profilepic.jpg';
import game from '../img/2048.jpg';
import wpo from '../img/wpo.jpg';
import mwd from '../img/mwd.jpg';


function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function (event) {
  logCRP();
});
