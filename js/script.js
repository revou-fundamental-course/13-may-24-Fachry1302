// Ini JS

document.getElementById('luas-segitiga').addEventListener('submit', function(event) {
    event.preventDefault();

    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value; 

    if (alas > 0 && tinggi > 0) {
        let area = 0.5 * alas * tinggi;
        document.getElementById('result').innerHTML = ("L = 1/2 x a x t " + "<br>" + "L = 1/2 x " + alas + " x " + tinggi + "<br>" + "L = " + area);
    } else {
        document.getElementById('result').innerText = 'Please enter valid positive numbers';
    }
});