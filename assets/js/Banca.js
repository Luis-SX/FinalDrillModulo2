const usuarios = [
    { nombre: "John Smith", usuario: '1000000', contrasena: 'pass1', saldo: 1000000 },
];

function validarUsuario(usuario, contrasena) {
    return usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
}

function menuPrincipal() {
    return "Seleccione que desea hacer:\n1.- Ver saldo\n2.- Realizar giro\n3.- Realizar deposito\n4.- Salir\n";
}

function consultaSaldo(usuario) {
    alert(`Tu saldo actual es: $${usuario.saldo}`)
}
function giro(usuario) {
    let monto;
    while(true) {
        monto = parseFloat(prompt(`Su saldo actual es: $${usuario.saldo} \nIngrese el monto que desea girar`));
        if(!isNaN(monto) && monto > 0) {
            break;
        } else {
            alert("Ingrese un monto válido.");
        }
    }
    if (monto > usuario.saldo) {
        alert("Saldo insuficiente.");
    } else {
        usuario.saldo -= monto;
        alert(`Giro realizado. Su nuevo saldo es $${usuario.saldo}`);
    }
}

function deposito(usuario) {
    let monto;
    while(true) {
        monto = parseFloat(prompt(`Su saldo actual es: $${usuario.saldo} \nIngrese el monto que desea depositar`));
        if(!isNaN(monto) && monto > 0) {
            break;
        } else {
            alert("Ingrese un monto válido.");
        }
    }
    usuario.saldo += monto;
    alert(`Deposito realizado. Su nuevo saldo es $${usuario.saldo}`);
}

function iniciarSesion() {
    while (true) {
        if(!confirm("Bienvenido a BancoEstafo. Presiona Aceptar para continuar o Cancelar para salir.")) {
            alert("Sesión cancelada, Hasta pronto!");
            return;
        }       
        const usuario = prompt("Introduce tu usuario:");
        const contrasena = prompt("Introduce tu contraseña:");
        const usuarioValido = validarUsuario(usuario, contrasena);

        if (usuarioValido) {
            alert(`Bienvenido, ${usuarioValido.nombre}!`);
            while (true) {
                const opcion = prompt(menuPrincipal() + "Selecciona una opción (1-4):");
                switch (opcion) {
                    case '1':
                        consultaSaldo(usuarioValido);
                        break;
                    case '2':
                        giro(usuarioValido);
                        break;
                    case '3':
                        deposito(usuarioValido);
                        break;
                    case '4':
                        alert("Gracias por operar con nosotros, vuelve pronto. \nPresiona aceptar para salir.");
                        return;
                    default:
                        alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
                }
            }
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    }
}

// Inicia la sesión
//iniciarSesion();
