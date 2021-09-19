-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: mono-app-base
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(500) NOT NULL,
  `price` decimal(6,0) DEFAULT NULL,
  `modelId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_model_car_idx` (`modelId`),
  CONSTRAINT `fk_model_car` FOREIGN KEY (`modelId`) REFERENCES `model` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'x5','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMw5aESnCdfm4BHn5joHVCFiXB2ror9Skrsw&usqp=CAU',10000,1),(2,'a3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBXnsRvaVBLT6UW8OYirT7hlcbsnQ7uVTIw&usqp=CAU',20000,2),(3,'clio 2 rs','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPccVcFv_CmYoSb4puAfQ-wgxfoXAaYDSH3g&usqp=CAU',10000,3),(4,'Fabia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkged-MNDTwWi9gdSGs2iC4Sl1QmuSruF4Og&usqp=CAU',7000,4),(5,'e36','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxeTQuY0ZiJoI5GN4i6EOCETeWMtrAaef_A&usqp=CAU',3000,1),(8,'a4','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStErT0GoySJoNbsqcqtOrU6US61TFsBiikQA',5000,2);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-18 15:59:30
