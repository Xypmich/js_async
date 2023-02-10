const rl = require('readline').createInterface(process.stdin, process.stdout);
const randomNumber = Math.floor(Math.random()*1001);
let trysCount = 1;

function getAnswer (question) {
    return new Promise((resolve, reject) => {
        rl.question(question, data => {
            resolve(data);
        })
    })
}

async function gesser () {
    let answer = await getAnswer('=================\nЯ загадал число от 0 до 1000.\nПопробуй угадать:');
    while (true) {
        if (isNaN(Number(answer)) && answer != 'exit') {
            answer = await getAnswer('=================\nПожалуйста, введите число:');
        } else if (answer == randomNumber) {
            console.log(`=================\n${randomNumber} - это правильный ответ! Кол-во попыток: ${trysCount}\nДо скорых встреч!\n=================`);
            rl.close();
            break
        } else if (answer < randomNumber) {
            trysCount++;
            answer = await getAnswer(`=================\nЗагаданное число больше.\nПопытка ${trysCount}:`);
        } else if (answer > randomNumber) {
            trysCount++;
            answer = await getAnswer(`=================\nЗагаданное число меньше.\nПопытка ${trysCount}:`);
        } else if (answer == 'exit') {
            console.log('=================\nДо скорых встреч!\n=================');
            rl.close();
            break
        }
    }
}

gesser();