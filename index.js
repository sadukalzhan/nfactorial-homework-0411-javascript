

let user = {
    nickName: "Введите ваше имя", age: "ваш возраст", gender: "ваш пол"
 }

 user.nickName = prompt(user.nickName);
user.age = prompt(user.age);
user.gender =  prompt(user.gender);

console.log(user);

if (user.age < 18){
    alert("error")
}
else alert("welcome")




// let a = +prompt('a?', '');
// console.log(a) // string
// a = +a
// console.log(a) // number

// switch (a){
//     case 0: alert(0);
//     case 1: alert(1);
//     case 2||3: alert("2,3")
// }



// for (let i = 2; i < 100; i++) {
//     if(i%2==0){
//         console.log(i)
//     }
//   }




//   let i = 0
//   while (i<3){
//     alert( `number ${i}!` );
//     i++;
//   }




