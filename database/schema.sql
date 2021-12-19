CREATE DATABASE magaluMsg;

USE magaluMsg;

Create table message_schedule(
	id int auto_increment not null primary key,
    messageDate varchar(85) not null,
    messageHour varchar(85) not null,
    clientName varchar(85) not null,
    clientEmail varchar(85) not null,
	clientCelphone varchar(85) not null,
    messageContent text,
    send_status boolean not null
);
