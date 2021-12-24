// const GameMsg = document.querySelector('#productDescription');
let requestURL = '../json/en_game_list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const GameList = request.response;
    cardData(GameList);
    loadData(GameList);
}

// Create the game card form JSON
function cardData(obj) {
    let GameList = obj;
    SL = document.querySelector('#slots_list');
    GL = GameList.slots;
    GK = 'slots'
    cardload(GK)
    SL = document.querySelector('#fishing_list');
    GL = GameList.fishing;
    GK = 'fishing'
    cardload(GK)
    SL = document.querySelector('#others_list');
    GL = GameList.others;
    GK = 'others'
    cardload(GK)


    function cardload(){
        for (let z = 0; z < GL.length; z++){
            gameCard = document.createElement('div');
            gameCard.setAttribute('class', 'game-card d-flex justify-content-center col-12 col-md-3 py-3')
            SL.appendChild(gameCard);

            cardBg = document.createElement('div');
            cardBg.setAttribute('class', 'card bg-black-50 text-light');
            gameCard.appendChild(cardBg);

            cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'card-img-top');
            cardImg.setAttribute('src', '../images/' + GL[z].gameimg);
            cardBg.appendChild(cardImg);

            cardFt = document.createElement('div');
            cardFt.setAttribute('class', 'card-body d-flex flex-column justify-content-between');
            cardBg.appendChild(cardFt);
            
            gameName = document.createElement('h5');
            gameName.setAttribute('class', 'card-title text-center');
            gameName.textContent = GL[z].name;
            cardFt.appendChild(gameName);

            cardBtn = document.createElement('a');
            cardBtn.setAttribute('class', 'btn btn-outline-warning w-100');
            cardBtn.setAttribute('href', '#');
            cardBtn.setAttribute('name', 'btn');
            cardBtn.setAttribute('data-no', '0');
            cardBtn.setAttribute('data-kids', GK);
            cardBtn.setAttribute('data-target', '#productDescription');
            cardBtn.setAttribute('data-toggle', 'modal');
            cardBtn.textContent = 'คำอธิบาย';
            cardFt.appendChild(cardBtn);
        }
    }
    
}

// The game card introduce
function loadData(obj) {
    let GameList = obj;

    let GameName = document.querySelector('#GameName');
    let page = document.querySelector('#pageImg');


    function getNum(btnNo) {
        let Num = btnNo.target.dataset.no;
        let BtnKids = btnNo.target.dataset.kids
        if (BtnKids == 'slots'){
            GL = GameList.slots
            getData(GL)
        }else if (BtnKids == 'fishing'){
            GL = GameList.fishing
            getData(GL)
        }
        else if (BtnKids == 'others'){
            GL = GameList.others
            getData(GL)
        }
        function getData(){
            let msgLen = GL[Num].main.length
            page.innerHTML = '';
            GameName.textContent = GL[Num].name;
            for(let l = 0; l < msgLen; l++){
                if (GL[Num].main[l].includes('png') || GL[Num].main[l].includes('jpg')){
                    let gameImg = document.createElement('img');
                    gameImg.setAttribute('class', 'card-img-top mb-2');
                    gameImg.setAttribute('src', '../images/' + GL[Num].main[l]);
                    page.appendChild(gameImg)
                }else{
                    let gameMsg = document.createElement('p');
                    gameMsg.setAttribute('class', 'my-2');
                    let gameWd = document.createElement('span');
                    gameWd.setAttribute('class', 'ml-4');
                    gameWd.textContent = GL[Num].main[l];
                    page.appendChild(gameMsg);
                    gameMsg.appendChild(gameWd);
                }
            }
        }
    }

    let el = document.body;
    el.addEventListener('click', getNum, false);
    
}
let btnNo = document.querySelectorAll('[name="btn"]');
for(let j = 0; j < btnNo.length; j++) {
    btnNo[j].addEventListener('click', loadData,false);
}

