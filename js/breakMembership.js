const confirmMembership = confirm("회원 탈퇴를 신청하시겠습니까?")

if (confirmMembership) {
    document.write("회원탈퇴가 정상적으로 완료되었습니다.")
} else {
    document.write("회원탈퇴가 취소되었습니다.")
}