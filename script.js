let points = 0;
let choiceCount = 0;
let chosenCards = [];
let boardActive = true;

const choose = async index => {
    const card = document.querySelector(`[data-index="${index}"]`);
    if(card.dataset.status == "active" && boardActive == true) {

        card.style.backgroundColor = card.dataset.c;
        choiceCount++;
        chosenCards[choiceCount-1] = card;
        if(choiceCount==2) {
            boardActive = false;
            checkIfCorrect();
            checkWin();
        }
    }
}

const checkIfCorrect = () => {
    if(chosenCards[0].dataset.c == chosenCards[1].dataset.c) {
        points++;
        chosenCards.forEach((element) => {
            element.dataset.status = "inactive";
        })
        boardActive = true;
    } else {
        setTimeout(() => {
            chosenCards.forEach((element) => {
                element.style.backgroundColor = "#222";  
            })
            boardActive = true;
        }, 400);
    }
    choiceCount = 0;
}

const checkWin = () => {
    if(points == 12) {
        setTimeout(() => {
            alert('Congratulations');
            location.reload();
        }, 200);
    }
} 