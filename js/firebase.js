

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDms5OrXlvk-84QI6yoY3DJkEkshtSRlNk",
    authDomain: "poema-f80e8.firebaseapp.com",
    projectId: "poema-f80e8",
    storageBucket: "poema-f80e8.appspot.com",
    messagingSenderId: "339267884607",
    appId: "1:339267884607:web:b768a9b684155725b7ca8a",
    measurementId: "G-0NTKW84NC9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  function cadastrar() {
      var auth = null;
      // função de cadastro do firebase com email e senha 
      firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
          .then(function (user) {
              alert("seus dados foi cadastrado com sucesso");
              auth = user;
              //para atualizar o navegador
              document.getElementById('email').value = ''
              document.getElementById('senha').value = ''
          }).catch(function (error) {
              alert("falhar ao cadastrar");
          });
  }
  