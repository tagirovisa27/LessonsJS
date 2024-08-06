
function learnJs(lang, callback) {
   console.log('Я учу '+ lang);
   callback();
}

learnJs('JavaScript', done);

function done() {
  console.log('Я прошел 3-й урок!');
}

