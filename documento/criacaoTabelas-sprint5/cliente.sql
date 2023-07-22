CREATE TABLE cliente (
  id_cliente SERIAL NOT NULL,
  nome VARCHAR(30) NOT NULL UNIQUE,
  cpf VARCHAR(11)  NOT NULL,
  email VARCHAR(30) not null,
  dtnasc DATE,
  PRIMARY KEY (id_cliente),
);

INSERT INTO cliente ( nome, cpf, dtnasc,email) VALUES
  ('elaine', '12345678765', '1980-06-10', 'elaine@gmail.com'),
  ('derick', '87493828374', '2000-03-20','deda@gmail.com'),
  ('maria', '84958374565','1967-02-15', 'maria@gmail.com'),
  ('pedro', '30495893049', '1978-04-12','pedro@gmail.com'),
  ('rita', '59495893049', '1991-08-01','rita@gmail.com');
  
 SELECT * from cliente
 
 CREATE TABLE tipo_pagto (
   id_tipo_pagto SERIAL NOT NULL,
   fk_id_cliente INT,
   tipo varchar(10),
   PRIMARY KEY (id_tipo_pagto),
   CONSTRAINT fk_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente (id_cliente)
   );
   
  INSERT INTO tipo_pagto (fk_id_cliente, tipo) VALUES
  (2,'credito'),
  (3,'boleto'),
  (5'debito');
  

SELECT * from tipo_pagto
  
CREATE TABLE endereco(
   id_endereco SERIAL NOT NULL ,
   fk_id_cliente INT,
   logradouro varchar(50) NOT NULL,
   numero INT NOT NULL,
   complemento Varchar(15),
   bairro VARCHAR(15) NOT NULL,
   cidade VARCHAR(20) NOT NULL,
   estado VARCHAR(2) NOT NULL,
   cep VARCHAR(8) NOT NULL,
   PRIMARY KEY (id_endereco),
   CONSTRAINT fk_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente (id_cliente)
  );
  
  INSERT INTO endereco (fk_id_cliente, logradouro, numero, complemento, bairro, cidade, estado, cep) VALUES
  (1 ,'Rua 1', 34, 'casa 4', 'Jardim A', 'São Clemente', 'MG','09898787'),
  (2 ,'Abenida X', 76, '', 'Vila Clara', 'Germano', 'MT','87658787'),
  (3 ,'Rua Clara dos Montes', 356, 'ap 14 C', 'Jardim 1', 'João Batista', 'RJ','12987080'),
  (4 ,'Rua Azul', 987, 'viela 2', 'Jardim Vermelho', 'Thiago Blabla', 'SP','09876543'),
  (5 ,'Rua Verde', 30, '', 'Vila Azul', 'Servidão', 'SP','12345678'),
  (4 ,'Avenida Vermelha', 980, 'ap 123 A', 'Jardim Duque', 'Sempre Grato', 'SP','09485984');
  
  SELECT * from endereco


CREATE TABLE telefone(
   id_telefone SERIAL NOT NULL ,
   fk_id_cliente INT,
   numero varchar(11) NOT NULL,
   PRIMARY KEY (id_telefone),
   CONSTRAINT fk_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente (id_cliente)
  );


INSERT INTO telefone (fk_id_cliente, numero) VALUES
  (1 ,'99874857676'),
  (2 ,'88987678765'),
  (1 ,'98876756787'),
  (3 ,'87987678765'),
  (4 ,'11987876789'),
  (5 ,'22789876567');
