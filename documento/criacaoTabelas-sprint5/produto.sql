CREATE TABLE produto(
   id_produto SERIAL NOT NULL ,
   fk_id_categoria INT,
   nome_produto varchar(20) NOT NULL,
   preco FLOAT noT NULL,
   estoque INT,
   PRIMARY KEY (id_produto),
   CONSTRAINT fk_categoria FOREIGN KEY(fk_id_categoria) REFERENCES categoria (id_categoria)
  );
  
  INSERT INTO produto (fk_id_categoria, nome_produto, preco, estoque) VALUES
  (7,'macacao legal', 67.99, 456),
  (7,'macacao show', 98.33, 234),
  (4,'blusa ótima', 56.90, 456),
  (7,'macacao show', 98.33, 234),
  (10, 'vestido lindo', 98.56, 76);

CREATE TABLE detalhe_produto(
   id_detalhe_produto SERIAL NOT NULL ,
   fk_id_produto INT,
   cor varchar(10) NOT NULL,
   tamanho VARCHAR(2),
   PRIMARY KEY (id_detalhe_produto),
   CONSTRAINT fk_produto FOREIGN KEY(fk_id_produto) REFERENCES produto (id_produto)
  );
  
  INSERT INTO detalhe_produto (fk_id_produto, cor, tamanho) VALUES
  	(1,'azul', 'P'),
 	(2,'laranja', 'G2'),
 	(3,'branco', 'G3'),
 	(4,'verde', 'M'),
 	(5,'rosa', 'G');