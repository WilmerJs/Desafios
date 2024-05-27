let intentos = 3
let username = "Wilmer"
let password = "Noriega"

function Login() {
    while (intentos > 0){
        let inputUserName = prompt("Ingrese su nombre de usuario");
        let inputPassword = prompt('Ingrese su contraseña: ');
   
        if(inputUserName == username && inputPassword == password){
            alert("Inicio de sesion exitosa.")
            break;
        } else{ 
            intentos--
            alert("Usuario o contraseña incorrectos. Intentos restantes:" + intentos)
        }
    }

    if(intentos == 0){
        alert("Has agotado tus intentos. volve mas tarde");
    }
}

Login()