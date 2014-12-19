<!DOCTYPE HTML>
<?php $page = "howtoplay"; ?>
<html>
    <head>
        <?php require_once "include/pages/meta.php"; ?>
        <title>LudiSound</title>
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
                <h2 id="titre-h2">How to play</h2>
                <div id="container-rules">
                    <br/>
                    <h3 class="titre-rule">Objectif et Histoire</h3>
                    <ul id="liste-rule-touches">
                        <li><strong>Histoire</strong>
                            <p class="hint">
                                Vous incarnez <b>Rakanoth</b> <img src="include/images/hero.png" /> un héro seul contre tous.
                                Après avoir perdu connaissance suite à de nombreux combats sur le champ de bataille, il s'est retrouvé coincé dans le donjon interminable de <b>"Non Revertetur"</b>, où il y laissera probablement sa vie. <br/>
                                La légende dit que <b>personne</b> n'a pu en sortir vivant.<br/>
                            </p>
                        </li>
                        <li><strong>Objectif</strong>
                            <p class="hint">
                                Ramasser le plus de <img src="include/images/chest.png" /> et éliminer la menace qui pèse sur lui. Son temps est limité. <br/>
                                Une fois le <b>temps écoulé</b>, il se retrouvera au <b>purgatoire</b> des héros. 
                                Il devra répondre à une <b>ultime question</b> qui lui permettra d'inscrire son nom parmi <b>les plus grands héros</b> de l'histoire. <br/>
                                <b>Plus</b> il a prouvé sa bravoure au cours du jeu, <b>meilleur</b> sera le gain d'honneur en fin de partie.
                            </p>
                        </li>
                    </ul>
                    <h3 class="titre-rule">Touches</h3>
                    <ul id="liste-rule-touches">
                        <li><b>Mouvements</b> : 
                            <p>
                                <b>&#8592; &#8593; &#8594; &#8595;</b> (touches directionnelles du clavier)
                            </p>
                        </li>
                        <li>
                            <b>Enrage</b> <img src="include/images/hero-enraged.png" /> (10sec) : <b>Z</b>
                            <p class="hint">
                                Vous devenez <b>enragé</b>, vous n'avez plus besoin de retaper sur une touche directionnelle pour vous déplacer, 
                                cela procure un <b>gain de temps</b> non négligeable. <br/>
                                Après vous être enragé, vous êtes fatigué <img src="include/images/hero-tired.png" /> et ne pouvez plus bouger pendant 3 secondes.
                            </p>
                        </li>
                    </ul>

                    <h3 class="titre-rule">Objets et valeurs</h3>
                    <ul id="liste-rule-touches">
                        <li><b>Sphère de niveau</b> <img src="include/images/sphere-level.png" /> : <b>+10 pts</b>
                            <p class="hint">
                                Si l'ennemi à un niveau supérieur au votre et que vous le touchez, vous perdrez 1 point de vie.<br/>
                            </p>
                        </li>
                        <li><b>Points de vie</b> <img src="include/images/heart.png" />: <b>0 pt </b>
                            <p class="hint">
                                Si le nombre de point de vie tombe à 0 vous êtes mort.<br/>
                                Note: <b>Aucun</b> point de vie ne sera récupérable au cours d'une partie.
                            </p>
                        </li>
                        <li><b>Nombre d'utilisation de "Enrage"</b> <img src="include/images/hero-enraged.png" /> : <b>-10 pts par utilisation</b>
                            <p class="hint">
                                En effet, aller plus rapidement dans le donjon aura un contre-coup, en plus d'être immobilisé 3 secondes cette action vous enlèvera 10 pts à chaque utilisation.
                            </p>
                        </li>
                        <li><b>Nombre de victimes</b>  <img src="include/images/monster-blood.png" /> : <b>+3 pts par victime</b></li>
                        <li><b>Coffres</b> <img src="include/images/chest.png" /> : <b>+6 pts</b>
                            <p class="hint">
                                Comme dans tout donjon, il y aura de l'or mon seignor ! 
                            </p>
                        <li><b>Time plus</b> <img src="include/images/clock.png" /> : <b>0 pt</b>
                            <p class="hint">
                                Ajoute 30 secondes au temps de jeu.<br/>
                                Note: Si le chrono tombe à zéro vous êtes mort.
                            </p>
                        <li><b>Niveau suivant</b> <img src="include/images/stair.png" /> : <b>+10 pts</b>
                            <p class="hint">
                                Vous fait passer au niveau suivant. 
                                Vous n'êtes pas obligé de prendre tous les coffres ni d'éradiqué tous les monstres 
                                pour passer au niveau suivant.<br/>
                                Cependant, vider une zone de tous les monstres rapporte 20 points bonus<br/>
                                Note: Toute les salles du donjon ne sont pas forcément accessibles.Les murs sont générés aléatoirement.
                            </p>
                        </li>

                    </ul>
                </div>
                


            </article>
            <!-- Footer -->
            <?php require_once "include/pages/footer.php"; ?>
        </section>
    </body>
</html>