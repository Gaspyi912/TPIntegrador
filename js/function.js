
document.getElementById('btn_mostrar_info_educ').addEventListener('click',mostrar_info_educ);
document.getElementById('btn_mostrar_info_exp').addEventListener('click', mostrar_info_exp);

function mostrar_info_educ(){
    for(var i = 1; i<=6; i++){
    document.getElementById('texto_educ'+[i]).classList.toggle('show');
    }
};   

function mostrar_info_exp(){
    for(var i = 1; i <= 3; i++){
    document.getElementById('texto_exp'+[i]).classList.toggle('show');
    }  
};
