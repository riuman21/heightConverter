const meterBtn = document.getElementById('meter');
const feetBtn = document.getElementById('feet');

meterBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 3.281 + ' Meter';

})

feetBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 3.281 + ' Feet';
})