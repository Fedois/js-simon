const container = document.getElementById('container');
const containerTwo = document.querySelector('.container-two')
const num = document.createElement('h1')

let countDown = 30
let points = 0

const arrayNum = []
console.log('numeri random; ', arrayNum)


for (let i = 0; i < 5; i++) {

    const random = Math.floor(Math.random() * 100);
    arrayNum.push(random)
    
    const numRandom = newNumRandom(random, 'h1');
    
}
const clock = setInterval(() => {
        
        countDown--
        console.log(countDown);

    if(countDown == 1){
        
        container.style.display = 'none'

    }
    else if(countDown == 0){
        clearInterval(clock);

        for(let i = 1; i <= 5; i++){
            const insert = parseInt(prompt('inserisci il ' + i + '° numero da sinistra a destra'))

            if(arrayNum.includes(insert)){
                
                points++
                console.log(insert, ' giusto')

                const numUser = document.querySelector('.num-user')
                const insertHtml = document.createElement('h2');
                insertHtml.innerHTML = insert;
                numUser.append(insertHtml)
                
                
            }
            
        }
        
        container.style.display = 'block'
        containerTwo.style.display = 'block'
        console.log('punti totali: ' + points)

        const numPoint = document.getElementById('points')
        numPoint.innerHTML = points
        
    }
    
}, 1000);


function newNumRandom(num, html){
    const element = document.createElement(html)
    element.innerHTML = num;
    container.append(element);
}
