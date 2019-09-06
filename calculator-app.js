//STR TO INT FROM UI
var digits = "";

//THE OP + NUMS (from digits)
var math = [];

//THE RESULT
var res = 0;

//SCREEN
var screen;
screen = document.getElementById('screen');



/** CALCULATOR ALGO */

//CREATE A NUMBER FROM DIGITS[str]
function getValue(val) {
    digits += val;
    screen.innerHTML = digits;
}
//TAKES CARE OF THE CHRONOLOGY and RETURNS THE RESULT
function opChrono(arr, id) {
    //LAST NUMBER EXCEPTION
    if (digits) {
        math.push(parseFloat(digits));
        digits = "";
    }
    arr.map(function(val, idx, arr) {
        //MULTI FIRST
        if (val == "*") {
            arr.splice((idx - 1), 3, (arr[idx - 1] * arr[idx + 1]));
        }
        //THEN DIVISION
        if (arr.indexOf("*") == -1 && val == "/") {
            arr.splice((idx - 1), 3, (arr[idx - 1] / arr[idx + 1]));
        }
    })

    //no MULTI/DIV
    if (arr.indexOf("*") == -1 && arr.indexOf("/") == -1) {

        //FIRST NUMBER EXCEPTION
        res += arr[0];

        //GEN RES
        arr.map(function(value, index, arr) {
            if (value == "-" || value == "+") {
                res += parseFloat(value + arr[index + 1]);
            }
        })

        //SHOW RES
        screen.innerHTML = res;
        //RECU STOP
        return arr;
    };
    //RECU GO
    return opChrono(arr, id);
}

function getSign(id) {
    //create INT and put into OP ARR
    math.push(parseFloat(digits));
    //the SIGN
    lastSign = document.getElementById(id).id;
    if (lastSign != "eq") {
        math.push(lastSign);
    }
    //show
    screen.innerHTML = math.join(" ");
    //reset to create a new NUMBER
    digits = "";
}

//OTHER FUNCTIONS
//clear

document.getElementById("AC").addEventListener('click', function() {

    math = [];
    digits = "";
    res = 0;

    screen.innerHTML = 0;

    return math, digits, res;
});