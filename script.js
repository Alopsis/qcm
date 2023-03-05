/*function qcm1(){
    var qcm = document.getElementById("qcm");
    var perdu = 0;
    var gagn = 0;
    for(var i = 0; i < 4; i++) {
        if (qcm.getElementsByClassName("qcm1")[i].checked && qcm.getElementsByClassName("qcm1")[i].value == 0) {
            perdu++;
            console.log("perdu");
        }
        if( qcm.getElementsByClassName("qcm1")[i].checked && qcm.getElementsByClassName("qcm1")[i].value == 1 ){
            gagn++;
            console.log("gagné");
        }
    }
    if(gagn != 0 && perdu == 0){
        document.getElementById("reponse-qcm1").innerHTML = "Vous avez reussi";
    }else {
        document.getElementById("reponse-qcm1").innerHTML = "Vous avez perdu";

    }
    for( i = 0 ; i < 4 ; i ++ ){
     
         qcm.getElementsByClassName("qcm1")[i].checked=false ;
        
        
    }
}*/

/* 
meme fonction mais génerique ! 
*/
function qcm(valeur){
    valeur = 'qcm' + valeur;
    console.log(valeur);
    var qcm = document.getElementById(valeur);
    var perdu = 0;
    var gagn = 0;
    for(var i = 0; i < 4 ; i++ ){
        if( qcm.getElementsByClassName(valeur)[i].checked && qcm.getElementsByClassName(valeur)[i].value == 0){
            perdu++;
        }
        if(qcm.getElementsByClassName(valeur)[i].checked && qcm.getElementsByClassName(valeur)[i].value == 1){
            gagn++;
        }
    }
    var p = "reponse-" + valeur;
    if(gagn != 0 && perdu == 0){
        document.getElementById(p).innerHTML = "Vous avez reussi";
        document.getElementById(p).style.color = "green";
    }else {
        document.getElementById(p).innerHTML = "Vous avez perdu";
        document.getElementById(p).style.color = "red";
    }
    for( i = 0 ; i < 4 ; i ++ ){
     
         qcm.getElementsByClassName(valeur)[i].checked=false ;
        
        
    }
}