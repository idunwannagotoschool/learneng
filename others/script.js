var read = [].slice.call(document.querySelectorAll('use'));

const text = ['singing', 'painting', 'photographing', 'fishing', 'reading', 'watching TV', 'watching movie', 'What is your hobby?', 'My hobby is fishing.']

function speakfirst() {
    responsiveVoice.speak("cooking");
}

read.forEach(function (content, index) {
    content.addEventListener('click', function () {
        var speaktext = text.at(index);
        responsiveVoice.speak(speaktext);
    });
});
