// Initialize Firebase
const firebaseConfig = {
    // Adicione as suas configurações do Firebase aqui
    apiKey: "AIzaSyDms5OrXlvk-84QI6yoY3DJkEkshtSRlNk",
    authDomain: "poema-f80e8.firebaseapp.com",
    projectId: "poema-f80e8",
    storageBucket: "poema-f80e8.appspot.com",
    messagingSenderId: "339267884607",
    appId: "1:339267884607:web:b768a9b684155725b7ca8a",
    measurementId: "G-0NTKW84NC9"
  };
firebase.initializeApp(firebaseConfig);

// Recupera a coleção no Firestore
const itemsCollection = firebase.firestore().collection('items');

// Recupera os dados da coleção e adiciona à página
const itemsDiv = document.getElementById('items');
itemsCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        const itemDiv = document.createElement('div');
        itemDiv.textContent = itemData.title + ': ' + itemData.description;
        itemsDiv.appendChild(itemDiv);
    });
});

// Adiciona um listener de evento ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que o formulário seja enviado por padrão
    const author = form.author.value;
    const poem = form.poem.value;
    // Envia os dados para o Firebase
    firebase.firestore().collection('poems').add({
        author: author,
        poem: poem,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao enviar dados: ', error);
    });
    // Limpa o formulário
    form.author.value = '';
    form.poem.value = '';
});

// Recupera a coleção no Firestore e adiciona os dados à página
const poemsDiv = document.getElementById('poems');
firebase.firestore().collection('poems').orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
    poemsDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const poemData = doc.data();
        const poemDiv = document.createElement('div');
        poemDiv.innerHTML = '<strong>' + poemData.author + '</strong>:<br>' + poemData.poem;
        poemsDiv.appendChild(poemDiv);
    });
});
