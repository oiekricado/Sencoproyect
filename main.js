"use strcit";
function verificar() {
let codigo = document.getElementById("codigoderastreo").value;/*prompt("ingrese el codigo de pedido");*/

let getdatos = "https://sheetdb.io/api/v1/wy8b9jp5ln99i"; 
fetch(getdatos)
  .then((data) => data.json())
  .then((datospedidos) => {
    function encontrarpedido(foliocodigo) {
      return foliocodigo.FOLIO === codigo;
    }
    let pedidoencontrado = datospedidos.find(encontrarpedido);
    


    ////////////////////////contenedor1////////////////
    let contenedor1 = document.getElementById("contenedor1");
    contenedor1.innerHTML = `
        <div id="pedido">
        <h1>📋Pedido</h1>
        <h2>${pedidoencontrado.FOLIO}</h2>
        </div>

        <div id="cliente">
        <h1>👨‍💼Cliente</h1>
        <h2>${pedidoencontrado.CLIENTE}</h2>
        </div>

        <div id="empresa">
        <h1>🏢 Empresa</h1>
        <h2>${pedidoencontrado.EMPRESA}</h2>
        </div>

        <div id="formadepago">
        <h1>💵 Forma de pago</h1>
        <h2>${pedidoencontrado.FORMA_DE_PAGO}</h2>
        </div>`;



    ////////////////////////contenedor2///////////////
    
   if (pedidoencontrado.AUTORIZACION.length !== 0) {
     let barra = document.getElementById("barra")
     barra.setAttribute("style","grid-column: 1/2;"); 
     barra.style.background = "#8E44AD";
    
   }

   if (pedidoencontrado.DISEÑO.length !== 0) {
    let barra = document.getElementById("barra")
    barra.setAttribute("style","grid-column: 1/3;"); 
    barra.style.background = "#3498DB";
    
  }

  if (pedidoencontrado.IMPRESIÓN.length !== 0) {
    let barra = document.getElementById("barra")
    barra.setAttribute("style","grid-column: 1/4;"); 
    barra.style.background = "#E67E22";
    
  }

  if (pedidoencontrado.TALLER.length !== 0) {
    let barra = document.getElementById("barra")
    barra.setAttribute("style","grid-column: 1/5;"); 
    barra.style.background = "#E74C3C";
    
  }

  if (pedidoencontrado.ENTREGA.length !== 0) {
    let barra = document.getElementById("barra")
    barra.setAttribute("style","grid-column: 1/6;");  
    barra.style.background = "#2ECC71";

  }


  console.log(pedidoencontrado.TALLER.indexOf(pedidoencontrado.TALLER));
  console.log(pedidoencontrado.TALLER.length)

    /////////////////////contenedor3///////////////////
    let autorizacion = document.getElementById("autorizacionfecha");
    autorizacion.innerHTML = pedidoencontrado.AUTORIZACION;

    let diseño = document.getElementById("diseñofecha");
    diseño.innerHTML = pedidoencontrado.DISEÑO;

    let impresion = document.getElementById("impresionfecha");
    impresion.innerHTML = pedidoencontrado.IMPRESIÓN;

    var taller = document.getElementById("tallerfecha");
    taller.innerHTML = pedidoencontrado.TALLER;

    let entrega = document.getElementById("entregafecha");
    entrega.innerHTML = pedidoencontrado.ENTREGA;

    
    

    console.log("todo cargo bien");
  });
  

}