"use strcit";
 function verificar() {
  let codigo =document.getElementById("codigoderastreo").value.toUpperCase(); /*prompt("ingrese el codigo de pedido");*/

  let getdatos = "https://sheetdb.io/api/v1/wy8b9jp5ln99i";
  fetch(getdatos)
    .then((data) => data.json())
    .then((datospedidos) => {
      function encontrarpedido(foliocodigo) {
        
        return foliocodigo.FOLIO === codigo;
      }
      let pedidoencontrado = datospedidos.find(encontrarpedido);
      
      
      console.log(pedidoencontrado)
      ////////////////////////contenedor1////////////////
      let contenedor1 = document.getElementById("contenedor1");
      contenedor1.innerHTML = `
      <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl    ">
      <h1 class="text-lg ">📋Pedido</h1>
      <h2 class="text-xl">${pedidoencontrado.FOLIO}</h2>
      </div>

      <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
          <h1 class="text-lg ">👨‍💼Cliente</h1>
          <h2 class="text-xl">${pedidoencontrado.CLIENTE}</h2>
      </div>

      <div class="bg-gray-100 w-64 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
          <h1 class="text-lg ">🏢Empresa</h1>
          <h2 class="text-xl">${pedidoencontrado.EMPRESA}</h2>
      </div>`; 

      ////////////////////////contenedor2///////////////

      if (pedidoencontrado.AUTORIZACION.length !== 0) {
        let barra = document.getElementById("contenedor2");
       barra.innerHTML = `
       <div id="barra" class="duration-500 bg-purple-300 h-10 w-1/5 rounded-full ">
       `;}

      if (pedidoencontrado.DISEÑO.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="  duration-500 hover:bg-blue-800  bg-blue-600 h-10 w-2/5 rounded-full ">
       `;
      }

      if (pedidoencontrado.IMPRESIÓN.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 hover:bg-yellow-700 bg-yellow-500 h-10 w-3/5 rounded-full ">
        `;
      }

      if (pedidoencontrado.TALLER.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 bg-red-300 hover:bg-red-500 h-10 w-4/5 rounded-full "> 
       `;
      }

      if (pedidoencontrado.ENTREGA.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 hover:bg-green-400 bg-green-300 h-10 w-full rounded-full "> 
        `;
      }

     

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

      
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let getdatosSD = "https://sheetdb.io/api/v1/wy8b9jp5ln99i?sheet=SD";
  fetch(getdatosSD)
    .then((data) => data.json())
    .then((datospedidos) => {
      function encontrarpedido(foliocodigo) {
        return foliocodigo.FOLIO === codigo;
      }
      let pedidoencontrado = datospedidos.find(encontrarpedido);

      ////////////////////////contenedor1////////////////
      let contenedor1 = document.getElementById("contenedor1");
      contenedor1.innerHTML = `
      <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl    ">
      <h1 class="text-lg ">📋Pedido</h1>
      <h2 class="text-xl">${pedidoencontrado.FOLIO}</h2>
      </div>

      <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
          <h1 class="text-lg ">👨‍💼Cliente</h1>
          <h2 class="text-xl">${pedidoencontrado.CLIENTE}</h2>
      </div>

      <div class="bg-gray-100 w-64 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
          <h1 class="text-lg ">🏢Empresa</h1>
          <h2 class="text-xl">${pedidoencontrado.EMPRESA}</h2>
      </div>`; 

      ////////////////////////contenedor2///////////////

      if (pedidoencontrado.AUTORIZACION.length !== 0) {
        let barra = document.getElementById("contenedor2");
       barra.innerHTML = `
       <div id="barra" class="duration-500 bg-purple-300 h-10 w-1/5 rounded-full ">
       `;}

      if (pedidoencontrado.DISEÑO.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="  duration-500 hover:bg-blue-800  bg-blue-600 h-10 w-2/5 rounded-full ">
       `;
      }

      if (pedidoencontrado.IMPRESIÓN.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 hover:bg-yellow-700 bg-yellow-500 h-10 w-3/5 rounded-full ">
        `;
      }

      if (pedidoencontrado.TALLER.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 bg-red-300 hover:bg-red-500 h-10 w-4/5 rounded-full "> 
       `;
      }

      if (pedidoencontrado.ENTREGA.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `<div id="barra" class="duration-500 hover:bg-green-400 bg-green-300 h-10 w-full rounded-full "> 
        `;
      }

      

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

     
    });

}
