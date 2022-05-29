function wholething() {
  let x = Math.floor((Math.random() * 10) + 1);

  const mul = ["1", "10", "100", "1000", "10"];

  const ran = Math.floor(Math.random() * mul.length);

  let y = mul[ran];

  function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }
  document.getElementById("number").value = getRndInteger((x - 1) * y, x * y - 1);

  if (document.querySelector('#number').value == '0') {
    document.querySelector('#words').innerHTML = 'zero';
  } else {
    function intToWords(rawValue) {
      var num = rawValue,
        a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '],
        b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        c = ['thousand', 'million', ''],
        words = '';

      num = ('000000000' + num.toString()).substr(-9) // Make number into a predictiable nine character string
        .match(/.{3}/g); // Split string into chuncks of three numbers then reverse order of returned array

      for (var i = 0; i < c.length; i++) {
        var n = num[i],
          str = '';
        str += (words != '') ? ' ' + c[c.length - 1 - i] + ' ' : '';
        str += (n[0] != 0) ? (a[Number(n[0])] + 'hundred ') : '';
        n = n.substr(1);
        str += (n != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n)] || b[n[0]] + ' ' + a[n[1]]) : '';
        words += str;
      }
      return words.replace(/ +/g, ' ').replace(/ $/, '');
    }

    document.querySelector('#words').innerHTML = intToWords(Number(document.querySelector('#number').value));

  }
  var e = document.getElementById('number');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'none';
}
wholething();

function myFunction() {

  var e = document.getElementById('number');
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function re() {
  wholething();
}

function onClickPlay() {
  responsiveVoice.speak(document.getElementById("words").textContent);
}