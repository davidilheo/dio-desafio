let xp = 5002;
let heroi = "Phasmatus";
let nivel = "";

if(xp >= 0 && xp <= 1000){
    nivel = "Ferro"
}else if(xp >= 1001 && xp <= 2000){
    nivel= "bronze"
}else if(xp >= 2001 && xp <= 5000){
    nivel = "prata"
}else if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else if(xp >= 10001){
    nivel = "Radiante"
}

console.log(`O heroi de nome ${heroi} esta no nivel de ${nivel}`) 