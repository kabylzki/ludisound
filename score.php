<!DOCTYPE HTML>
<?php
include "connexion.php";

$page = "score";

// Récupère la question
$scores = $dbh->query('SELECT * FROM score ORDER BY score DESC LIMIT 50')->fetchAll();

$max_stage = $dbh->query('SELECT MAX(stage) FROM score')->fetch();
$max_level = $dbh->query('SELECT MAX(level) FROM score')->fetch();
$max_enraged = $dbh->query('SELECT MAX(enraged_used) FROM score')->fetch();
$max_monster = $dbh->query('SELECT MAX(monster_killed) FROM score')->fetch();
$max_chest = $dbh->query('SELECT MAX(chest_taken) FROM score')->fetch();
$max_clock = $dbh->query('SELECT MAX(clock_taken) FROM score')->fetch();
$max_alcool = $dbh->query('SELECT MAX(alcool_taken) FROM score')->fetch();
$max_pill = $dbh->query('SELECT MAX(pill_taken) FROM score')->fetch();
$max_doll = $dbh->query('SELECT MAX(doll_taken) FROM score')->fetch();
$max_area = $dbh->query('SELECT MAX(area_cleared) FROM score')->fetch();
$max_question = $dbh->query('SELECT MAX(question) FROM score')->fetch();
?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>
        <link href="include/css/score.css" rel="stylesheet" type="text/css" />
        <title>LudiSound - Scores</title>
    </head>
    <body>
        <!-- Conteneur du site -->
        <section id="container">
            <!-- Header -->
            <?php require_once "include/pages/header.php"; ?>
            <!-- Menu -->
            <?php require_once "include/pages/menu.php"; ?>
            <!-- Contenu de la page -->
            <article id="content" role="main">
                <h2 id="titre-h2">Scores (Top 50)</h2>
                <table id="table-score">
                    <tr id="tr-titre">
                        <td>n°</td>
                        <td>Pseudo</td>
                        <td>Date</td>
                        <td class="resp">Stage</td>
                        <td class="resp"><img src="include/images/sphere-level.png" alt="sphere-level" title="Votre Niveau sphère" /></td>
                        <td class="resp"><img src="include/images/hero-enraged.png" alt="hero-enraged" title="Nombre d'Enragement utilisés"/></td>
                        <td class="resp"><img src="include/images/monster-blood.png" alt="monster-blood" title="Nombre de monstre tués"/></td>
                        <td class="resp"><img src="include/images/chest.png" alt="chest" title="Nombre de coffres ramassés"/></td>
                        <td class="resp"><img src="include/images/clock.png" alt="clock" title="Nombre de chrono récupérés"/></td>
                        <td class="resp"><img src="include/images/alcool-rhum.gif" alt="alcool-rhum" title="Nombre d'alcool bu"/></td>
                        <td class="resp"><img src="include/images/pill-twin.gif" alt="pill-twin" title="Nombre de pilules ingurgitéés"/></td>
                        <td class="resp"><img src="include/images/doll.png" alt="doll" title="Nombre de poupées récupérées"/></td>
                        <td class="resp"><img src="include/images/cleared.png" alt="cleared" title="Nombre de salle vidées"/></td>
                        <td class="resp">Question</td>
                        <td>Score</td>
                    </tr>
                    <?php
                    $i = 1;
                    foreach ($scores as $score) {
                        if ($i == 1) {
                            echo "<tr class='tr-1'>";
                            echo "<td><img src='include/images/medal-gold.png' title='gold-medal' /></td>";
                        } else if ($i == 2) {
                            echo "<tr class='tr-2'>";
                            echo "<td><img src='include/images/medal-silver.png' title='silver-medal' /></td>";
                        } else if ($i == 3) {
                            echo "<tr class='tr-3'>";
                            echo "<td><img src='include/images/medal-bronze.png' title='bronze-medal' /></td>";
                        } else {
                            echo "<tr>";
                            echo "<td>" . $i . "</td>";
                        }
                        echo "<td>" . $score['pseudo'] . "</td>";
                        echo "<td>" . $score['date'] . "</td>";

                        if ($score['stage'] == $max_stage[0]) {
                            echo "<td class='resp'><b>" . $score['stage'] . "</b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['stage'] . "</td>";
                        }

                        if ($score['level'] == $max_level[0]) {
                            echo "<td class='resp'><b>" . $score['level'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['level'] . "</td>";
                        }

                        if ($score['enraged_used'] == $max_enraged[0]) {
                            echo "<td class='resp'><b>" . $score['enraged_used'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['enraged_used'] . "</td>";
                        }

                        if ($score['monster_killed'] == $max_monster[0]) {
                            echo "<td class='resp'><b>" . $score['monster_killed'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['monster_killed'] . "</td>";
                        }

                        if ($score['chest_taken'] == $max_chest[0]) {
                            echo "<td class='resp'><b>" . $score['chest_taken'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['chest_taken'] . "</td>";
                        }

                        if ($score['clock_taken'] == $max_clock[0]) {
                            echo "<td class='resp'><b>" . $score['clock_taken'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['clock_taken'] . "</td>";
                        }

                        if ($score['alcool_taken'] == $max_alcool[0]) {
                            echo "<td class='resp'><b>" . $score['alcool_taken'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['alcool_taken'] . "</td>";
                        }

                        if ($score['pill_taken'] == $max_pill[0]) {
                            echo "<td class='resp'><b>" . $score['pill_taken'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['pill_taken'] . "</td>";
                        }

                        if ($score['doll_taken'] == $max_doll[0]) {
                            echo "<td class='resp'><b>" . $score['doll_taken'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['doll_taken'] . "</td>";
                        }

                        if ($score['area_cleared'] == $max_area[0]) {
                            echo "<td class='resp'><b>" . $score['area_cleared'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['area_cleared'] . "</td>";
                        }

                        if ($score['question'] == $max_question[0]) {
                            echo "<td class='resp'><b>" . $score['question'] . "<b></td>";
                        } else {
                            echo "<td class='resp'>" . $score['question'] . "</td>";
                        }
                        echo "<td><b>" . $score['score'] . "</b></td>";
                        echo "</tr>";
                        $i++;
                    }
                    ?>
                </table>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>