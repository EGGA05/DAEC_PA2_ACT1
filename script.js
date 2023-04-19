function NumMayNumMen(){
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    if(n1!= false && n2!=false){
        n1=parseInt(n1);
        n2=parseInt(n2);
        if(n1!=n2){
        window.alert(n1>n2 ? n1+" es mayor a "+n2 : n2+" es mayor a "+n1);
    }else{
        window.alert(n1+" y "+n2+" son iguales")}
    }
}