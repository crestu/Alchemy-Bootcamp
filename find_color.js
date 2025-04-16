const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash){
    for(let index=0; index<COLORS.length;index++){
        if(toHex(sha256(utf8ToBytes(COLORS[index]))) === toHex(hash)){
        return COLORS[index];
        }
    }
}

module.exports = findColor;


//    let index = 0;
//     while(!(index<COLORS.length()){
//     if(toHex(sha256(utf8ToBytes(COLORS[index]))) === toHex(hash)){
//         console.log("TRUE");
//     }else{
//     index++;
//     }

    // let index = 0;
    // if(index< COLORS.length){
    //     console.log(toHex(sha256(utf8ToBytes(COLORS[index]))) === toHex(hash));
    // }else{
    //     index++;
    // }
    
    
    // for(let index = 0; index<COLORS.length; index++){
    //     console.log(toHex(sha256(utf8ToBytes(COLORS[index]))) === toHex(hash));
    // }


//    const r ='red';
//    const g = 'green';
//    const b= 'blue';
//    const y = 'yellow';
//    const p= 'pink';
//    const o = 'orange';

//    const rBytes= utf8ToBytes(r);
//    const gBytes= utf8ToBytes(g);
//    const bBytes= utf8ToBytes(b);
//    const yBytes= utf8ToBytes(y);
//    const pBytes= utf8ToBytes(p);
//    const oBytes= utf8ToBytes(o);

//    const rHash = sha256(rBytes);
//    const gHash = sha256(gBytes);
//    const bHash = sha256(bBytes);
//    const yHash = sha256(yBytes);
//    const pHash = sha256(pBytes);
//    const oHash = sha256(oBytes);
   
//    console.log(toHex(rHash) === toHex(hash));
//    console.log(toHex(gHash) === toHex(hash));
//    console.log(toHex(bHash) === toHex(hash));
//    console.log(toHex(yHash) === toHex(hash));
//    console.log(toHex(pHash) === toHex(hash));
//    console.log(toHex(oHash) === toHex(hash));
