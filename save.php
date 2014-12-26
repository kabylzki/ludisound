<?php
session_start();

include "connexion.php";

$dbh->exec(
        "INSERT INTO score "
        . "VALUES(null,'".$_POST['hero']['pseudo']."',"
        . $_POST['stage'] . ","
        . $_POST['hero']['sphereLevel'] . ","
        . $_POST['hero']['enragedUsed'] . ","
        . $_POST['hero']['monsterKilled'] . ","
        . $_POST['hero']['chestTaken'] . ","
        . $_POST['hero']['clockTaken'] . ","
        . $_POST['hero']['areaCleared'] . ",0,"
        . $_POST['hero']['score'] . ");");

// met en session l'id inséré
$_SESSION['id_score'] = $dbh->lastInsertId();

// met en session le level de la question qui sera posée
if ($_POST['chestTaken'] < 100) {
    if ($_POST['chestTaken'] < 10) {
        $_SESSION['level_question'] = 1;
    } else {
        $_SESSION['level_question'] = substr($_POST['chestTaken'], 0, 1);
    }
} else {
    $_SESSION['level_question'] = substr($_POST['chestTaken'], 0, 2);
}
?>

