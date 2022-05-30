var read = [].slice.call(document.querySelectorAll('use'));

const text = ['singing', 'painting', 'photographing', 'fishing', 'reading', 'watching TV', 'watching movie', 'What is your hobby?', 'My hobby is fishing.', 'playing TV games', 'playing yoga', 'playing chess', 'playing cards', 'playing puzzles', 'playing the piano', 'playing the guitar', 'playing the violin', 'What is your hobby?', 'Playing yoga is one of my hobbies.']

function speakfirst() {
    responsiveVoice.speak("cooking");
}

read.forEach(function (content, index) {
    content.addEventListener('click', function () {
        var speaktext = text.at(index);
        responsiveVoice.speak(speaktext);
    });
});
