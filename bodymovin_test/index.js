//const bodymovin = require("./bodymovin");

//var testJS = document.getElementById('js_test');
//testJS.innerHTML("testing JS success!");

//import data from 'bodymovin_test2.json';


var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'selfie2.json'
})

document.getElementById('js_test').innerHTML = "testing JS success. 2!";
