let userHeight = prompt("당신의 키는?",0);
let userWeight = prompt("당신의 체중은?",0);

//평균체중 = (신장 - 100) * 0.9
const averWeight = (userHeight - 100) * 0.9;

if(averWeight > userWeight) {
    document.write("신장 : " + userHeight+ "cm" + "<br>" );
    document.write("체중 : " + userWeight+"kg" + "<br>" );
    document.write("적정체중 : " + averWeight+"kg" + "<br>" );
    document.write("당신은 정상범위에 속합니다.")
} else {
    document.write("신장 : " + userHeight+"cm" + "<br>" );
    document.write("체중 : " + userWeight+ "kg" + "<br>" );
    document.write("적정체중 : " + averWeight+"kg" + "<br>" );
    document.write("비만입니다. 현재 적정체중에서 " + (userWeight-averWeight)+"kg" + " 초과한 것을 알 수 있습니다." )
}