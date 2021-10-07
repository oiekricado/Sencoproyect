let cliente = ["ricardo", "daniel kajdkajhkjddeohnjcnjkdcnjn"];
let folio = "FD750";
let empresa = "Senco";
let formadepago = "contado";

let contenedor1 = document.getElementById("contenedor1");
console.log(cliente);
contenedor1.innerHTML = `
        <div id="pedido">
        <h1>📋Pedido</h1>
        <h2>${folio}</h2>
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
