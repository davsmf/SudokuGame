let game1 = [[9,5,7,6,1,3,2,8,4],
            [4,8,3,2,5,7,1,9,6],
            [6,1,2,8,4,9,5,3,7],
            [1,7,8,3,6,4,9,5,2],
            [5,2,4,9,7,1,3,6,8],
            [3,6,9,5,2,8,7,4,1],
            [8,4,5,7,9,2,6,1,3],
            [2,9,1,4,3,6,8,7,5],
            [7,3,6,1,8,5,4,2,9]];

let game2 = [[5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]];

let game3 = [[4,1,7,3,6,9,8,2,5],
            [6,3,2,1,5,8,9,4,7],
            [9,5,8,7,2,4,3,1,6],
            [8,2,5,4,3,7,1,6,9],
            [7,9,1,5,8,6,4,3,2],
            [3,4,6,9,1,2,7,5,8],
            [2,8,9,6,4,3,5,7,1],
            [5,7,3,2,9,1,6,8,4],
            [1,6,4,8,7,5,2,9,3]];

let game4 = [[4,8,3,9,2,1,6,5,7],
            [9,6,7,3,4,5,8,2,1],
            [2,5,1,8,7,6,4,9,3],
            [5,4,8,1,3,2,9,7,6],
            [7,2,9,5,6,4,1,3,8],
            [1,3,6,7,9,8,2,4,5],
            [3,7,2,6,8,9,5,1,4],
            [8,1,4,2,5,3,7,6,9],
            [6,9,5,4,1,7,3,8,2]];

let game5 = [[8,5,9,6,1,2,4,3,7],
            [7,2,3,8,5,4,1,6,9],
            [1,6,4,3,7,9,5,2,8],
            [9,8,6,1,4,7,3,5,2],
            [3,7,5,2,6,8,9,1,4],
            [2,4,1,5,9,3,7,8,6],
            [4,3,2,9,8,1,6,7,5],
            [6,1,7,4,2,5,8,9,3],
            [5,9,8,7,3,6,2,4,1]];

let mat = [[0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]];  

let sudokuGame = [[1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1]];

// check if the username and password are valid or check registration details.
function userValid(type) {
    // checking username and password
    if (type == 'logIn') {
        let str = document.getElementById("inputUser").value;
        let num = document.getElementById("inputPassword").value;
        if (str == 'abcd' && num == '1234') {
            document.getElementById("userPart").style.display = "none";
            document.getElementById("levelPart").style.display = "block";
            document.getElementById('usenameInport').innerHTML = str + '!';
        } else if (str != 'abcd') {
            document.getElementById("userError").innerHTML = 'User name is not valid, try again!';
        }
        if (num != '1234') {
            document.getElementById("passwordError").innerHTML = 'Wrong Password, try again!';
        }  
    }
    // checking registration details.
    else {
        let str = document.getElementById("inputName").value;
        let password1 = document.getElementById("InputPassword1").value;
        let password2 = document.getElementById("InputPassword2").value;
        let email = document.getElementById("InputEmail").value;

        if (str.length >=4 && password1.length >= 4 && password1 == password2 && email.includes('@') && email.includes ('.') && email.length >7 ) {
            document.getElementById("userPart").style.display = "none";
            document.getElementById("levelPart").style.display = "block";
            document.getElementById('usenameInport').innerHTML = str + '!';
        }
        if (str.length < 4) {
            document.getElementById("nameError").innerHTML = 'Name to short, Please enter again!';
        }
        if (password1.length < 4) {
            document.getElementById("passwordRegisterError").innerHTML = 'Password to short, Please enter again!';
        }
        if(password1 != password2){
            document.getElementById("passwordRegisterError").innerHTML = 'Password doesn\'t match, Please enter again!';
        }
        if (email.indexOf('@')== -1 || email.indexOf('.')== -1) {
            document.getElementById("emailError").innerHTML = 'Email is wrong, Please enter again!';
        }
    }
}

// changing to registration or to login.
function registerApplication(type) {
    if (type == 'register') {
        document.getElementById("logIn").style.display = "none";
        document.getElementById("register").style.display = "block";  
    }
    else if (type == 'logIn') {
        document.getElementById("register").style.display = "none";
        document.getElementById("logIn").style.display = "block";
    }   
}


//level choice
let gameLevel = 0;
function levelChoose(level) {
// game level will be the number of the empty inputs on the sudoku
    if (level == 'easy') {
        gameLevel = 40; // Precise number!
      }
    else if (level == 'normal') {
        gameLevel = 52; // Precise number!
      }
    else {
        gameLevel = 60; // Precise number!
      }
// changing to game layout
      document.getElementById("levelPart").style.display = "none";
      document.getElementById("logo-sudoku").style.display = "none";
      document.getElementById("gamePart").style.display = "block";
      document.getElementById("timer").style.display = "block";
      document.getElementById("winner").style.display = "none";
      document.getElementById('total-time').style.display = 'none';
      document.getElementById("newGame-button").style.display = "none";
      document.getElementById("refresh").style.display = "none";
      document.getElementById('again-button').style.display = 'block';
      document.getElementById('finish-button').style.display = 'block';
      //reset timer
      document.getElementById('timer').innerHTML = 000 + ":" + 00;

// creating the game function
      randomGame();
}

// creating the sudoku game

function creatingGame() {

    let gameNumber = Math.floor(Math.random() * 5 - 0)+1;
    console.log(gameNumber + ' is the game number');

    if (gameNumber == 1) {
        start = game1;
    }
    else if (gameNumber == 2) {
        start = game2;
    }
    else if (gameNumber == 3) {
        start = game3;
    }
    else if (gameNumber == 4) {
        start = game4;
    }
    else if (gameNumber == 5) {
        start = game5;
    }

    // changes the order of numbers in given matrices
let num = [];
for (let i = 0; i < 9; i++) {
let rand = Math.floor(Math.random() * 9 - 0) +1;
if (num.includes(rand)) {
    i--;
}
else {
    num.push(rand);
    for (let c = 0; c < 9; c++) {
    for (let d = 0; d < 9; d++) {
            if (start[c][d] == i+1) {
                mat[c][d] = rand;               
                }
            }
        }
    }
}
        console.log(mat);
    }

// randomly erases numbers from the sudokuGame's array
function randomGame() {
    
    creatingGame();
    for (let i = 0; i < gameLevel; i++) {
        rand = Math.floor(Math.random() * 9 - 0);
        rand2 = Math.floor(Math.random() * 9 - 0);
        if (sudokuGame[rand][rand2] == '') {
            i--;
        }
        else {
            sudokuGame[rand][rand2] = ''; 
        }        
    }
    // after erasing cubes from sudokuGame, it will insert numbers from given matrices
    for (let k = 0; k < 9; k++) {
        for (let l = 0; l < 9; l++) {
            if (sudokuGame[k][l] != '') {
                sudokuGame[k][l] = mat[k][l];
            }
        }
    }
    // inserts the grid inside the HTML
    let r = 'abcdefghi';
    for (let row = 0; row < 9; row++) {
    let c = 0;
    for (let col = 0; col < 9; col++) {
        idNumber = r.charAt(row) + c;
        document.getElementById(idNumber).value = sudokuGame[row][col];
        if (sudokuGame[row][col] != '') {
            document.getElementById(idNumber).readOnly = true;
            document.getElementById(idNumber).style.color = '#007bff';
            document.getElementById(idNumber).style.background = '#f7f7f7';
        }
        else {
            document.getElementById(idNumber).style.background = 'white';
            document.getElementById(idNumber).style.color = 'black';
            document.getElementById(idNumber).readOnly = false;
        }
        c++;
        }
    }
}
    
// again function
function again() {
    let r = 'abcdefghi';
    for (let row = 0; row < 9; row++) {
        let c = 0;
        for (let col = 0; col < 9; col++) {
            idNumber = r.charAt(row) + c;
            document.getElementById(idNumber).value = sudokuGame[row][col];
            c++;  
                if (sudokuGame[row][col] == '') {
                    document.getElementById(idNumber).style.color = 'black';
                    document.getElementById(idNumber).readOnly = false;
            }
        }
    } 

    document.getElementById('finish-button').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    document.getElementById("winner").style.display = 'none';
    // reset timer
    document.getElementById('timer').innerHTML = 000 + ":" + 00;
    document.getElementById('total-time').style.display = 'none';
    document.getElementById('totalMistakes').style.display = 'none';
    document.getElementById("newGame-button").style.display = "none";

}




// finish function
function finish() {
// checking all the numbers
    let r = 'abcdefghi';
    counter = 0;
    for (let row = 0; row < 9; row++) {
    let c = 0;
    for (let col = 0; col < 9; col++) {
        idNumber = r.charAt(row) + c;
        document.getElementById(idNumber).readOnly = true;
        if (document.getElementById(idNumber).value == mat[row][col]) {
            counter++
        } 

        // getting a red color for all mistakes
        else{
            document.getElementById(idNumber).style.color = 'red';
        }
        c++;
    }
}
// if everything is good
    if (counter == 81) {

    // getting the time
    time = timerTotal;
    document.getElementById("total-time").style.display = "block";
    document.getElementById("total-time").innerHTML = 'Total time is: ' + time;
    document.getElementById('timer').style.display = 'none';
    document.getElementById('again-button').style.display = 'none';
    document.getElementById('finish-button').style.display = 'none';
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = "you win!";
    document.getElementById("winner").style.borderBottomColor = '#007bff';
    document.getElementById("winner").style.borderTopColor = '#007bff';
    document.getElementById("newGame-button").style.display = "block";
    document.getElementById("refresh").style.display = "block";
    }    

// if there are mistakes
    else {

        // geting the time
        time = timerTotal;
        document.getElementById('timer').style.display = 'none';
        // lose message
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "you lose!";
        document.getElementById("winner").style.borderBottomColor = 'red';
        document.getElementById("winner").style.borderTopColor = 'red';
        document.getElementById("newGame-button").style.display = "block";
        // timer message
        document.getElementById("total-time").style.display = "block";
        document.getElementById("total-time").innerHTML = 'Total time is: ' + time;
        document.getElementById('finish-button').style.display = 'none';
        // total mistakes message
        document.getElementById("totalMistakes").style.display = "block";
        total = 81 - counter;
        document.getElementById("totalMistakes").innerHTML = "Total mistakes is: " + total;
    } 
}

// new game function
function newGame() {

    // changing the layout
    document.getElementById("logo-sudoku").style.display = "block";
    document.getElementById("levelPart").style.display = "block";
    document.getElementById("gamePart").style.display = "none";
    document.getElementById("totalMistakes").style.display = "none";


// resetting start to get the new game
sudokuGame = [[1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1]];
        }