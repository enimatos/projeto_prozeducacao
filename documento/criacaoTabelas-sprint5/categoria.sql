
 CREATE TABLE categoria (
 id_categoria SERIAL NOT NULL,
 nome_categoria varchar(20),
 PRIMARY KEY (id_categoria)
   );

INSERT INTO categoria (nome_categoria) VALUES
  ('saia'),
  ('calca'),
  ('shorts'),
  ('blusa'),
  ('casaco'),
  ('sueter'),
  ('macacao'),
  ('bolsa'),
  ('conjunto'),
  ('vestido');