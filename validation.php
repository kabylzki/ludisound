<?php

session_start();

include "connexion.php";

$id_question = $_POST['id_question'];
$id_reponse = $_POST['id_reponse'];
$id_score = $_POST['id_score'];
$level_question = $_POST['level_question'];

// Récupère la bonne réponse
$bonne_reponse = $dbh->query('SELECT id FROM reponse WHERE id_question = ' . $id_question)->fetch();

// Récupère le score enregistré
$score = $dbh->query('SELECT * FROM score WHERE id = ' . $id_score)->fetch();

if ($bonne_reponse['id'] != $id_reponse) {
    echo $bonne_reponse['id'];
} else {
    $pts_question = ($score['chest_taken']* (10 + $level_question));
    $dbh->exec("UPDATE score SET question = ".$pts_question.", score = ".($score['score'] + $pts_question). " WHERE id = " . $id_score);
    echo "true";
}
session_destroy();


?>
