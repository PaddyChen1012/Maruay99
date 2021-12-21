let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios終端
let dAndroid = document.querySelector('#download_android')
let diOS = document.querySelector('#download_ios')
function oscheck(){
    if (isAndroid == true && isiOS == false){
        diOS.style.display = 'none';
    }else if (isAndroid == false && isiOS == true){
        dAndroid.style.display = 'none';
    }else {
        return
    }
}
oscheck()