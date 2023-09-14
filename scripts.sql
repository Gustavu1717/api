create database infocdb;

use infocdb;

create table tb_senha(
	id_senha 	int primary key auto_increment,
    ds_email	varchar(200),
    ds_senha 	varchar(400) not null
);

select * from tb_senha;