const busfare = 3000;
const lunch = 6000;
const refreshment = 3000;

const howfees= busfare+lunch+refreshment;

let result = howfees > 10000 ? howfees-10000+"원 초과" : "돈 관리를 잘하셨군요!";
document.write(result);



const first = Number(prompt("1분기 판매량은?"));
const second = Number(prompt("2분기 판매량은?"));
const third = Number(prompt("3분기 판매량은?"));
const fourth = Number(prompt("4분기 판매량은?"));

const average =(first+second+third)/3;

if( average > fourth ){
 document.write("이번 분기 판매량이 " + String(average-fourth) +  " 만큼 하락했습니다.")
}else{
    document.write("이번 분기 판매량이 " + String(fourth - average) +  " 만큼 상승했습니다.")
}