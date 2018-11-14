-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 14 nov. 2018 à 17:31
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `taleta`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`ID`, `username`, `password`) VALUES
(1, 'admin', 'f6fdffe48c908deb0f4c3bd36c032e72');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `ID` varchar(10) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `date_naissance` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `photo` text NOT NULL,
  `IDNiveau` varchar(10) NOT NULL,
  `adresse` text NOT NULL,
  `IDPays` varchar(10) NOT NULL,
  `IDVille` varchar(10) NOT NULL,
  `IDQuartier` int(11) NOT NULL,
  `IDQu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`ID`, `nom`, `prenom`, `date_naissance`, `email`, `password`, `tel`, `photo`, `IDNiveau`, `adresse`, `IDPays`, `IDVille`, `IDQuartier`, `IDQu`) VALUES
('7LF1pVywnY', 'GUVENDI', 'Mucahit', '2005-01-05', 'yjhhyy@live.com', 'ab4f63f9ac65152575886860dde480a1', '', '', '1ERS', 'H', 'TCHAD', 'JAMENA', 0, 0),
('7WUIMlNa5x', 'GJHU', 'Gcvv', '2018-10-19', 'vhjb', '3dbe00a167653a1aaee01d93e77e730e', '', '', 'primary', 'Hhjvghn', 'MADA', 'TANA', 0, 0),
('8gZ07nLBNh', 'NJARA', '', '1992-07-03', 'njarajico@gmail.com', '433c9679bb396ed0a30f1602f9559eae', '', '', 'TC', 'ijknn', 'TCHAD', 'FAYA', 0, 0),
('bkGgdfYxSL', 'LILY', 'Rah', '1992-10-02', 'rahalily@gmail.com', '21fa08edd58c3901a3b40a9d8e95e723', '', '', 'primary', 'rahalily@gmail.com', 'MADA', 'TANA', 0, 0),
('DjztQAOc1y', 'Johnny', 'Doe', '1996-08-19', 'johndoe@gmail.com', '5cc32e366c87c4cb49e4309b75f57d64', '', '', 'primary', 'Lot VA 32 CJ Tsiadana', 'MADA', 'TANA', 0, 0),
('eChnDUBoyb', 'MAHAMAT', 'Abdelkrim', '2009-01-02', 'mhta20155@gmail.com', '84d82a820b87b733482221ccf53523ba', '', '', '2NDL', 'Farcha353', 'TCHAD', 'JAMENA', 0, 0),
('ErFK7kqGpQ', 'NJARA', 'Jico', '1991-07-27', 'njarajico@gmail.com', '433c9679bb396ed0a30f1602f9559eae', '', '', 'TG1', 'kijkkn', 'TCHAD', 'ABECHE', 0, 0),
('FVM4Lu3kj9', 'NASSOURADINE', 'Moussa', '1990-09-17', 'moussa3050@gmail.com', 'ccfd2f5856e9e63c1993c377d2b30866', '', '', 'TD', 'Farcha, N\'djamena', 'TCHAD', 'JAMENA', 0, 0),
('HyQ13TLq4s', 'BOTH ARMS', 'Fdsfqsd', '2018-10-17', 'canarienavoir@gmail.com', 'c93ccd78b2076528346216b3b2f701e6', '', '', '2nd', 'dldsfksgjflgkfdjslkgj', 'MADA', 'TANA', 0, 0),
('lMxK7OJoIy', 'NEZILE', 'elimi', '2018-10-17', 'leila.cr7@icloud.com', '382315a4a2425a6a72deaf5bf0bb34a3', '', '', '2nd', '13 les touleuses mauves 95000', 'TCHAD', 'JAMENA', 0, 0),
('nhsrtuqbgQ', 'HAROUN', 'Djibrine', '1999-09-24', 'h4runix@gmail.com', '1f8833272b5e21dc4068e8529a280887', '', '', 'TC', '0023566511206', 'TCHAD', 'JAMENA', 0, 0),
('nWLf4RxOX0', 'NDIMENDOUDE', 'caroline', '2018-01-28', 'caroline.ndimendoude@gmail.com', 'd13f3b188454dd5646d01159ee345388', '', '', '2nd', '66081903', 'TCHAD', 'JAMENA', 0, 0),
('SuZ7N8ORGd', 'EAGLE', 'Faucon', '1992-05-20', 'eagle@gmail.com', 'f6fdffe48c908deb0f4c3bd36c032e72', '', '', 'primary', 'lot 0235/6/566 Betamanga', 'MADA', 'TANA', 0, 0),
('WxOKfe0b23', 'ELIMI', 'MAHAMAT', '2010-01-19', 'mhtnour88@hotmail.fr', 'a8a7b56a697ef78ff532bfe6aa4bd042', '', '', '2nd', '13 les touleuses mauves', 'TCHAD', 'JAMENA', 0, 0),
('XudGyINHbK', 'ELIMI', 'MAHAMAT', '2010-01-19', 'mhtnour88@hotmail.fr', 'a8a7b56a697ef78ff532bfe6aa4bd042', '', '', '2nd', '13 les touleuses mauves', 'TCHAD', 'JAMENA', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `ID` int(11) NOT NULL,
  `IDTuteur` varchar(10) NOT NULL,
  `IDEtudiant` varchar(10) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `description` text NOT NULL,
  `lieu` text NOT NULL,
  `validation` tinyint(1) NOT NULL,
  `paye` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`ID`, `IDTuteur`, `IDEtudiant`, `startDate`, `endDate`, `description`, `lieu`, `validation`, `paye`) VALUES
(9, '1', '', '2018-08-16 00:00:00', '2018-08-23 00:00:00', 'Jour de congé', '', 1, 0),
(10, '1', '', '2018-08-23 00:00:00', '2018-08-26 00:00:00', 'Leonard de Vinci', '', 1, 0),
(11, '1', '', '2018-08-09 08:31:00', '2018-08-09 17:31:00', 'Travail sur l\'achat des implants', '', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE `matiere` (
  `ID` varchar(10) NOT NULL,
  `matiere` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`ID`, `matiere`) VALUES
('ANALYSEF', 'Analyse financière'),
('ARAB', 'Arabe'),
('BACA', 'Package préparation Bac A'),
('BACC', 'Package préparation Bac C'),
('BACD', 'Package préparation Bac D'),
('BACG', 'Package préparation Bac G'),
('BAKA', 'Package préparation Bac A'),
('BAKC', 'Package préparation Bac C'),
('BAKD', 'Package préparation Bac D'),
('BAKG', 'Package préparation Bac G'),
('BREVET', 'Package préparation Brevet'),
('COLLEGE', 'Package College'),
('COMPTA', 'Comptabitilé'),
('DROIT', 'Droit civil et commercial'),
('ECONO', 'Economie'),
('EN', 'Anglais'),
('FRANLYCEE', 'Package francais/ litterature Lycée'),
('FRLYCEE', 'Package francais/ litterature Lycée'),
('FRS', 'Français'),
('HISTOGEO', 'Histoire-Géographie'),
('LANGUES', 'Langues et Littératures françaises'),
('MATH', 'Mathématiques'),
('MATHLYCEE', 'Package mathématiques Lycée'),
('MATLYCEE', 'Package mathématiques Lycée'),
('PACKPREMIE', 'Package 1ère G'),
('PACKPREMS', 'Package seconde/ 1ère S'),
('PACKSECOND', 'Package seconde AB'),
('PC', 'Physique-chimie'),
('PCLYCEE', 'Package physique-chimie Lycée'),
('PHCLYCEE', 'Package physique-chimie Lycée'),
('PHILO', 'Philosophie'),
('PREMIEREG', 'Package 1ère G'),
('PREMIERES', 'Package seconde/ 1ère S'),
('PREMIERL', 'Package seconde/1ère L'),
('PRIMAIRE', 'Package Primaire'),
('SCIENCELYC', 'Package sciences de la vie et de la terre Lycée'),
('SECONDEAB', 'Package seconde AB'),
('SES', 'Sciences économiques et sociales'),
('STAT', 'Statistiques'),
('SVT', 'Sciences de la vie et de la terre'),
('SVTLYCEE', 'Package sciences de la vie et de la terre Lycée'),
('TIC', 'Technologie & Informatique');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `ID` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `objet` text NOT NULL,
  `adresse` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`ID`, `nom`, `prenom`, `objet`, `adresse`, `message`) VALUES
(5, 'njara', 'jico', 'kk', 'njarajico@gmail.com', 'pourquoi taleta'),
(7, 'Sang-nodji ', 'Franck', 'Demande d\'information', 'fsangnodji@hotmail.fr', 'Bonjour, \nJe suis Sangnodji Franck nguissi, un jeune tchadien résidant à Ouagadougou au burkina. Après mes études en comptabilité contrôle et audit à l\'Université catholique de l\'Afrique de l\'ouest, aujourd\'hui je suis manager assistant dans un cabinet d\'assistance fiscale, comptable et juridique à Ouagadougou. Je suis très intéressé par votre initiative. Est ce que à partir de Ouagadougou pourrais-je être un tuteur telle est ma question.\nMerci bien à vous.'),
(8, 'Haoua Ali ', 'Ali youssouf Terap ', 'Candidature au poste <Taleta>', 'Aliterap97@gmail.com ', '\"Madames ,Monsieur \"\nJe me permet de vous contacter à ori de votre annonce pour le poste d\'accompagnement scolaire '),
(9, 'Haoua Ali ', 'Ali youssouf Terap ', 'Candidature au poste <Taleta>', 'Aliterap97@gmail.com ', '\"Madames ,Monsieur \"\nJe me permet de vous contacter à ori de votre annonce pour le poste d\'accompagnement scolaire '),
(10, 'Raharintsoa', 'Lily', 'Inscription ', 'rahalily@gmail.com', 'Je veux m\'inscrire '),
(11, 'Raharintsoa', 'Lily', 'Inscription ', 'rahalily@gmail.com', 'Je veux m\'inscrire '),
(12, 'Ali ', 'Prenom', 'Prise de Contact ', 'amoustapha50@yahoo.fr', 'Bonjour Taleta. Très heureux de voir une initiative par les jeunes et pour les jeux. Moi même pationné par les TIC et le coaching, j\'aimerai bien être utile à ce jeune dans mon pays. Alors je sais comment sava se passer ? Mais je préfère un moyen disant de communication vue que je suis pas à ndjamena. \nVivement à très vite '),
(13, 'Rah', 'Lily', 'Test', 'rahalily@gmail.com', 'Je suis en train de tester '),
(14, 'Rah', 'Lily', 'Test', 'rahalily@gmail.com', 'Je suis en train de tester '),
(15, 'Rah', 'Lily', 'Test', 'rahalily@gmail.com', 'Je suis en train de tester '),
(18, 'Rah', 'Lily', 'Message Test', 'rahalily@gmail.com', 'Message test'),
(19, 'njara', 'jico', 'teste', 'njarajico@gmail.com', 'je test'),
(20, 'njara', 'jico', 'teste', 'njarajico@gmail.com', 'je teste');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `ID` varchar(10) NOT NULL,
  `niveau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`ID`, `niveau`) VALUES
('1ERG1', '1ère G1\r\n'),
('1ERG2', '1ère G2\r\n'),
('1ERL', '1ère L\r\n'),
('1ERS', '1ère S\r\n'),
('2nd', 'Seconde'),
('2NDAB', 'Seconde AB'),
('2NDL', 'Séconde L'),
('2NDS', 'Seconde S\r\n'),
('2NDU', 'Seconde Unifiée\r\n'),
('3EM', '3ième'),
('4EM', '4ième'),
('5EM', '5ième'),
('6EM', '6ième'),
('primary', 'Primaire'),
('TA', 'Terminale A\r\n'),
('TC', 'Terminale C\r\n'),
('TD', 'Terminale D\r\n'),
('TG1', 'Terminale G1\r\n'),
('TG2', 'Terminale G2\r\n'),
('TG3', 'Terminale G2\r\n');

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

CREATE TABLE `notation` (
  `ID` int(11) NOT NULL,
  `IDEvenement` int(11) NOT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `notation`
--

INSERT INTO `notation` (`ID`, `IDEvenement`, `note`) VALUES
(1, 9, 3),
(2, 11, 2);

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `ID` int(11) NOT NULL,
  `IDEtudiant` varchar(10) NOT NULL,
  `IDEvenement` int(11) NOT NULL,
  `date_paiement` datetime NOT NULL,
  `montant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `ID` varchar(10) CHARACTER SET latin1 NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`ID`, `nom`) VALUES
('MADA', '--|--'),
('TCHAD', 'Tchad');

-- --------------------------------------------------------

--
-- Structure de la table `pricing`
--

CREATE TABLE `pricing` (
  `ID` int(11) NOT NULL,
  `IDTuteur` int(11) NOT NULL,
  `IDNiveau` varchar(10) NOT NULL,
  `IDMatiere` varchar(10) NOT NULL,
  `prix` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `pricing`
--

INSERT INTO `pricing` (`ID`, `IDTuteur`, `IDNiveau`, `IDMatiere`, `prix`) VALUES
(1, 1, 'primary', 'FRS', 20500);

-- --------------------------------------------------------

--
-- Structure de la table `quartier`
--

CREATE TABLE `quartier` (
  `ID` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `IDVille` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quartier`
--

INSERT INTO `quartier` (`ID`, `nom`, `IDVille`) VALUES
(3, 'Abena', 'JAMENA'),
(4, 'Am Toukougne', 'JAMENA'),
(5, 'Amdjarass', 'JAMENA'),
(6, 'Amriguebé', 'JAMENA'),
(7, 'Ardep-djoumal', 'JAMENA'),
(8, 'Bololo', 'JAMENA'),
(9, 'Chagoua', 'JAMENA'),
(10, 'Diguel', 'JAMENA'),
(11, 'Djambal Bahr', 'JAMENA'),
(12, 'Farcha', 'JAMENA'),
(13, 'Gassi', 'JAMENA'),
(14, 'Goudji', 'JAMENA'),
(15, 'Guizactor', 'JAMENA'),
(16, 'Klemat', 'JAMENA'),
(17, 'Mardjandafck', 'JAMENA'),
(18, 'Moursal', 'JAMENA'),
(19, 'Ndjari', 'JAMENA'),
(20, 'Ngabo', 'JAMENA'),
(21, 'Paris-Congo', 'JAMENA'),
(22, 'Quartier centre', 'JAMENA'),
(23, 'Repos', 'JAMENA'),
(24, 'Ridina', 'JAMENA'),
(40, 'Rue de 40', 'JAMENA'),
(50, 'Rue de 50', 'JAMENA'),
(51, 'Sanfil', 'JAMENA'),
(52, 'Walia;', 'JAMENA');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `ID` int(11) NOT NULL,
  `IDEtudiant` varchar(10) NOT NULL,
  `IDTuteur` int(11) NOT NULL,
  `IDMatiere` varchar(10) NOT NULL,
  `IDNiveau` varchar(10) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `adresse` text NOT NULL,
  `attente` text NOT NULL,
  `accord` tinyint(1) NOT NULL,
  `en_attente` tinyint(1) NOT NULL,
  `tuteur_attente` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`ID`, `IDEtudiant`, `IDTuteur`, `IDMatiere`, `IDNiveau`, `startDate`, `endDate`, `adresse`, `attente`, `accord`, `en_attente`, `tuteur_attente`) VALUES
(1, 'SuZ7N8ORGd', 1, 'FRS', '2nd', '2018-08-30 08:00:00', '2018-08-30 16:00:00', 'Lot 02020/Y/GIT Kinshasa', 'Je voudrai apprendre les polynômes du second degré.', 1, 0, 0),
(2, 'DjztQAOc1y', 1, 'FRS', 'primary', '2018-09-18 18:25:00', '2018-09-18 18:30:00', 'Lot VA 32 CJ Tsiadana', 'ZKLDJGLDKJFLk', 1, 0, 1),
(3, 'DjztQAOc1y', 1, 'FRS', 'primary', '2018-09-19 11:30:00', '2018-09-19 15:30:00', 'Lot VA 32 CJ Tsiadana', 'Je veux apprendre les verbes du premier dégré', 1, 0, 1),
(4, 'DjztQAOc1y', 1, 'FRS', 'primary', '2018-09-05 07:00:00', '2018-09-05 12:00:00', 'Lot VA 32 CJ Tsiadana', 'Je veux apprendre les polynômes du 3eme degré', 0, 1, 0),
(5, 'DjztQAOc1y', 1, 'FRS', 'primary', '2018-09-05 07:00:00', '2018-09-05 12:00:00', 'Lot VA 32 CJ Tsiadana', 'Je veux apprendre les polynômes du 3eme degré', 0, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `stats`
--

CREATE TABLE `stats` (
  `ID` int(11) NOT NULL,
  `type` text NOT NULL,
  `params` text NOT NULL,
  `date_stat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tarif`
--

CREATE TABLE `tarif` (
  `ID` int(11) NOT NULL,
  `IDNiveau` varchar(10) NOT NULL,
  `IDMatiere` varchar(10) NOT NULL,
  `Min` int(11) NOT NULL,
  `Max` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tarif`
--

INSERT INTO `tarif` (`ID`, `IDNiveau`, `IDMatiere`, `Min`, `Max`) VALUES
(2, 'primary', 'FRS', 25000, 16000);

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `ID` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `fonction` text NOT NULL,
  `description` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photo` text NOT NULL,
  `tel` varchar(255) NOT NULL,
  `linkedInUrl` varchar(255) NOT NULL,
  `facebookUrl` varchar(255) NOT NULL,
  `skypeUrl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`ID`, `nom`, `prenom`, `fonction`, `description`, `email`, `photo`, `tel`, `linkedInUrl`, `facebookUrl`, `skypeUrl`) VALUES
(11, 'Achta', 'Elimi', 'CEO', 'Initiatrice de la plateforme', 'contact@taleta.net', '9429826e2d55de85c1569d9405c53d73.JPG', '', 'undefined', 'undefined', 'undefined'),
(12, 'Lily', 'Hortensia', 'CTO', 'Responsable Technique', 'contact@taleta.net', '63911a83d8e545478f96381f05d39190.JPG', '', 'undefined', 'undefined', 'undefined'),
(13, 'Caroline', '', 'Responsable Commercial', 'Responsable Commercial', 'contact@taleta.net', '756a68339193a9a5c74fec57edb7bc8e.JPG', '', 'undefined', 'undefined', 'undefined'),
(14, 'Nassima', '', 'Responsable Marketing', 'Responsable Marketing', 'contact@taleta.net', '50861bc8c360916c01f9b321ecdfeb51.JPG', '', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Structure de la table `tuteur`
--

CREATE TABLE `tuteur` (
  `ID` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `adresse` text NOT NULL,
  `photo` text NOT NULL,
  `description` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `validated` tinyint(1) NOT NULL,
  `date_naissance` date NOT NULL,
  `tel` varchar(255) NOT NULL,
  `IDPays` varchar(10) NOT NULL,
  `IDVille` varchar(10) NOT NULL,
  `IDQuartier` int(11) NOT NULL,
  `CV` text NOT NULL,
  `lettre_motivation` text NOT NULL,
  `CIN` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tuteur`
--

INSERT INTO `tuteur` (`ID`, `nom`, `prenom`, `adresse`, `photo`, `description`, `email`, `password`, `validated`, `date_naissance`, `tel`, `IDPays`, `IDVille`, `IDQuartier`, `CV`, `lettre_motivation`, `CIN`) VALUES
(1, 'AMPY', 'Feno', 'Lot 0394/Y/644 Moramanga', '', 'Etudiant en Informatique', 'kazekageoftheball@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 1, '1992-05-20', '0322342453', 'MADA', 'TANA', 0, '', '', ''),
(5, 'RAVAL', 'Siraj', 'Lot 249055/T/42904 Mitsinjo', '', 'Je suis un étudiant en machine learning', 'siraj@gmail.com', '2c39bc19b761ac36dc046245d1d47fe6', 1, '1987-06-09', '03256428484', 'MADA', 'DIEGO', 0, 'b7f68d3f501c3e4781cf7d9ebe00669c.pdf', '8b01b5a4daa6c9db09b14c5551c5216d.jpeg', 'e6afee10bbe9291ad74abf162869d9ba.jpg'),
(6, 'RAHARINTSOA', 'Lily', 'Ambomanarina', '', 'Je veux être tuteur ..', 'rahalily@gmail.com', '21fa08edd58c3901a3b40a9d8e95e723', 1, '1992-10-02', '0346802852', 'MADA', 'TANA', 0, '', '', ''),
(7, 'AIE', 'Lalala', 'Tanzanie', '', 'Méchant', 'kazekageoftheball@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 1, '2021-02-02', '0325684594', 'TCHAD', 'KELO', 0, 'd023790141bb6eb91a69d9eae3ed65ce.jpg', '53c73e44c406c19fb2bd23cf2b78347f.jpeg', '658e25b51e7b18e41142673eae3a41d7.jpg'),
(8, 'Idriss', 'Mahamat', 'Diguel riad rue 6666', '', 'Détenteur d\'une licence en droit public à l\'Université du Sahel de Dakar(Sénégal )\nAprès deux mois de stage au département juridique de la CBT (commercial bank Tchad) il y\'a plus de dix mois, je suis actuellement un cours d\'anglais (niveau 7) dans un établissements à N\'djamena \nDétenteur d\'une licence en droit public à l\'Université du Sahel de Dakar, après avoir suivi un stage de deux mois au département juridique de la CBT, je suis actuellement en chômage. \n', 'chagara90@gmail.com', '222e25ef2ded4639d48a005739704b71', 0, '1992-01-01', '66052205', 'TCHAD', 'JAMENA', 0, '224a87cfb21c619856011378d0c038af.jpg', '0d33793994615da58a4502f06ea96034.jpg', '98aff4bdead55bbf2bd4e7b8ad9403a4.jpg'),
(10, 'Rah', 'Lily', 'abena avenu ', '', 'ingénieure', 'rahalily@gmail.com', '098f6bcd4621d373cade4e832627b4f6', 0, '1993-10-06', '0325623569', 'TCHAD', 'JAMENA', 3, 'c54cbbc9d44a96403c46fd5777ca5df2.jpg', 'e7450d496fb0e9a7ef9ddebfa34117fe.jpg', 'c23381008bfc8112c3ebc30a16de65a0.png'),
(11, 'Njara', 'Jico', 'Abena', '', 'Je suis étudiant en 3 ème année en communication ', 'njarajico@gmail.com', '433c9679bb396ed0a30f1602f9559eae', 1, '0000-00-00', '03252635985', 'TCHAD', 'JAMENA', 3, '', '97291fdad4d73421c2b96136c6821994.jpg', '');

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `ID` varchar(10) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `IDPays` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`ID`, `nom`, `IDPays`) VALUES
('ABECHE', 'Abéché', 'TCHAD'),
('DIEGO', 'Antsiranana', 'MADA'),
('FAYA', 'Faya-Largeau', 'TCHAD'),
('JAMENA', 'N\'Djaména', 'TCHAD'),
('KELO', 'Kélo', 'TCHAD'),
('KOMRA', 'Koumra', 'TCHAD'),
('MONGO', 'Mongo', 'TCHAD'),
('Moundou', 'Moundou', 'TCHAD'),
('PALA', 'Pala', 'TCHAD'),
('SARH', 'Sarh', 'TCHAD'),
('TANA', 'Antananarive', 'MADA'),
('TIMAN', 'Am Timan', 'TCHAD');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDPays` (`IDPays`),
  ADD KEY `IDVille` (`IDVille`),
  ADD KEY `IDNiveau` (`IDNiveau`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDEtudiant` (`IDEtudiant`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `notation`
--
ALTER TABLE `notation`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDEvenement` (`IDEvenement`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `pricing`
--
ALTER TABLE `pricing`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDTuteur` (`IDTuteur`),
  ADD KEY `IDMatiere` (`IDMatiere`);

--
-- Index pour la table `quartier`
--
ALTER TABLE `quartier`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDVille` (`IDVille`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDTuteur` (`IDTuteur`),
  ADD KEY `IDEtudiant` (`IDEtudiant`),
  ADD KEY `IDMatiere` (`IDMatiere`);

--
-- Index pour la table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `tarif`
--
ALTER TABLE `tarif`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDMatiere` (`IDMatiere`),
  ADD KEY `IDNiveau` (`IDNiveau`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `tuteur`
--
ALTER TABLE `tuteur`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDVille` (`IDVille`),
  ADD KEY `IDPays` (`IDPays`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDPays` (`IDPays`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `notation`
--
ALTER TABLE `notation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pricing`
--
ALTER TABLE `pricing`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `quartier`
--
ALTER TABLE `quartier`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `stats`
--
ALTER TABLE `stats`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tarif`
--
ALTER TABLE `tarif`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `tuteur`
--
ALTER TABLE `tuteur`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `etudiant_ibfk_1` FOREIGN KEY (`IDNiveau`) REFERENCES `niveau` (`ID`),
  ADD CONSTRAINT `etudiant_ibfk_2` FOREIGN KEY (`IDPays`) REFERENCES `pays` (`ID`),
  ADD CONSTRAINT `etudiant_ibfk_3` FOREIGN KEY (`IDVille`) REFERENCES `ville` (`ID`);

--
-- Contraintes pour la table `notation`
--
ALTER TABLE `notation`
  ADD CONSTRAINT `notation_ibfk_1` FOREIGN KEY (`IDEvenement`) REFERENCES `evenement` (`ID`);

--
-- Contraintes pour la table `quartier`
--
ALTER TABLE `quartier`
  ADD CONSTRAINT `quartier_ibfk_1` FOREIGN KEY (`IDVille`) REFERENCES `ville` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`IDEtudiant`) REFERENCES `etudiant` (`ID`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`IDTuteur`) REFERENCES `tuteur` (`ID`),
  ADD CONSTRAINT `reservation_ibfk_3` FOREIGN KEY (`IDMatiere`) REFERENCES `matiere` (`ID`);

--
-- Contraintes pour la table `tarif`
--
ALTER TABLE `tarif`
  ADD CONSTRAINT `tarif_ibfk_1` FOREIGN KEY (`IDMatiere`) REFERENCES `matiere` (`ID`),
  ADD CONSTRAINT `tarif_ibfk_2` FOREIGN KEY (`IDNiveau`) REFERENCES `niveau` (`ID`);

--
-- Contraintes pour la table `tuteur`
--
ALTER TABLE `tuteur`
  ADD CONSTRAINT `tuteur_ibfk_1` FOREIGN KEY (`IDPays`) REFERENCES `pays` (`ID`),
  ADD CONSTRAINT `tuteur_ibfk_2` FOREIGN KEY (`IDVille`) REFERENCES `ville` (`ID`);

--
-- Contraintes pour la table `ville`
--
ALTER TABLE `ville`
  ADD CONSTRAINT `ville_ibfk_1` FOREIGN KEY (`IDPays`) REFERENCES `pays` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
