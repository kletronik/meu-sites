<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Recebe os dados do formulário
$titulo = $_POST["titulo"];
$autor = $_POST["autor"];
$categoria = $_POST["categoria"];
$conteudo = $_POST["conteudo"];

// Insere os dados no banco de dados
$sql = "INSERT INTO poemas (titulo, autor, categoria, conteudo) VALUES ('$titulo', '$autor', '$categoria', '$conteudo')";

if ($conn->query($sql) === TRUE) {
  echo "Poema enviado com sucesso!";
} else {
  echo "Erro ao enviar o poema: " . $conn->error;
}

$conn->close();
?>
