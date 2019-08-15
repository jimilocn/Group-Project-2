DROP DATABASE IF EXISTS dashboarddb;
CREATE DATABASE dashboarddb;


USE dashboarddb;
CREATE TABLE chat (
id INTEGER NOT NULL auto_increment,
user VARCHAR(50) NOT NULL,
text VARCHAR(250) NOT NULL,
created TIMESTAMP default now(),
updated TIMESTAMP default now() on update now(),
PRIMARY KEY (id)
);
