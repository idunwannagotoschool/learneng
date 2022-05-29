var read = [].slice.call(document.querySelectorAll('use'));

const month = ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function speakjan() {
  responsiveVoice.speak("January");
}

read.forEach(function (months, index) {
  months.addEventListener('click', function () {
    var speaktext = month.at(index);
    responsiveVoice.speak(speaktext);
  });
});
