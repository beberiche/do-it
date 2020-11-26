//if(if)

const id = prompt("id가 어떻게 되시나요?")
const pw = prompt("비밀번호가 어떻게 되시나요?")
const userId = "userid"
const userPw = "userpw"

if (id === userId) {
    if (pw === userPw) {
        document.write(userId + "님 반갑습니다.")
    } else {
        alert("비밀번호가 일치하지 않습니다.")
        location.reload()
    }
} else {
    alert("id가 일치하지 않습니다.")
    location.reload()
}