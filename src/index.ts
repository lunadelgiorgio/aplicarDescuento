import "./styles.css";

let btnEnv = document.getElementById("btnEnviar");

btnEnv?.addEventListener("click" function () {
  let precio: number = Number(document.getElementById("datoPrecio").value);
  let cantidad: number = Number(document.getElementById("datoCantidad").value);
  let precioDescuento: number = 0;

  if(cantidad) {
    precio = cantidad * precio
  }
console.log(cantidad)
  if(precio >= 1000){
    precioDescuento = precio * 0.1;
    precio = precio - precioDescuento;
    console.log(precio)
  } else {
    console.log(precio)
    return precio
  }
  console.log(precio)
});
