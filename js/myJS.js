function loadData(obj) {
    let GameList = obj;

    let GameName = document.querySelector('#GameName');
    let page = document.querySelector('#pageImg');
    // let pageImg = document.querySelectorAll('#pageImg img');
    // let GameMsg = document.querySelectorAll('[name=GameMsg]')
    // let GameMain2 = document.querySelector('#GameMain2')
    // let GameMain3 = document.querySelector('#GameMain3')
    // let GameMain4 = document.querySelector('#GameMain4')
    console.log(document.querySelector('#slots_list'))


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
            let imgLen = GL[Num].img.length
            let msgLen = GL[Num].main.length
            page.innerHTML = '';
            GameName.textContent = GL[Num].name;
            for(let l = 0; l < msgLen; l++){
                if (l<imgLen){
                    let gameImg = document.createElement('img');
                    gameImg.setAttribute('class', 'card-img-top')
                    gameImg.setAttribute('src', GL[Num].img[l]);
                    page.appendChild(gameImg)
                }
                let gameMsg = document.createElement('p');
                gameMsg.setAttribute('class', 'my-2')
                gameMsg.textContent = GL[Num].main[l]
                page.appendChild(gameMsg)
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

