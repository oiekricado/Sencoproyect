function verificar() {
  let codigo = document.getElementById("codigoderastreo").value;
let cliente = ["ricardo", "Ricardo Barragan Ramos"];
let empresa = "Senco";
let formadepago = "contado";
console.log("funciono");
let contenedor1 = document.getElementById("contenedor1");
contenedor1.innerHTML = ` 
        <div id="pedido">
        <h1>📋Pedido</h1>
        <h2>${codigo}</h2>
        </div>
      
        <div id="cliente">
        <h1>👨‍💼Cliente</h1>
        <h2>${cliente[1]}</h2>
        </div>
      
        <div id="empresa">
        <h1>🏢 Empresa</h1>
        <h2>${empresa}</h2>
        </div>
      
        <div id="formadepago">
        <h1>💵 Forma de pago</h1>
        <h2>${formadepago}</h2>
        </div>`;

}
      
