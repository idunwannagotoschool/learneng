var read = [].slice.call(document.querySelectorAll('use'));

const text = ["I'm fine, thanks.", 'Hello, how are you doing?', 'Fine, thank you.', "Let me introduce myself.", "May I introduce myself?", "Let me introduce him to you.", "May I introduce her to you?", "May I introduce a friend of mine to you?", "May I introduce my colleague? This is Mary.", 'See you later.', 'See you tomorrow.', 'Have a good evening.', 'Have a nice day.', "It's nice to meet you.", "Nice to meet you, too."]

var rate = document.querySelector('#rate');
var ratevalue = document.querySelector('#rate-value');

function speakfirst() {
    responsiveVoice.setDefaultRate(rate.value);
    responsiveVoice.speak("Hi, how are you?");
}

read.forEach(function (content, index) {
    content.addEventListener('click', function () {
        responsiveVoice.setDefaultRate(rate.value);
        var speaktext = text.at(index);
        responsiveVoice.speak(speaktext);
    });
});

rate.addEventListener('change', e => (ratevalue.innerHTML = rate.value));