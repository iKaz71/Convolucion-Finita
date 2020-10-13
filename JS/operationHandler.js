function calculateFinita(){
    var x,h;
    var origen = [];
    try{
    x = math.evaluate(document.getElementById("textSecuenciaXnFinita").value.split(","));
    h = math.evaluate(document.getElementById("textSecuenciaHnFinita").value.split(","));
    origen[0] = math.evaluate(document.getElementById("indiceXnFinita").value) * -1;
    origen[1] = math.evaluate(document.getElementById("indiceHnFinita").value) * -1;
    } catch(e){
        document.getElementById("errorFinita").innerText = e.message;
    }
    if(x && h && origen){
    document.getElementById("graphics").style.visibility = "visible"

    let resultado = convolucionDiscreta(x,h,origen);
    redondear(resultado);
    imprimirResultado(x,h,origen,resultado);
    document.getElementById("errorFinita").innerText = "";
    cambiarTab("tabConvInfinita", "tab1");
   
    }

    
}




function imprimirResultado(x,h,origen,resultado){
    cleanApplet(xnApplet);
    cleanApplet(hnApplet);
    cleanApplet(ynApplet);
    graficarSeg(xnApplet,x,origen[0]);
    graficarSeg(hnApplet,h,origen[1]);
    graficarSeg(ynApplet,resultado.vector,resultado.origenIndex);
    document.getElementById("resultado").innerText = `y(n)={${resultado.vector}} con origen en ${resultado.origen}`;
}



function redondear(resultado){
    for (let i = 0; i < resultado.vector.length; i++) {
        resultado.vector[i] = resultado.vector[i].toFixed(2);
    }
}
