<!DOCTYPE HTML>
<?php
include "connexion.php";

$page = "game";

$id_question = $_POST['id_question'];
$id_reponse = $_POST['id_question'];

// Récupère la bonne réponse
$bonne_reponse = $dbh->query('SELECT id FROM reponse WHERE id_question = ' . $id_question)->fetch();

var_dump($bonne_reponse['id']);

if ($bonne_reponse['id'] != $id_reponse) {
    
}

// Récupère les réponses à la question
$response = $dbh->query('SELECT * FROM reponse_texte WHERE id_question = ' . $rand_id_question)->fetch();


echo "TODO TRAITEMENT De LA REPONSE";
?>
