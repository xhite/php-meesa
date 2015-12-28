DROP TABLE IF_EXISTS `meesa`.`User`;

DROP TABLE IF_EXISTS `meesa`.`Message`;

CREATE TABLE `meesa`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `meesa`.`Message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` INT NOT NULL,
  `dateCreation` DATE NOT NULL,
  PRIMARY KEY (`id`));

insert into meesa.User(name, password)
values('admin', 'toto',);

insert into meesa.Message(content, dateCreation)
values('hi', CURDATE());
