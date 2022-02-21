let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios終端
let dlbtn = document.querySelector('#download_btn')

function oscheck(){
    if (isAndroid == false && isiOS == true){
        dlbtn.href = 'https://cdn.maruay99.com/';
    }else {
        dlbtn.href = 'https://play.google.com/store/apps/details?id=com.starcube.Maruay99&shortlink=WebMR99Download&pid=Web-MR99-Download';
    }
}
oscheck()