const firebaseConfig = {
    apiKey: "AIzaSyDms5OrXlvk-84QI6yoY3DJkEkshtSRlNk",
    authDomain: "poema-f80e8.firebaseapp.com",
    projectId: "poema-f80e8",
    storageBucket: "poema-f80e8.appspot.com",
    messagingSenderId: "339267884607",
    appId: "1:339267884607:web:b768a9b684155725b7ca8a",
    measurementId: "G-0NTKW84NC9"
  };
  firebase.initializeApp(firebaseConfig);


  function entrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            auth = user;
window.location.href = "../page/carregamento.html";
//para atualizar o navegador
document.getElementById('email').value = ''
document.getElementById('senha').value = ''

// exibe mensagem de sucesso
var sucessoMsg = document.createElement("div");
sucessoMsg.innerText = "Logado com sucesso!";
sucessoMsg.style.backgroundColor = "green";
sucessoMsg.style.color = "white";
sucessoMsg.style.padding = "20px";
sucessoMsg.style.borderRadius = "10px";
sucessoMsg.style.border = "2px solid #005900";
sucessoMsg.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.3)";
sucessoMsg.style.position = "fixed";
sucessoMsg.style.top = "50%";
sucessoMsg.style.left = "50%";
sucessoMsg.style.transform = "translate(-50%, -50%)";
sucessoMsg.style.opacity = "0";
sucessoMsg.style.transition = "opacity 0.5s ease-in-out";
document.body.appendChild(sucessoMsg);

setTimeout(function() {
  sucessoMsg.style.opacity = "1";
}, 100);

setTimeout(function() {
  sucessoMsg.style.opacity = "0";
  setTimeout(function() {
    document.body.removeChild(sucessoMsg);
  }, 500);
}, 3000);

}).catch(function (error) {
// exibe mensagem de erro
var errorMsg = document.createElement("div");
errorMsg.innerText = "Falha ao entrar!";
errorMsg.style.backgroundColor = "red";
errorMsg.style.color = "white";
errorMsg.style.padding = "20px";
errorMsg.style.borderRadius = "10px";
errorMsg.style.border = "2px solid #8b0000";
errorMsg.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.3)";
errorMsg.style.position = "fixed";
errorMsg.style.top = "50%";
errorMsg.style.left = "50%";
errorMsg.style.transform = "translate(-50%, -50%)";
errorMsg.style.opacity = "0";
errorMsg.style.transition = "opacity 0.5s ease-in-out";
document.body.appendChild(errorMsg);

setTimeout(function() {
  errorMsg.style.opacity = "1";
}, 100);

setTimeout(function() {
  errorMsg.style.opacity = "0";
  setTimeout(function() {
    document.body.removeChild(errorMsg);
  }, 500);
}, 3000);
});
  }
