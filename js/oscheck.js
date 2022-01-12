let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios終端
let dAndroid = document.querySelectorAll('[name=download_android]')
let diOS = document.querySelectorAll('[name=download_ios]')
console.log(dAndroid)
console.log(diOS)
function oscheck(){
    if (isAndroid == true && isiOS == false){
        diOS[0].style.display = 'none';
        diOS[1].style.display = 'none';
    }else if (isAndroid == false && isiOS == true){
        dAndroid[0].style.display = 'none';
        dAndroid[1].style.display = 'none';
    }else {
        return
    }
}
oscheck()