const site = prompt("당신이 좋아하는 검색사이트는?");
let url;


switch(site) {
    case "구글": url = "www.google.com";
    break;
    case "네이버": url = "www.naver.com";
    break;
    case "다음": url = "www.daum.net";
    break;
    case "네이트": url = "www.nate.com";
    break;
    default: alert("보기 중에 없는 사이트입니다.");
}

if(url) {
    location.href = "http://" + url;}