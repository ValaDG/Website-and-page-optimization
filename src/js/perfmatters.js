// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
/*eslint-disable no-unused-vars*/
import '../css/style.css';
import '../css/print.css';
import './analytics.js';
import profilePic from '../img/profilepic-min.jpg';
import game from '../img/2048-min.jpg';
import wpo from '../img/wpo-min.jpg';
import mwd from '../img/mwd-min.jpg';


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
