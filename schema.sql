/*
 *   sudo mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

DROP DATABASE IF EXISTS `users`;
CREATE DATABASE `users`;
USE `users`;

CREATE TABLE `user_details` ( 
   `name` VARCHAR(256) NULL DEFAULT NULL,
   `email` VARCHAR(256) NULL DEFAULT NULL,
   `password` VARCHAR(256) NULL DEFAULT NULL,
   `line1` VARCHAR(256) NULL DEFAULT NULL,
   `line2` VARCHAR(256) NULL DEFAULT NULL,
   `city` VARCHAR(256) NULL DEFAULT NULL,
   `state` VARCHAR(256) NULL DEFAULT NULL,
   `zip` VARCHAR(256) NULL DEFAULT NULL,
   `card` VARCHAR(256) NULL DEFAULT NULL,
   `exp` VARCHAR(256) NULL DEFAULT NULL,
   `cvv` VARCHAR(256) NULL DEFAULT NULL 
 );