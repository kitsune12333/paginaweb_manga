var carrito = [];

function agregarAlCarrito(producto, precio) {
  // Verificar si el producto ya está en el carrito
  var productoExistente = carrito.find(item => item.producto === producto);
  if (productoExistente) {
    // Si el producto ya existe, incrementar la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no existe, agregarlo al carrito
    var item = {
      producto: producto,
      precio: precio,
      cantidad: 1
    };
    carrito.push(item);
  }
  
  mostrarCarrito();
}

// Resto del código...

function mostrarCarrito() {
  var listaCarrito = document.getElementById("carrito");
  listaCarrito.innerHTML = "";
  for (var i = 0; i < carrito.length; i++) {
    var itemCarrito = document.createElement("li");
    itemCarrito.textContent = carrito[i].producto + " - $" + (carrito[i].precio * carrito[i].cantidad) +" :"+ carrito[i].cantidad + " veces comprado";
    listaCarrito.appendChild(itemCarrito);
  }
  mostrarTotal();
}

function mostrarTotal() {
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }
  var totalElemento = document.getElementById("total");
  totalElemento.textContent = total.toFixed(0);
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

function pagarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. No se puede proceder al pago.");
    return;
  }

  var montoAPagarElement = document.getElementById("total");
  var monto = parseInt(montoAPagarElement.textContent);
  montoAPagarElement.textContent = monto;

  // Almacenar el resultado en localStorage
  localStorage.setItem('monto', monto);

  // Redirigir a la página de pago
  window.location.href = 'compra.html';
}
