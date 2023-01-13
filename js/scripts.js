const container = document.getElementById('container');
const num = document.createElement('h1')

console.log(container)

let countDown = 3

const arrayNum = []
console.log(arrayNum)

const arrayIns = []
console.log(arrayIns)

for (let i = 0; i < 5; i++) {

    const random = Math.floor(Math.random() * 100);
    arrayNum.push(random)
    
    const num = document.createElement('h1')
    num.innerHTML = random;
    container.append(num);
    
}

const clock = setInterval(() => {
    countDown--
        console.log(countDown)
    if(countDown == 1){
        container.innerHTML = ''
    }
    else if(countDown == 0){
        clearInterval(clock);

        for(let i = 1; i <= 5; i++){
            const insert = parseInt(prompt('inserisci il ' + i + '° numero da sinistra a destra'))
            arrayIns.push(insert)
        }
    }
    if(arrayNum.includes(arrayIns)){
        
        console.log(arrayIns)
    
    }
}, 1000)

;
