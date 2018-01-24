var a = 10, b = "5a"
var wynik = a + b;
//alert(wynik);
//alert(a + b);
console.log("tekst");
console.log(a); //10
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

console.trace();

var _zmienna1 = 10;

//var 3liczba = 10; bledna nazwa zmiennej

var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa)); //number

//bool

var prawda = true;
console.log(typeof(prawda));

//string

var tekst = "Janusz";
console.log(typeof(tekst)); //string

//undefined

var inna;
console.log(inna); //undefined
console.log(typeof(inna));

//object

var tab = ["aqua", "brazowy"];
console.log(tab);
console.log(typeof(tab)); //object

//######################################################################################################################################
/*
//var liczba = prompt("Podaj liczbe");
var liczba1 = prompt("Podaj liczbe", "liczba 1");
var liczba2 = prompt("Podaj liczbe", "liczba 2");
var suma = liczba1 + liczba2; //konkatenacja
console.log(suma);

//liczba1 = parseInt(liczba1); //kowersja na typ calkowity
//liczba2 = parseInt(liczba2);

//kowersja na typ zmiennoprzecinkowy

liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);

var suma1 = liczba1 + liczba2;
console.log("Po konwersji typow: " + suma1)

console.log(typeof(liczba1)); //number
console.log(typeof(liczba2)); //number*/

//zad.1

/*Uzytkownik podaje z klawiatury dlugosc boku kwadratu
wyswietl na ekranie w formacie "dloguosc boku wynosi: .... cm"
"Pole kwadratu wynosi .... cm2"*/


/*var bok = prompt("Dlugosc boku wynosi .... cm")
var pole = bok * bok;
document.write("Dlugosc boku wynosi: " + bok + "cm<br>");
document.write("Pole kwadratu wynosi " + pole + "cm<sup>2</sup>");*/

//zad.dom
//napisz program obliczjacy pole trojkata


var bok1 = prompt("Dlugosc podstawy trojkata wynosi: .... cm")
var wysokosc = prompt("Wysokosc trojkata wynosi .... cm")
var pole2 = bok1 * wysokosc * 0.5;
document.write("Pole trojkata wynosi " + pole2 + "cm<sup>2</sup>")
