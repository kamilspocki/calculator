var digits = "";
var math = [];
var res = 0;
var screen;
screen = document.getElementById('screen');

function getValue(val) {
    digits += val;
    screen.innerText = digits;
}

function opChrono(arr, id) {

    if (digits) {
        math.push(parseFloat(digits));
        digits = "";
    }
    arr.map(function(val, idx, arr) {
        
        if (val == "/") {
            arr.splice((idx - 1), 3, (arr[idx - 1] / arr[idx + 1]));
        }
        if (arr.indexOf("/") == -1 && val == "*") {
            arr.splice((idx - 1), 3, (arr[idx - 1] * arr[idx + 1]));
        }
    });

    if (arr.indexOf("*") == -1 && arr.indexOf("/") == -1) {

        res += arr[0];

        arr.map(function(value, index, arr) {
            if (value == "-" || value == "+") {
                res += parseFloat(value + arr[index + 1]);
            }
        });
        screen.innerText = res;
        return arr;
    };
    return opChrono(arr, id);
}

function getSign(id) {

    if (digits) {
        math.push(parseFloat(digits));
        lastSign = document.getElementById(id).id;

        if (lastSign != "eq") {
            math.push(lastSign);
        }
    }
    screen.innerText = math.join(" ");
    digits = "";
}

document.getElementById("AC").addEventListener('click', function() {

    math = [];
    digits = "";
    res = 0;

    screen.innerText = 0;

    return math, digits, res;
});
