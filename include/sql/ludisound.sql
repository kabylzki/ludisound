-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mar 23 Décembre 2014 à 00:51
-- Version du serveur: 5.5.40-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `ludisound`
--

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  `texte` varchar(255) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `question`
--

INSERT INTO `question` (`id`, `level`, `texte`) VALUES
(1, 10, 'Dans la célèbre comptine "C''est la mère michel", quel animal a été perdu ?'),
(2, 10, 'Qu''est-ce qu''un demi-ton ?'),
(3, 10, 'Parmi ces quatre instruments, un seul est d''origine latine, lequel ?'),
(4, 10, 'Un orchestre de musique baroque, au complet, est composé de combien de musiciens ?'),
(5, 10, 'Sur une batterie "standard", l''un des instruments de la liste ci-dessous n''en fait pas partie, lequel ?'),
(6, 10, 'Parmi ces quatre saxophones, lequel est le plus aigu ?'),
(7, 10, 'Dans une mesure 3/4, que signifie le chiffre 4 ?'),
(8, 10, 'De quelle famillie fait partie la flûte traversière ?'),
(9, 10, 'La sonate pour flûte et harpe a été écrite par'),
(10, 10, 'Un accord possède forcément :'),
(11, 10, 'Les clefs de DO et RE existent-elles ?'),
(12, 10, 'J''ai composé la musique de la saga Star Wars, qui suis-je ?');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

CREATE TABLE IF NOT EXISTS `reponse` (
  `id` int(11) NOT NULL,
  `id_question` int(11) NOT NULL,
  PRIMARY KEY (`id`,`id_question`),
  KEY `id_question` (`id_question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reponse_texte`
--

CREATE TABLE IF NOT EXISTS `reponse_texte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_question` int(11) NOT NULL,
  `reponse_1` varchar(255) DEFAULT NULL,
  `reponse_2` varchar(255) DEFAULT NULL,
  `reponse_3` varchar(255) DEFAULT NULL,
  `reponse_4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `reponse_texte`
--

INSERT INTO `reponse_texte` (`id`, `id_question`, `reponse_1`, `reponse_2`, `reponse_3`, `reponse_4`) VALUES
(1, 1, 'Un Chien', 'Une Chat', 'Une Vache', NULL),
(2, 2, 'La moitié d''un ton', 'Ce n''est pas un terme musical', 'Le plus petit intervalle qui sépare deux notes', NULL),
(3, 3, 'Le Banjo', 'Le Ukulele', 'Le Kalangu', 'La Timbale'),
(4, 4, '8', '12', '18', '28'),
(5, 5, 'La Caisse claire', 'Le Charleston', 'La Cloche', 'La cymbale'),
(6, 6, 'Alto', 'Baryton', 'Soprano', 'Ténor'),
(7, 7, 'Indique la figure de note qui dure un temps', 'Indique que l''on a 4 croches par mesure', 'Indique 4 mesures que l''on a 4 mesures par portée', NULL),
(8, 8, 'Des Cuivres', 'Des Bois', 'des Claviers', NULL),
(9, 9, 'Mozart', 'Bach', 'Beethoven', NULL),
(10, 10, 'Au moins 4 notes', 'Au moins 3 notes', 'Des dièses et des bémols', NULL),
(11, 11, 'Oui', 'Non', 'oui, mais on ne les utilisent plus', NULL),
(12, 12, 'James Horner', 'John Williams', 'Jerry Goldsmith', NULL);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `reponse`
--
ALTER TABLE `reponse`
  ADD CONSTRAINT `reponse_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reponse_texte`
--
ALTER TABLE `reponse_texte`
  ADD CONSTRAINT `reponse_texte_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
