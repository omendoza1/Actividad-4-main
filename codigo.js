let tablaRegistro = [
    { nombre: "Juan", apellido: "Perez", carrera: "Ingeniería de sistemas", edad: 27, correo: "jperez@cuc.edu.co", celular: 3108976567 },
    { nombre: "Sara", apellido: "Sanchez", carrera: "Derecho", edad: 18, correo: "ssanchez@cuc.edu.co", celular: 3027564325 },
    { nombre: "Laura", apellido: "Rodriguez", carrera: "Ingeniería de sistemas", edad: 25, correo: "lrodriguez@cuc.edu.co", celular: 3509876781 },
    { nombre: "Luis", apellido: "Paez", carrera: "Ingeniería Mecánica", edad: 16, correo: "lpaez@cuc.edu.co", celular: 301890543 },
    { nombre: "Vanesa", apellido: "Martinez", carrera: "Psicología", edad: 19, correo: "vamartinez@cuc.edu.co", celular: 302789672 },
    { nombre: "Alexander", apellido: "Rodriguez", carrera: "Ingeniería Ambiental", edad: 17, correo: "arodriguez@cuc.edu.co", celular: 320901267 }
]
function listar() {
    let registro = document.getElementById("Body");
    let newTable = "";
    for (let index = 0; index < tablaRegistro.length; index++) {
        newTable += `<tr>
        <td>${tablaRegistro[index].nombre}</td>
        <td>${tablaRegistro[index].apellido}</td>
        <td>${tablaRegistro[index].carrera}</td>
        <td>${tablaRegistro[index].edad}</td>
        <td>${tablaRegistro[index].correo}</td>
        <td>${tablaRegistro[index].celular}</td>
        </tr>`;
    }
    registro.innerHTML = newTable;
}
function registrar() {
    let newName = document.getElementById("name").value
    let newLastname = document.getElementById("lastname").value
    let newCareer = document.getElementById("career").value
    let newAge = document.getElementById("age").value
    let newMail = document.getElementById("mail").value
    let newCell = document.getElementById("cell").value
    let elemento = document.getElementById("Body")
    var confirmar = false;
    if (newName.length == 0 || newLastname.length == 0 || newCareer.length == 0
        || newAge == 0 || newMail.length == 0 || newCell == 0) {
        alert("Diligencia todos los campos.")
        return
    } else {
        for (let index = 0; index < tablaRegistro.length; index++) {
            if (newMail == tablaRegistro[index].correo) {
                confirmar = true;
            }
        }
    }
    if (confirmar == true) {
        alert("Correo ya registrado.")
        return
    } else {
        elemento.innerHTML += `<tr><td>${newName}</td><td>${newLastname}</td><td>${newCareer}</td><td>${newAge}</td><td>${newMail}</td><td>${newCell}</td></tr>`
        let nuevo = {
            nombre: newName,
            apellido: newLastname,
            carrera: newCareer,
            edad: newAge,
            correo: newMail,
            celular: newCell
        }
        tablaRegistro.push(nuevo)
    }

}