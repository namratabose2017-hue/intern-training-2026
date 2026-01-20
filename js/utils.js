/*function ReverseString(s){
    let rev_s="";
    for(let i=s.length-1;i<=0;i++){
        rev_s+=s[i];
    }
    return(rev_s);
}*/



/*count vowels  */
const vowelCount = (s) => {
    let vc=0;
    for(let i=0;i<s.length-1;i++){
        if('aeiouAEIOU'.includes(s[i])){ /*checks if the character is included in this string of vowels*/
            vc++;
        }
    }
    return vc;
}

let a="school";
console.log(vowelCount(a)); 

/*count characters excluding spaces*/

const countCharacters = (s) => {
    let c=0;
    for(let i =0; i<s.length-1;i++){
        if(s[i]!=" "){  /*counts the characters only no spaces*/ 
            c++;
        }
    }
    return c;
}

a="hello world";
console.log(countCharacters(a));


