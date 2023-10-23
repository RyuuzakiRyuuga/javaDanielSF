const danizin = document.querySelector;
function tocasomclap(){
    danizin('#som_tecla_clap').play();
}
function tocasompom (){
    danizin('#som_tecla_pom').play();
}
function tocasomtim (){
    danizin('#som_tecla_tim').play();
}
function tocasompuff (){
    danizin('#som_tecla_puff').play();
}
function tocasomsplash (){
    danizin('#som_tecla_splash').play();
}
function tocasomtoim (){
    danizin('#som_tecla_toim').play();
}
function tocasompsh (){
    danizin('#som_tecla_psh').play();
}
function tocasomtic (){
    danizin('#som_tecla_tic').play();
}
function tocasomtom (){
    danizin('#som_tecla_tom').play();
}
danizin('.tecla_pom').onclick = tocasompom;
danizin('.tecla_clap').onclick = tocasomclap;
danizin('.tecla_tim').onclick = tocasomtim;
danizin('.tecla_puff').onclick = tocasompuff;
danizin('.tecla_splash').onclick = tocasomsplash;
danizin('.tecla_toim').onclick = tocasomtoim;
danizin('.tecla_psh').onclick = tocasompsh;
danizin('.tecla_tic').onclick = tocasomtic;
danizin('.tecla_tom').onclick = tocasomtom;
