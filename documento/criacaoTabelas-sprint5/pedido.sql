CREATE TABLE pagamento (
   id_pagamento SERIAL NOT NULL,
   modalidade VARCHAR(10),
   status VARCHAR(10) NOT NULL,
   PRIMARY KEY (id_pagamento)
);

INSERT INTO pagamento (modalidade, status) VALUES
  ('debito', 'Aguardando'),
  ('credito', 'Concluído'),
  ('boleto', 'Agurdando'),
  ('debito', 'Pendente'),
  ('credito', 'Cancelado');


CREATE TABLE pedido (
   id_pedido SERIAL NOT NULL,
   fk_id_cliente int,
   fk_id_produto int,
   fk_id_pagamento int,
   data_compra date,
   total FLOAT NOT NULL,
   PRIMARY KEY (id_pedido),
   CONSTRAINT fk_cliente FOREIGN KEY(fk_id_cliente) REFERENCES cliente (id_cliente),
   CONSTRAINT fk_produto FOREIGN KEY(fk_id_produto) REFERENCES produto (id_produto),
   CONSTRAINT fk_pagamento FOREIGN KEY(fk_id_pagamento) REFERENCES pagamento (id_pagamento)
);

INSERT INTO pedido (fk_id_cliente, fk_id_produto, fk_id_pagamento,data_compra, total) VALUES
  (2, 1, 1, '2023-06-15', 530.00),
  (3, 4, 2, '2023-05-15', 48.00),
  (1, 1, 3, '2023-02-20', 298.00),
  (2, 3, 2, '2023-06-15', 530.00),
  (4, 2, 2, '2023-06-15', 530.00);
  
  
 SELECT * from pedido
  
 