
// Problem 1
let salaries={
    Jonh:100,
    Ann:160,
    Pete:130
};
var total=0;
function SalculateSum(obj){
    for (let prop in obj){
        total+=obj[prop]
    }
}
SalculateSum(salaries)
console.log(total);


//Problem 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };
function MultiplyNumeric(obj){
    for (let prop in obj){
        if (typeof obj[prop]==="number"){
            obj[prop]*=2;
        }
    }
}
MultiplyNumeric(menu)
console.log(menu)

//Problem 3

function checkEmailId(str) {
    str = str.toLowerCase();
  
    let atIndex = str.indexOf('@');
    let dotIndex = str.indexOf('.');
  
    if (atIndex !== -1 && dotIndex !== -1 && atIndex < dotIndex) {
      if (dotIndex - atIndex > 1) {
        return true;
      }
    }
  
    return false;
  }
//Problem 4
function truncate(str,maxlength){
    if (str.Length<maxlength){
        return str;
    }else{
        return str.slice(0,maxlength-3)+"...";
    }
}
//Problem 5
let styles = ["James", "Brennie"];
styles.push("Robert");

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";

let firstValue = styles.shift();
console.log(firstValue);

styles.unshift("Rose", "Regal");
console.log(styles);

