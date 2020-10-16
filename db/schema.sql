CREATE DATABASE Plants_db;
USE Plants_db;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(320) NOT NULL,
  password varchar(255) NOT NULL,
  favorites varchar (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE favorites
(
	id int NOT NULL AUTO_INCREMENT,
	user_id int,
	plant_id int,
	PRIMARY KEY (id),
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(plant_id) REFERENCES plant(id)
);
ALTER TABLE plant
  MODIFY id int NOT NULL AUTO_INCREMENT,
  MODIFY Common_Name varchar(255) NOT NULL,
  MODIFY Scientific_Name varchar(255) NOT NULL,
  MODIFY Sunlight_Needs varchar (255) NOT NULL,
  MODIFY Moisture_Levels varchar (255) NOT NULL,
  MODIFY Humidity varchar (255) NOT NULL,
  MODIFY Poisonous boolean NOT NULL,
  MODIFY Maintenance_Level varchar (255) NOT NULL,
  MODIFY Price varchar (255) NOT NULL,
  ADD Special varchar (255),
  ADD img_path varchar (1024),
  ADD PRIMARY KEY (id)