// single comment
/* multiple comment */

// window.alert("Merhabalar");
// window.document.writeln("ekranda göster");
// window.console.log("console çıktısı");

// console.log("log console çıktısı");
// console.warn("warn console çıktısı");
// console.error("error console çıktısı");

// // variable
// var globalState="Merhabalar Güzel insanlar";
// console.log(globalState);
// var globalState="asdasdasd";
// console.log(globalState);

// let localState="Nasılsınız";
// console.log(localState);
// localState="Nasılsınız44";
// console.log(localState);

// const locaState2=true;
// console.log(locaState2);
// console.log(typeof locaState2);

// locaState2=8585;
// console.log(locaState2);

//////////////////////////////////////////
// Common Rules
// let degiskenAdi="JS öğreniyorum"
// console.log(degiskenAdi);

// let degiskenAdi44="JS öğreniyorum"
// console.log(degiskenAdi44);

// let _degiskenAdi="JS öğreniyorum"
// console.log(_degiskenAdi);

// let $degiskenAdi="JS öğreniyorum"
// console.log($degiskenAdi);

//let ~|/44degiskenAdiüğşçö="JS öğreniyorum"

//////////////////////////////////////////

// Hoisting
// denemeData=44;
// let denemeData;
// console.log(denemeData);

//////////////////////////////////////// 

// Operators
// console.log(10+25);
// console.log(10-25);
// console.log(10*25);
// console.log(10/3);
// console.log(10%3);

// + ++ 
// && VE 
// || VEYA
// ! DEĞİL
////////////////////////////////////////////

// prompt
// let data=prompt("Lütfen birşeyler giriniz")
// console.log(data);

////////////////////////////////////////////
// new  : doğmak
// null : vefat etti

////////////////////////////////////////////

// undefined 
// let data10;
// console.log(data10);

// // NaN: Not A Number
// console.log(10/10);
// console.log(10/"10");
// console.log(10/"asd");

// // infinity
// console.log(0/45);
// console.log(45/0);

////////////////////////////////////////////

// // Math
// console.log(Math.min(1,5,2,-100,500));
// console.log(Math.max(1,5,2,-100,500));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.abs(-100));
// console.log(Math.sin(45));
// console.log(Math.asin(-1));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.floor(Math.random()*9+1));
////////////////////////////////////////////


// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// let number1,number,sum=0;
// number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number1+number2);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// // x=2 k=3 y=? (y=18)
// let x=0,y=0,k=0;
// x=Number(prompt("Lütfen X giriniz"));
// k=Number(prompt("Lütfen K giriniz"));
// y=3*x+4*k;
// console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
//console.log(4+3*2*(3/3-1*6+9/1+(3/3)));

// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))


////////////////////////////////////////////

// SAYILAR
// let sayilar=44;
// console.log(sayilar);
// console.log(typeof sayilar);

// let sayilar2=44.23;
// console.log(sayilar2);
// console.log(typeof sayilar2);

// let bilimselGosterim1=12000;
// console.log(bilimselGosterim1);

// let bilimselGosterim2=12E+3;
// console.log(bilimselGosterim2);
////////////////////////////////////////////
// CAST
// let sayi=Number("10");
// console.log(sayi+20);

// let sayi2=String("10");
// console.log(sayi2+20);

////////////////////////////////////////////
// // STRING
// let kelime="JS öğreniyorum JS ";
// console.log(kelime);
// console.log(kelime.length);
// console.log(kelime.trim().length);

// console.log(kelime.startsWith("JS"));
// console.log(kelime.endsWith(" "));

// console.log(kelime.toLowerCase());
// console.log(kelime.toUpperCase());

// console.log(kelime.concat("INC"));

// console.log(kelime.substring(3));
// console.log(kelime.substring(0,3));

// console.log(kelime.charAt(3).toUpperCase());

// console.log(kelime.indexOf("JS"));
// console.log(kelime.lastIndexOf("JS"));

// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

////////////////////////////////////////////
// FUNCTION 
// 1 retursuz Parametresiz
// function retursuzParametresiz(){
//     console.log("retursuz Parametresiz");
// }
// retursuzParametresiz();

// // 2 retursuz Parametreli
// function retursuzParametreli(name){
//     console.log("retursuz Parametreli "+name);
// }
// retursuzParametreli("Hamit Mızrak")

// // 3 returlı Parametresiz
// function returluParametresiz(){
//     return "returlu Parametresiz";
// }
// let data3= returluParametresiz();
// console.log(data3);

// // 4 returlı Parametresiz
// function returluParametreli(name,surname,language){
//     return `ADI: ${name} SOYADI:${surname} DİL: ${language} `;
// }
// let data4= returluParametreli("Hamit","Mızrak","JS");
// console.log(data4);
// ////////////////////////////////////////////
// normal
// function normalFunction(){
//     console.log("Normal Function");
// }
// normalFunction();

// anonymous
// let anonymousFunction= function(){
//     console.log("anonymous Function");
// }
// anonymousFunction();

// arrowFunction
// let arrowFunction= ()=>{
//     console.log("arrowFunction");
// }
// arrowFunction();

// Immedia Function
// (function(){
//     console.log("Immedia Function Anonymous");
// })();

// Immedia Function
// (()=>{
//     console.log("Immedia Function Arrow");
// })();

////////////////////////////////////////////
// CONDITION
// if else
const ifElseExamples = () => {
    let number = 15;
    if (number > 0) {
        console.log("pozitif");
    } else {
        console.log("negatif");
    }
}
//ifElseExamples();

// ternary
const ifElseTernaryExamples = () => {
    let number = 15;
    let result = (number > 0) ? "pozitif" : "negatif";
    console.log(result);

}
//ifElseTernaryExamples()

// if else if else
const ifElseMultipleExamples = () => {
    let number = 59;
    if (number == "1") {
        console.log("1");
    } else if (number === 2) {
        console.log("2");
    } else if (number === 3) {
        console.log("3");
    } else if (number === 4) {
        console.log("4");
    } else if (number === 5) {
        console.log("5");
    } else {
        console.log("1<=X<=5 dışındadır");
    }
}
//ifElseMultipleExamples();

// switch case
const switchMultipleExamples = () => {
    let number = 5;

    switch (number) {
        case 1:
            console.log("1");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        case 2:
            console.log("2");
            break;
        case 5:
            console.log("5");
            break;
        default:
            console.log("1<=X<=5 dışındadır");
            break;
    }
}
//switchMultipleExamples();

// break   : döngüyü kırar çalıştırmaz
// return  : function kırar çalıştırmaz
// continue: 1 kere o şarta çalışmaz sonra döngüye devam eder.

// ÖDEV
// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

////////////////////////////////////////////
// LOOP
// for
// (() => {
//     for (let i = 1; i <= 10; i++) {
//         document.write(i + " ")
//     }
//     document.write("<br/>")
// })();
// sonsuz for 
// for(;;){}

// while
// (() => {
//     let i = 1;
//     while (i <= 10) {
//         document.write(i + " ")
//         //i++;
//         //i=i+1;
//         i += 1;
//     }
//     document.write("<br/>")
// })();
// sonsuz while 
// while(true){}

// do while
// (() => {
//     let i = 1;
//     do {
//         document.write(i + " ")
//         i = i + 1;
//     } while (i <= 10);
// })();
////////////////////////////////////////////

// arrow function
// clean code 
// conditional(if else)
// loop (for-while)

// return  : metotun çalışmasını durdurur
// break   : döngünün çalışmasını durdurur
// continue: sadece 1 kereye mahsus durur sonra devam eder.

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)

// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?

// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?

let userData = () => {
    const userInput = Number(prompt("Lütfen bitiş sayısını giriniz"));
    let commonSum = 0;
    // Tek ve Çift için
    let oddSum = 0, oddCounter = 0, oddAllNumber = "";
    let evenSum = 0, evenCounter = 0, evenAllNumber = "";

    // Loop
    for (let i = 1; i <= userInput; i++) {
        //  secret-Key 
        if (commonSum == 44) {
            console.log("secret-Key girildi çıkış yapılıyor.");
            break;
        }

        // en fazla 50'e kadar toplama yapsın.
        if (i == 50) {
            console.log("sadece 1<=X<=50 arasındakileri toplayabilirim.");
            break;
        }

        // sayılardan 7 sayıyı varsa dahil etmesin
        if (i == 7) {
            console.log("7 sayısı dahil edilmedi !!!");
            continue;
        }

        // ÇİFT
        if (i % 2 == 0) {
            evenCounter++;
            evenSum += i;
            evenAllNumber = evenAllNumber + " " + i;
        } else { //TEK
            oddCounter++;
            oddSum += i;
            oddAllNumber = oddAllNumber + " " + i;
        }
        commonSum = commonSum + i;
    }

    console.log("Bütün sayı toplamları: " + commonSum);

    console.log("Tek sayılar: " + oddAllNumber);
    console.log("Tek sayı adeti: " + oddCounter);
    console.log("Tek sayılar toplamı: " + oddSum);

    console.log("Çift sayılar: " + evenAllNumber);
    console.log("Çift sayı adeti: " + evenCounter);
    console.log("Çift sayılar toplamı: " + evenSum);
}

//userData();

////////////////////////////////////////////
// TRY CATCH
(() => {
    try {
        alertx("Deneme");
    } catch (err) {
        //console.error(err);
        //console.error(err.name+":"+err.message);
    } finally {
        //console.log("Db.close() Api.close() port.close()");
    }
    // console.log("son satır");
})();

////////////////////////////////////////////
// DIZI
let myArray = () => {
    //let array = [5, 9, 1, 2, "malatya", true, 44.23];
    let array = [5, 9, 1, 2, 5, 3, 90];
     console.log(array);
     console.log(array[0]);
    // console.log(array[7-1]);
    // console.log(array[array.length-1]);

    // iterative for
    for (let i = 0; i < array.length; i++) {
        document.writeln(array[i] + " ")
    }

    document.writeln("<br/>")
    // for in: index
    // for (let temp in array) {
    //     document.writeln(temp + " =>"+array[temp]+"<br/>")
    // }
    // document.writeln("<br/>")
    // for in: index
    // for (let temp of array) {
    //     document.writeln(temp + " ")
    // }
    // document.writeln("<br/>")
    // array.push(88);
    // array.unshift(11);

    // array.pop();
    // //array.pop();
    // array.shift();

    // array.sort();
    // array.sort().reverse();

    // let result=array.toString().split(",");
    // console.log(result);

    // delete array[0];
    // delete array[array.length-1];

    // splice
    // 3: indis numarası
    // 2: silinecek sayısı
    array.splice(3, 9);

    for (let temp of array) {
        document.writeln(temp + " ")
    }
}
// myArray();

// Konum Örneği Function
let geolocationFunction = () => {
    console.log("Geo Location");
    if (window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((positionData) => {
            const { latitude, longitude } = positionData.coords;
            console.log(latitude, longitude);
            console.log("Enlem:" + latitude, longitude);
            console.log("Boylam:" + longitude);
        }, (err) => {
            console.error("Hata var Konum açılmamıştır.");
            console.error(err);
        })
    }
}
//geolocationFunction();

////////////////////////////////////////////
// OBJECT
const objectData = () => {
    let person = {
        "name": "Hamit",
        "surname": "Mızrak",
        isLogin: true,
        fullName: function () {
            return this.name + " " + this.surname;
        }
    };
    console.log(person);
    console.log(person.name);
    console.log(person["name"]);
    console.log(person.fullName());

    person.tcNumber = "11222333";
    console.log(person.tcNumber);
}
// objectData();

let objectConstructor = () => {
    let Person = function (adi, soyadi) {
        this.adi = adi;
        this.soyadi = soyadi;
        console.log(this);
    }
    let data = new Person("Hamit", "Mızrak");
}
//objectConstructor();

// JSON

let objeJson = () => {
    let object = {
        "name": "Adım",
        "surname": "Soyadım"
    };

    let value = JSON.stringify(object);
    console.log(value);

    let pars = JSON.parse(value);
    console.log(pars);
}
//objeJson();

// Event
let eventData = () => {
    alert("Event");
}

// Dom
let eventDom=()=>{
    //alert("Dom");
   let data= document.getElementById("parag_id");
   data.innerHTML="<b>Veriler değişti</b>";
   //data.innerText="<b>Veriler değişti</b>";
   data.style.color="red";
   data.style.backgroundColor="black";
   data.style.padding="1rem";
}

// Submit Data
const submitData=(e)=>{
    console.log("datra");

    // browser sen dur bir şey yapma
    //e.preventDefault();

    //alert("çalıştı")
    let email=document.getElementById("email_id").value;
    let password=document.getElementById("password_id").value;
    //console.log("Email: "+email+" Şifre: "+password);

    let emailLocal= localStorage.setItem("email_unique",email);
    let passwordLocal=localStorage.setItem("password_unique",password);
    console.log(localStorage.getItem("email_unique"));
    console.log(localStorage.getItem("password_unique"));
    alert("Tamamdır")
}




////////////////////////////////////////////
// DOM
// Listener
// LocalStorage

////////////////////////////////////////////
// normal, anonymous, arrow , immedia function
// Callback, Promise, Async-await
// ES5
// ES6

////////////////////////////////////////////

// Kurulum Videosu
// VS code
// Node js
// Android Studio
// React Native

////////////////////////////////////////////





