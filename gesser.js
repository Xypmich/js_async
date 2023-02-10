const rl = require('readline').createInterface(process.stdin, process.stdout);
const randomNumber = Math.floor(Math.random()*1001);
let trysCount = 1;
let selector = 0;


function gesser () {
    if (selector == 3) {
        console.log(`=================\n${randomNumber} - это правильный ответ! Кол-во попыток: ${trysCount}\nДо скорых встреч!\n=================`);
                rl.close();
                return
    } else if (selector == 4) {
        console.log('=================\nДо скорых встреч!\n=================');
        rl.close();
        return
    }
    if (selector == 0){
        rl.question('=================\nЯ загадал число от 0 до 1000.\nПопробуй угадать:', answer => {
            trysCount++;
            if (isNaN(Number(answer)) && answer != 'exit') {
                selector = 2;
            } else if (answer == randomNumber) {
                selector = 3;
            } else if (answer < randomNumber) {
                selector = 1;
            } else if (answer > randomNumber) {
                selector = -1;
            } else if (answer == 'exit') {
                selector = 4;
            }
            gesser();
        })
    } else if (selector == 1) {
        rl.question(`=================\nЗагаданное число больше.\nПопытка ${trysCount}:`, answer => {
            trysCount++;
            if (isNaN(Number(answer)) && answer != 'exit') {
                selector = 2;
            } else if (answer == randomNumber) {
                selector = 3;
            } else if (answer > randomNumber) {
                selector = -1;
            } else if (answer == 'exit') {
                selector = 4;
            }
            gesser();
        })
    } else if (selector == -1) {
        rl.question(`=================\nЗагаданное число меньше.\nПопытка ${trysCount}:`, answer => {
            trysCount++;
            if (isNaN(Number(answer)) && answer != 'exit') {
                selector = 2;
            } else if (answer == randomNumber) {
                selector = 3;
            } else if (answer < randomNumber) {
                selector = 1;
            } else if (answer == 'exit') {
                selector = 4;
            }
            gesser();
        })
    } else if (selector == 2) {
        rl.question('=================\nПожалуйста, введите число:', answer => {
            if (answer == randomNumber) {
                selector = 3
            } else if (answer < randomNumber) {
                selector = 1;
            } else if (answer > randomNumber) {
                selector = -1;
            } else if (answer == 'exit') {
                selector = 4;
            }
            gesser();
        })
    }
}

gesser();