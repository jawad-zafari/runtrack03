<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "utilisateurs";

try{
    $bdd = new PDO ("mysql:host=$server;dbname=$db;charset=utf8",$user,$pass);
    $bdd -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT * FROM users";
    $stmt = $bdd -> prepare($sql);
    $stmt -> execute();
    $users = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    // print_r($users);
    echo json_encode($users);
}catch(PDOException $e){
echo "la connexion a échoué : ".$e -> getMessage();
}