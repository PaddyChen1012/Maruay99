let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios終端
let dlbtn = document.querySelector('#download_btn')

function oscheck(){
    if (isAndroid == false && isiOS == true){
        dlbtn.href = 'https://cdn.maruay99.com/apk/maruay99.apk';
    }else {
        dlbtn.href = 'https://play.google.com/store/apps/details?id=com.starcube.Maruay99&shortlink=WebMR99Download&pid=Web-MR99-Download';
    }
}
oscheck()

// Global site tag (gtag.js) - Google Analytics
let head = document.head
let ga1 = document.createElement('script')
    ga1.setAttribute('async','')
    ga1.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=UA-220529575-1')
let ga2 = document.createElement('script')
    ga2.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-220529575-1');"
    head.appendChild(ga1)
    head.appendChild(ga2)