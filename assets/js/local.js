//recuperar datos 
//guardar datos
//imprimir datos

window.onload = () => {
  //aqui estoy declarando estas funciones lo que me permite usarlas en cualquier parte del codigo
  saveData();
  recoverData();
  clearData();

}

function saveData () {
  //const btnSave = document.getElementById('save').addEventListener
  save.addEventListener('click', () => {
    localStorage.nombre = document.getElementById('first_name').value;
    localStorage.password = document.getElementById('password').value;
    console.log(localStorage.nombre);
     
  })
}

function recoverData () {
  recover.addEventListener('click', () => {
    document.getElementById('datos').innerHTML = localStorage.nombre;
 }); 
}

function clearData () {
  clear.addEventListener('click', () => {
    document.getElementById('datos').innerHTML = '';
  });
}