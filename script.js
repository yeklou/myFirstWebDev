class myFirstWebDev{
constructor(name, money){
this.name = name;
this.money = money;
}
myName(name){
var name = $(#name).html;
console.log(name);
}
myAsset(money){
var curAsset = document.getElementById("curAsset").value;
var entry = [];
for(var i = 0, i< entry.length, i++){
entry = $(#amount).value;
console.log(entry);
}
var gain = true;
while(gain){
console.log("Enter your gain amount: ")
var amount = $(#amount).html();
amount += amount;
var gain = document.getElementById("gain").innerHTML;
}
var totalAsset = curAsset + amount;
console.log("Your money is: " + totalAsset");
   }
}
var name = new myFirstWebDev("Yawo", 1000);
name.myName(Eklou Yawo);
name.myAsset()