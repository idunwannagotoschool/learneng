function random() {
  const hrans = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  const minans = ["", "5 minutes past ", "10 minutes past ", "a quarter past ", "20 minutes past ", "25 minutes past ", "half past ", "25 minutes to ", "20 minutes to ", "a quarter to ", "10 minutes to ", "5 minutes to "];
  const ap = ["AM", "PM"];

  const x = Math.floor(Math.random() * hrans.length);
  const y = Math.floor(Math.random() * minans.length);
  const z = Math.floor(Math.random() * ap.length);

  if (y == 0) {
    if (x == 11) {
      if (z == 0) {
        var ans = 'midnight';
      } else if (z == 1) {
        var ans = 'noon';
      }
    } else {
      var ans = hrans[x] + " o'clock";
    }
  } else if (y <= 6) {
    var ans = minans[y] + hrans[x];
  } else if (y > 6) {
    if (x == 11) {
      var ans = minans[y] + 'one';
    } else {
      var ans = minans[y] + hrans[x + 1];
    }
  }
  if (x == 11 && y == 0) {
    var suffix = '';
  } else {
    if (z == 0) {
      var suffix = ' in the morning';
    } else if (z == 1) {
      if (x < 4 || x == 11) {
        var suffix = ' in the afternoon';
      } else if (x >= 4 && x < 6) {
        var suffix = ' in the evening';
      } else if (x >= 6 && x < 11) {
        var suffix = ' at night';
      }
    }
  }

  document.getElementById('texttoshow').innerHTML = '&zwj;' + ans + suffix;

  const mindeg = ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"];

  var hrdeg = (x + 1) * 30 + mindeg[y] * 30 / 360;

  var hour = document.querySelectorAll(".hh");
  hour.forEach(hr => {
    hr.style.transform = 'rotate(' + hrdeg + 'deg)';
  });

  var minute = document.querySelectorAll(".mm");
  minute.forEach(min => {
    min.style.transform = 'rotate(' + mindeg[y] + 'deg)';
  });

  document.getElementById('ampm').innerHTML = ap[z];

  const hrnum = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  const minnum = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  document.getElementById('numhr').innerHTML = '&zwj;' + hrnum[x];
  document.getElementById('nummin').innerHTML = '&zwj;' + minnum[y];
  document.getElementById('ampm1').innerHTML = '&zwj;' + ap[z];

  var e = document.getElementById('answer');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}

random();

function re() {
  random();
}

function myFunction() {

  var e = document.getElementById('answer');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function onClickPlay() {
  responsiveVoice.speak(document.getElementById("texttoshow").textContent);
}