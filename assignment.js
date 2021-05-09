function feetToMile(num){
    if(num<0)return -1;
    let mile = num * 0.000189394;
    return mile;
}

function woodCalculator(chair, table, bed){
    if(chair<0 || table<0 || bed<0)return -1;
    let wood = chair + 3 * table + 5 * bed;
    return wood;
}

function brickCalculator(num){
    if(num<0)return -1;
    let firstpart = 0, secondpart = 0, thirdpart = 0;
    if(num>10){
        firstpart = 15*1000 * 10;
        num -= 10;
    }
    else{
        firstpart = 15*1000  * num;
        num = 0;
    }
    if(num>10){
        firstpart = 12*1000 * 10;
        num -= 10;
    }
    else{
        firstpart = 12*1000 * 10;
        num = 0;
    }
    thirdpart = 10*1000 * num;
    let total = firstpart + secondpart + thirdpart;
    return total;
}

function tinyFriend(arr){
    if(arr.length==0){
        return "The array is empty";
    }
    let result = "";
    let small = arr[0].length;
    for(let i=0;i<arr.length;i++){
        let len = arr[i].length;
        if(len<small){
            small = len;
            result = arr[i];
        }
    }
    return result;
}

let feetresult = feetToMile(-1);
if(feetresult==-1)
    console.log("Please input valid numbers");
else
    console.log(feetresult);

let woodresult = woodCalculator(1,1,1);
if(woodresult==-1)
    console.log("Please input valid numbers");
else
    console.log(woodresult);

let brickresult = brickCalculator(13);
if(brickresult==-1)
    console.log("Please input valid numbers");
else
    console.log(brickresult);

let nameArray = ["sahal","Eva","Dola","Anaya","Aynan"];
let smallNamedFriend = tinyFriend(nameArray);

console.log(smallNamedFriend);