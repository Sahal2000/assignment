function rev(str){
    var reverse = "";
    for(let i=0;i<str.length;i++){
        reverse = str[i] +  reverse;
    }
    return reverse;
}

console.log(rev("sahal"));