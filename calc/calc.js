const display = document.getElementById("display");

function appendToDisp(input) {
    display.value += input;
     // Append input to the display
}

function clr() {
    display.value = ""; // Clear the display
}

function calculate() {
    try {
        // Evaluate the expression entered in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; // Show "Error" if evaluation fails
    }
}
