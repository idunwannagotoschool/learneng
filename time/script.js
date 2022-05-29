function thething() {
  const funclist = [ranwall, rannum];
  const funcnum = Math.floor(Math.random() * funclist.length);
  const htmllist = ['wallc', 'numberc'];

  document.getElementById('change').innerHTML = document.getElementById(htmllist[funcnum]).innerHTML;


  function ranwall() {

    const mindeg = ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"];
    const ranmin = Math.floor(Math.random() * mindeg.length);
    let y = mindeg[ranmin];

    let x = Math.floor((Math.random() * 12) + 1);

    var z = x * 30 + y * 30 / 360;

    var hour = document.querySelectorAll(".hh");
    hour.forEach(hr => {
      hr.style.transform = 'rotate(' + z + 'deg)';
    });

    var minute = document.querySelectorAll(".mm");
    minute.forEach(min => {
      min.style.transform = 'rotate(' + y + 'deg)';
    });


    const ap = ["AM", "PM"];
    const ranap = Math.floor(Math.random() * ap.length);
    document.getElementById('ampm').innerHTML = ap[ranap];

    const hrans = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const minans = ["", "5 minutes past ", "10 minutes past ", "a quarter past ", "20 minutes past ", "25 minutes past ", "half past ", "25 minutes to ", "20 minutes to ", "a quarter to ", "10 minutes to ", "5 minutes to "];

    if (ranmin == 0) {
      if (x == 12) {
        if (ranap == 0) {
          var ans = 'midnight';
        } else if (ranap == 1) {
          var ans = 'noon';
        }
      } else {
        var ans = hrans[x] + " o'clock";
      }
    } else if (ranmin <= 6) {
      var ans = minans[ranmin] + hrans[x];
    } else if (ranmin > 6) {
      if (x == 12) {
        var ans = minans[ranmin] + 'one';
      } else {
        var ans = minans[ranmin] + hrans[x + 1];
      }
    }
    if (x == 12 && ranmin == 0) {
      var suffix = '';
    } else {
      if (ranap == 0) {
        var suffix = ' in the morning';
      } else if (ranap == 1) {
        if (x < 5 || x == 12) {
          var suffix = ' in the afternoon';
        } else if (x >= 5 && x < 7) {
          var suffix = ' in the evening';
        } else if (x >= 7 && x < 12) {
          var suffix = ' at night';
        }
      }
    }

    document.getElementById('ans').innerHTML = '&zwj;' + ans + suffix;
  }

  function rannum() {
    const hrnum = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const ranhr = Math.floor(Math.random() * hrnum.length);
    let x = ranhr + 1;

    const minnum = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
    const ranmin = Math.floor(Math.random() * minnum.length);
    let y = minnum[ranmin];

    document.getElementById('numhr').innerHTML = '&zwj;' + hrnum[ranhr];
    document.getElementById('nummin').innerHTML = '&zwj;' + y;

    const ap = ["AM", "PM"];
    const ranap = Math.floor(Math.random() * ap.length);
    document.getElementById('ampm1').innerHTML = '&zwj;' + ap[ranap];

    const hrans = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const minans = ["", "5 minutes past ", "10 minutes past ", "a quarter past ", "20 minutes past ", "25 minutes past ", "half past ", "25 minutes to ", "20 minutes to ", "a quarter to ", "10 minutes to ", "5 minutes to "];

    if (ranmin == 0) {
      if (x == 12) {
        if (ranap == 0) {
          var ans = 'midnight';
        } else if (ranap == 1) {
          var ans = 'noon';
        }
      } else {
        var ans = hrans[x] + " o'clock";
      }
    } else if (ranmin <= 6) {
      var ans = minans[ranmin] + hrans[x];
    } else if (ranmin > 6) {
      if (x == 12) {
        var ans = minans[ranmin] + 'one';
      } else {
        var ans = minans[ranmin] + hrans[x + 1];
      }
    }
    if (x == 12 && ranmin == 0) {
      var suffix = '';
    } else {
      if (ranap == 0) {
        var suffix = ' in the morning';
      } else if (ranap == 1) {
        if (x < 5 || x == 12) {
          var suffix = ' in the afternoon';
        } else if (x >= 5 && x < 7) {
          var suffix = ' in the evening';
        } else if (x >= 7 && x < 12) {
          var suffix = ' at night';
        }
      }
    }

    document.getElementById('ans').innerHTML = '&zwj;' + ans + suffix;

  }

  funclist[funcnum]();

  var e = document.getElementById('ans');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}

thething();

function re() {
  thething();
}

function myFunction() {

  var e = document.getElementById('ans');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function onClickPlay() {
  responsiveVoice.speak(document.getElementById("ans").textContent);
}