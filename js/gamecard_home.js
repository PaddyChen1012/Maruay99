// const GameMsg = document.querySelector('#productDescription');
let requestURL = '../json/game_list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const GameLists = request.response;
    hcardData(GameLists);
    hloadData(GameLists);
}

// Create the game card form JSON
function hcardData(obj) {
    let GameList = obj;
    SL = document.querySelector('#games_list');
    GL = GameList.slots;
    GK = 'slots'
    cardload(2)
    GL = GameList.fishing;
    GK = 'fishing'
    cardload(1)

    function cardload(count){
        for (let z = 0; z < count; z++){
            gameCard = document.createElement('div');
            gameCard.setAttribute('class', 'game-card d-flex justify-content-center col-12 col-md-3 py-3')
            SL.appendChild(gameCard);

            cardBg = document.createElement('div');
            cardBg.setAttribute('class', 'card bg-black-50 text-light');
            gameCard.appendChild(cardBg);

            imgLink = document.createElement('a')
            imgLink.setAttribute('class', 'w-100');
            imgLink.setAttribute('href', '#');
            imgLink.setAttribute('name', 'btn');
            imgLink.setAttribute('data-no', z);
            imgLink.setAttribute('data-kids', GK);
            imgLink.setAttribute('data-target', '#productDescription');
            imgLink.setAttribute('data-toggle', 'modal');
            cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'card-img-top pointer-events-n');
            cardImg.setAttribute('src', '../images/' + GL[z].gameimg);
            imgLink.appendChild(cardImg);
            cardBg.appendChild(imgLink)

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
            cardBtn.setAttribute('data-no', z);
            cardBtn.setAttribute('data-kids', GK);
            cardBtn.setAttribute('data-target', '#productDescription');
            cardBtn.setAttribute('data-toggle', 'modal');
            cardBtn.textContent = 'คำอธิบาย';
            cardFt.appendChild(cardBtn);

        }
    }
    
}

// The game card introduce
function hloadData(obj) {
    let GameList = obj;
    let GameName = document.querySelector('#GameName');
    let page = document.querySelector('#pageImg');

    function getNum(e) {
        console.log(e)
        let modalBody = document.querySelector('.modal-body');
        let Num = e.target.dataset.no;
        let BtnKids = e.target.dataset.kids;
        modalBody.scrollTop = 0;
        if (BtnKids == 'slots'){
            GL = GameList.slots
            getData(GL)
        }else if (BtnKids == 'fishing'){
            GL = GameList.fishing
            getData(GL)
        }
        function getData(){
            let msgLen = GL[Num].main.length
            page.innerHTML = '';
            GameName.textContent = GL[Num].name;
            for(let l = 0; l < msgLen; l++){
                if (GL[Num].main[l].includes('png') || GL[Num].main[l].includes('jpg')){
                    let gameImg = document.createElement('img');
                    gameImg.setAttribute('class', 'card-img-top mb-2 w-auto img-fluid');
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
