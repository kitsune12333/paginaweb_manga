var carrito = [];

function agregarAlCarrito(producto, precio) {
  var item = {
    producto: producto,
    precio: precio
  };
  carrito.push(item);
  mostrarCarrito();
}

function mostrarCarrito() {
  var listaCarrito = document.getElementById("carrito");
  listaCarrito.innerHTML = "";
  for (var i = 0; i < carrito.length; i++) {
    var itemCarrito = document.createElement("li");
    itemCarrito.textContent = carrito[i].producto + " - $" + carrito[i].precio;
    listaCarrito.appendChild(itemCarrito);
  }
  mostrarTotal();
}

function mostrarTotal() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  var totalElemento = document.getElementById("total");
  totalElemento.textContent = total.toFixed(2);
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}
