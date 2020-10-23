// bài 1
function bai1() {
    let a = prompt("Nhập số a: ", '')
    let b = prompt("Nhập số b: ", '')
    if (a % b == 0) {
        alert(parseInt(a) + " chia hết cho " + parseInt(b))
    }
}
//bài 2
function bai2() {
    let tuoi = prompt("Nhập số tuổi:", '')
    if (tuoi == 16) {
        alert("Bạn đã đủ tuổi học lớp 10")

    }
    else if (tuoi < 16) {

        alert("Bạn chưa đủ tuổi học lớp 10")

    } else {
        alert("Bạn đã quá tuổi học lớp 10")
    }
}
//bài 3
function bai3() {
    let x = prompt("Nhập số cần check:", '')
    if (x == 0) {
        alert("X bằng 0")
    }
    else if (x < 0) {
        alert("X bé hơn 0")
    }
    else { alert("X lớn hơn 0") }
}
//bài 4
function bai4() {
    let so1 = prompt("Nhập số thứ nhất:", '')
    let so2 = prompt("Nhập số thứ hai:", '')
    let so3 = prompt("Nhập số thứ ba:", '')
    if (so1 < so2) {
        if (so2 < so3) {
            alert("Số " + so3 + " lớn nhất")
        }
        else {
            alert("Số " + so2 + " lớn nhất")
        }
    }
    else if (so1 < so3) {
        alert("Số " + so3 + " lớn nhất")

    }
    else {
        alert("Số " + so1 + " lớn nhất")

    }
}
//bài 5
function bai5(){
let ktm=Number(document.getElementById("ktm").value)
let ktgk=Number(document.getElementById("ktgk").value)

let ktck=Number(document.getElementById("ktck").value)
let trungbinh=(ktm*0.2 + ktgk*0.3 + ktck*0.5)
console.log(trungbinh)
if (trungbinh<6.5){
document.getElementById("hocluc").innerText=" Trung Bình"
}
else if(trungbinh<8.0){
    document.getElementById("hocluc").innerText="Khá"
}
else {
    document.getElementById("hocluc").innerText="Giỏi"
}


}
//bài 6
function bai6(){
let doanhso=Number(document.getElementById("doanhso").value)
let chietkhau=Number(document.getElementById("chietkhau").value)
console.log(chietkhau)
let loinhuan=chietkhau*doanhso
document.getElementById("loinhuan").innerText=loinhuan
}
//bài 7
function bai7(){
sodien=Number(document.getElementById("sodien").value)
document.getElementById("sotien").innerText=sodien*3000

}