let userHeight = prompt("당신의 키는?",0);
let userWeight = prompt("당신의 체중은?",0);

//평균체중 = (신장 - 100) * 0.9
const averWeight = (userHeight - 100) * 0.9;

if(averWeight > userWeight) {
    document.write("저체중입니다")
} else {
    document.write("비만입니다.")
}