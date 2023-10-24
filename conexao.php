<?php
    $hostname = "localhost";
    $dbname = "lojah";
    $username = "root";
    $password = "";

    $conexao = new mysqli($hostname, $dbname, $username, $password);

    if ($conn->connect_errno){
        die("Erro de conexão: " . $conn->connect_errno);
    } else {
        echo "conexão bem-sucedida";
    }
    

?>
