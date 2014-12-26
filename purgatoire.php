<!DOCTYPE HTML>
<?php
include "connexion.php";

$page = "game";

// N° de question aléatoire
$rand_id_question = rand(1, $count);
// Récupère la question
$question = $dbh->query('SELECT * FROM question WHERE id = ' . $rand_id_question)->fetch();
// Récupère les réponses à la question
$response = $dbh->query('SELECT * FROM reponse_texte WHERE id_question = ' . $rand_id_question)->fetch();
?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>
        <title>LudiSound - Purgatoire</title>
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
                <h2 id="titre-h2">Purgatoire</h2>
                <form method="POST" action="validation.php">

                    <h3>Question (<img src="include/images/chest.png" alt="img-chest"/> <= <?php echo $question['level']; ?> )</h3>
                    <br/>
                    <p>
                        <?php echo utf8_encode($question['texte']); ?>
                    </p>

                    <?php
                        echo "<input type='radio' name='reponse' value='1' id='rep_1' checked='checked'><label for='rep_1'>" . utf8_encode($response['reponse_1']) . "</label><br/>";
                        echo "<input type='radio' name='reponse' value='2' id='rep_2'><label for='rep_2'>" . utf8_encode($response['reponse_2']) . "</label><br/>";
                        if ($response['reponse_3'] != NULL) {
                            echo "<input type='radio' name='reponse' value='3' id='rep_3'><label for='rep_3'>" . utf8_encode($response['reponse_3']) . "</label><br/>";
                        }
                        if ($response['reponse_4'] != NULL) {
                            echo "<input type='radio' name='reponse' value='4' id='rep_4'><label for='rep_4'>" . utf8_encode($response['reponse_4']) . "</label><br/>";
                        }
                    ?>
                    <input type="hidden" name="id_question" value="<?php echo (int) $question['id']; ?>" />

                    <br/>
                    <input type="submit" value="Valider" />
                </form>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>