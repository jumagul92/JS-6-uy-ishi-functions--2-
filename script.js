let task = +prompt("Yechmoqchi bo'lgan misollar miqdorini kiriting")
while(isNaN(task) || task==0){
    task = +prompt("Xato! Qaytadan urinib ko'rib, son kiriting")
}

function random(min,max) {
    return Math.round(Math.random()*(max-min)+min)
}

for (let i = 0; i < task; i++) {
    let num1 = random(5,10)
    let num2 = random(1,5)
    let symbol = random(1,5)
    if(symbol==1){
        question = `${num1} + ${num2} = ?`
        answer = num1 + num2
    } else if(symbol==2){
        question = `${num1} - ${num2} = ?`
        answer = num1 - num2
    } else if(symbol==3){
        question = `${num1} * ${num2} = ?`
        answer = num1 * num2
    } else if(symbol ==4){
        question = `${num1} / ${num2} = ?`
        answer = num1 / num2
    } else if(symbol==5){
        question = `${num1} % ${num2} = ?`
        answer = num1 % num2
    }

    let example = +prompt(`${i+1}-misol: ${question}`)
    if(example==answer){
        console.log(`Sizning javobingiz to'g'ri: ${answer}`);
    } else{
        console.log(`Sizning javobingiz noto'g'ri: ${example} | To'g'ri javob: ${answer}}`);
    }


}