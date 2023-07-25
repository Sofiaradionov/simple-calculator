function clearAll() {
    var display = document.getElementById('display');
    display.value = '';
}

function clearCharacter() {
    var display = document.getElementById("display");
    var currentValue = display.value;
    var newValue = currentValue.slice(0, -1);
    display.value = newValue;
}

function appendCharacter(character) {
    var display = document.getElementById("display");
    if (character === ',') {
        character = '.';
    }
    display.value += character;
}

function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;

    try {
        var result = new Function('return ' + expression)();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    var display = document.getElementById("display");
    var expression = display.value;
    var result = parseFloat(expression) / 100; 
    display.value = result;
}
