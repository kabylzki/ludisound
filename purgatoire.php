<?php
session_start();

include "connexion.php";

$page = "game";

// Récupère la question
$question = $dbh->query('SELECT * FROM question WHERE level = '. $_SESSION['level_question']. ' ORDER BY Rand()')->fetch();
// Récupère les réponses à la question
$response = $dbh->query('SELECT * FROM reponse_texte WHERE id_question = ' . $question['id'])->fetch();
?>
<!DOCTYPE HTML>
<html>
    <head>
        <!-- jQuery -->
        <script src="include/js/jquery-1.11.1.js"></script>
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
                <h3>Question (<img src="include/images/chest.png" alt="img-chest"/> <= <?php echo $question['level']; ?> )</h3>
                <br/>
                <p id="text_question">
                    <?php echo utf8_encode($question['texte']); ?>
                </p>
                    <?php
                    echo "<input type='radio' name='reponse' value='1' class='rep' id='rep_1' checked='checked'><label for='rep_1'>" . utf8_encode($response['reponse_1']) . "</label><br/>";
                    echo "<input type='radio' name='reponse' value='2' class='rep' id='rep_2'><label for='rep_2'>" . utf8_encode($response['reponse_2']) . "</label><br/>";
                    if ($response['reponse_3'] != NULL) {
                        echo "<input type='radio' name='reponse' value='3' class='rep' id='rep_3'><label for='rep_3'>" . utf8_encode($response['reponse_3']) . "</label><br/>";
                    }
                    if ($response['reponse_4'] != NULL) {
                        echo "<input type='radio' name='reponse' value='4' class='rep' id='rep_4'><label for='rep_4'>" . utf8_encode($response['reponse_4']) . "</label><br/>";
                    }
                    ?>
                    <input type="hidden" id="id_question" value="<?php echo (int) $question['id']; ?>" />
                    <input type="hidden" id="id_score" value="<?php echo (int) $_SESSION['id_score']; ?>" />
                    <input type="hidden" id="level_question" value="<?php echo (int) $_SESSION['level_question']; ?>" />

                    <br/>
                    <button id="send">Valider</button>
                    <br/><br/>
                    <p id="message_user"></p>
            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>

<script>
    $('#send').click(function () {
        $.ajax({
            type: "POST",
            url: 'validation.php',
            // Données envoyées au serveur
            data: {
                id_reponse: $('.rep:checked').val(),
                id_question: $("#id_question").val(),
                id_score: $("#id_score").val(),
                level_question: $("#level_question").val()
            },
            // Si ok 
            success: function (data) {
                if (data == "true") {
                    $( '.rep:checked' ).next().css( "background-color", "green" );
                    document.getElementById("message_user").innerHTML = "Bonne réponse !! vous allez être redirigé vers les scores";
                } else {
                    $( '.rep:checked' ).next().css( "background-color", "red" );
                    $( '#rep_'+data ).next().css( "background-color", "green" );
                    document.getElementById("message_user").innerHTML = "Mauvaise réponse ! vous allez être redirigé vers les scores";
                }
                
                setTimeout(function(){ window.location.href = "score.php" }, 5000);
            },
            // Message de l'erreur si il y en a une
            error: function (jqXHR, textstatus, errorThrown) {
                console.log('text status ' + textstatus + ', err ' + errorThrown);
            }
        });
    });
</script>