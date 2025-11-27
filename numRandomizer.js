const numbers = document.querySelectorAll('.number');
const randomizeBtn = document.querySelector('.randomizeBtn');
const updateBtn = document.querySelector('.updateBtn');


function randomInt(max){
    let randomized = Math.floor(Math.random() * max);
    return randomized;
};


function randomizer(){
    // this already returns an array/NodeList kaya no need for for loop
    numbers.forEach(num => {
        num.innerText = randomInt(101); 
    });
};

function updateColor(){
    numbers.forEach(num => {
        let value = Number(num.innerText);
        let oddColor = document.getElementById('oddColor');
        let evenColor = document.getElementById('evenColor');

        if(value % 2 !== 0){
            num.classList.remove('s-tier');
            num.style.backgroundColor = oddColor.value;
        }
        if(value % 2 === 0){
            num.classList.remove('s-tier');
            num.style.backgroundColor = evenColor.value;
        }if(value === 67 || value === 0){
            num.classList.toggle('s-tier'); 
        }
    })
}

randomizeBtn.addEventListener('click', () => {
    randomizer();
    updateColor();
});

updateBtn.addEventListener('click', updateColor);


