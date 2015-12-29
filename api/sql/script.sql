DROP DATABASE IF EXISTS `meesa`;

CREATE DATABASE IF NOT EXISTS `meesa`;

CREATE TABLE `meesa`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `meesa`.`Message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(200) NOT NULL,
  `dateCreation` DATE NOT NULL,
  PRIMARY KEY (`id`));

INSERT into meesa.User(name, password)
values('admin', 'toto');

INSERT into meesa.Message(content, dateCreation)
values('hi', CURDATE());
