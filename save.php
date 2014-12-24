<?php

include "connexion.php";

$dbh->exec(
        "INSERT INTO score "
        . "VALUES(null,'Kab',"
        . $_POST['sphereLevel'] . ","
        . $_POST['sphereLevel'] . ","
        . $_POST['enragedUsed'] . ","
        . $_POST['monsterKilled'] . ","
        . $_POST['chestTaken'] . ","
        . $_POST['clockTaken'] . ","
        . $_POST['areaCleared'] . ",0,"
        . $_POST['score'].");");

?>

