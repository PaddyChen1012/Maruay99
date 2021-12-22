// const GameMsg = document.querySelector('#productDescription');
let requestURL = '../json/en_game_list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const GameList = request.response;
    loadData(GameList);
}

function loadData(obj) {
    let GameList = obj['Game'];

    let GameName = document.querySelector('#GameName');
    let pageImg = document.querySelector('#pageImg img');
    let GameMain1 = document.querySelector('#GameMain1')
    let GameMain2 = document.querySelector('#GameMain2')
    let GameMain3 = document.querySelector('#GameMain3')
    let GameMain4 = document.querySelector('#GameMain4')

    function getNum(btnNo) {
        Num = btnNo.target.dataset.no;
        BtnKids = btnNo.target.dataset.kids
        if (BtnKids == 'slots'){
            GL = GameList[0].slots
            getData(GL)
        }else if (BtnKids == 'fishing'){
            GL = GameList[0].fishing
            getData(GL)
        }
        else if (BtnKids == 'others'){
            GL = GameList[0].others
            getData(GL)
        }
        function getData(){
            GameName.textContent = GL[Num].name;
            pageImg.setAttribute('src', GL[Num].img);
            GameMain1.textContent = GL[Num].main1;
            GameMain2.textContent = GL[Num].main2;
            GameMain3.textContent = GL[Num].main3;
            GameMain4.textContent = GL[Num].main4;
        }
    }

    let el = document.body;
    el.addEventListener('click', getNum, false);
    
}
let btnNo = document.querySelectorAll('[name="btn"]');
for(let j = 0; j < btnNo.length ; j++) {
    btnNo[j].addEventListener('click', loadData,false);
}

