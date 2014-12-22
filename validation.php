<!DOCTYPE HTML>
<?php
include "connexion.php";

$page = "purgatoire";

// N° de question aléatoire
$rand_id_question = rand(1, $count);
// Récupère la question
$question = $dbh->query('SELECT * FROM question WHERE id = ' . $rand_id_question)->fetch();
// Récupère les réponses à la question
$response = $dbh->query('SELECT * FROM reponse_texte WHERE id_question = ' . $rand_id_question)->fetch();


echo "TODO TRAITEMENT De LA REPONSE";
?>
