<?php

// Paramètres de connexion
$db_name = "ludisound";
$user = "public";
$pass = "public";

// Connexion à la BDD
try {
    $dbh = new PDO('mysql:host=localhost;dbname=' . $db_name, $user, $pass);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}



?>