console.log("Hello world!");

const x = 3;
console.log(x+2);

function name(x){
    return `Hello ${x}`;
}

console.log(name(`Vithushan`));

function lettervalue(s){
    if(s===`j`){
        return 11;
    }else if(s===`q`){
        return 12;
    }else if(s===`k`){
        return 13;
    }else{
        return s;
    }
}

function wargame(a,b){
    if (lettervalue(a)>lettervalue(b)){
        return `a wins`
    }else if(lettervalue(b)>lettervalue(a)){
        return `b wins`
    }else{
        return `game is drawn`
    }
}
console.log(wargame(10,2))
console.log(wargame(3,5))
console.log(wargame(4,4))
console.log(wargame(9,1))
console.log(wargame(`j`,`k`))
console.log(wargame(`q`,`k`))
console.log(wargame(`j`,`j`))