const socket = io();

const expressionInput = document.getElementById('expression');
const calculateBtn = document.getElementById('calculateBtn');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    calculateBtn.setAttribute('disabled', 'disabled');
    const expression = expressionInput.value.trim();
    if (expression) {
        socket.emit('calculate', { expression });
    }
});

socket.on('result', (data) => {
    calculateBtn.removeAttribute('disabled');
    resultElement.innerText = `Result: ${data.result}`;
});

socket.on('error', (data) => {
    resultElement.innerText = `Error: ${data.message}`;
});