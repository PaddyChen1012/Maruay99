let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios終端
let dAndroid = document.querySelector('#download_android')
let diOS = document.querySelector('#download_ios')
let dlbtn = document.querySelector('#download_btn')

function oscheck(){
    if (isAndroid == false && isiOS == true){
        dlbtn.href = 'https://web.maruay99.com/common/receive/Counter/Maruay_Mobil_QRCodeLink.aspx?gid=MARUAY99';
        if (dAndroid){
            dAndroid.style.display = 'none';
        }
    }else {
        dlbtn.href = 'https://play.google.com/store/apps/details?id=com.starcube.Maruay99&shortlink=WebMR99Download&pid=Web-MR99-Download';
        if (diOS){
            diOS.style.display = 'none';
        }
    }
}
oscheck()