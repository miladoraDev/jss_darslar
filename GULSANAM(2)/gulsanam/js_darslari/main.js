//alert("Oynani ochdingizmi?")
//confirm("Ilovadan chiqdingizmi?")
//var qiymat = confirm("Ilovadan chiqdingizmi?")


 
 /*
 function yoshAniqlash(){
    var yosh = prompt('tug`ulgan yilingizni kiriting')
    var joriyYil = 2024
    var age = joriyYil - yosh
    if(yosh > joriyYil){
        alert(`Siz ${joriyYil} yidan katta raqamni kiritdingiz!`)
        return
    }
 
     document.write(`Siz ${age} yoshdasiz.`)
 } 
 yoshAniqlash()
 */

//type conversion-ma`lumot turini o`zgartirish
//typeof-ma`lumot turini aniqlaydi
/*
var name = "Gulsanam"
var yoshi = 16
var student = false
var mahsulot = null
var hi;

document.write(typeof(hi))

*/
//String tipidagi ma`lumotni Number ga o`tkazish
/*
var sinf = "9"
var sinf2 = "10"

document.write(Number(sinf)+Number(sinf2))
*/

//Number() metodi -string(matn) tipidagi ma`lumotni number (son)tipiga o`tkazadi.

//String()metodi ma`lumotni string (matn) tipiga o`tkazadi
//toFixed()-butun sonni yaxlitlaydi
/*
var qiymat1 = 18.7
var qiymat2 = 20

document.write(qiymat1.toFixed())
*/
/*
//Arifmetik amallar

var x = 9
var y = 19
document.write(x*(y+6) + "<br>") 

//** kvadrat

document.write(20**5+"<br>")

document.write(20-10 + "<br>")

document.write(300/10 + "<br>")
alert("Bu ko`paytiruv amaliyotini bajaradi")
var son1 = promt('1-sonni kiriting')
var son2 = prompt('2-sonni kiriting')
var natija = son1*son2
alert(natija)
*/
/*
//document.write(5 % 3)
document.write(2=="2")
*/
/*
let omborxona = 1002
if(omborxona == 10 || omborxona <= 100){
    document.write('Mahsulot kam')
}
else if(omborxona > 100 || omborxona < 1000){
    alert('Mahsulot yetarli')
}
else{
    alert('Mahsulot keragidan ortiqcha')
}
*/
/*
var gift = 0
if(gift){
    alert('True')
}
else{
    alert('False')
}
*/
/*
var result = 22
if(result == 30 || result > 27){
    document.write("Zo`r")
}
else if(result <= 27 && result >= 23){
    document.write('Yaxshi')
}
else if(result <= 23 && result >=15){
    document.write('Qoniqarli')
}  
else{
    document.write('Siz qayta topshirasiz!(:')
}
*/
/*
var student = "10A"
var status = "good"
if(student ==="10B" && status ==="good"){
    document.write('Siz teatrga borishingiz mumkin')
} 
else{
    document.write('Sizga ruxsat yo`q')
}
*/
/*
let isLoggedIn = false
let isPurchased = false
if(isLoggedIn && isPurchased){
    alert('Xush kelibsiz!')
}
else{
    alert("Ro`yxatdan o`ting va xarid qiling")
}
*/

//Array-to`plam, shoda(massiv)

//console.log(cars)

/*
for(var i = 0; i < cars.length; i++){
    document.write(cars[i] +"<br>")
}
*/
var cars = ["Nexia", "Matiz", "Lacetti"]
/*for(var car of cars){
    document.write(car +"<br>")
}
*/

//Array metodlari
//1. Array.length - uzunligi

const students = ["Shohjahon", "Sarvar", "Bekzod","Laylo", "Muhriddin"]
/*
document.write(student.length)
*/
//Array.toStiring()-arrayni string ga o`tkazadi;
/*
document.write(student.toString())
*/
//Array.join()-arrayga qo`shimcha qo`shadi
//console.log(student.join("<br>"))

//Array.pop()-oxirgi elementni chiqarib tashlaydi
//Array.push()-array oxiriga ma`lumot qo`shadi
//Array.shift()-array boshidagi elementni o`chiradi
//Array.unshift()-array boshiga yangi ma`lumot qo`shadi


//concat()-ikkita arrayni qo`shishda ishlatiladi
/*
var student = students.unshift("Sardor")
document.write(students)
*/
const studentsA = ["Shohjahon","Laylo", "Muhriddin"]
const studentsB = [ "Sarvar", "Bekzod"]

const allStudents = studentsA.concat(studentsB)

var studentBox = document.getElementById("studentBox")
var newStudent = document.getElementById("studentName")

function addStudent(){
    allStudents.push(newStudent.value)
    console.log(allStudents)
    studentBox.innerHTML=''
    for(var student of allStudents){
        var button = document.createElement("button")
        button.innerText = student
        studentBox.appendChild(button)
        button.style.margin="5px 2px"
}
newStudent.value = ''
}


document.addEventListener('DOMContentLoaded' , ()=>{
    for(var student of allStudents){
        var button = document.createElement("button")
        button.innerText = student
        studentBox.appendChild(button)
        button.style.margin="5px 2px"
    }


})
