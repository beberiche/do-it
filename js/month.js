const month = prompt("현재 몇월 입니까?", "0");

if (month === "12월" && "1월" && "2월") {
    document.write("추운 겨울이네요, 호빵 떙기지 않나요?")
} else if (month === "3월" && "4월" && "5월") {
    document.write("새 시작을 알리는 봄이에요. 연인은 있으신감?")
} else if(month === "6월" && "7월" && "8월") {
    document.write("여름입니다!, 자 떠나자! 야야야야 바다로~")
} else {
    document.write("낙엽이 떨어져요; 가을이 왔네요.")
} 