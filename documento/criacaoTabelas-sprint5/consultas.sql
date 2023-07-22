SELECT categoria.nome_categoria, produto.nome_produto, produto.estoque

FROM
	categoria
    
INNER JOIN
	produto
ON
	categoria.id_categoria = produto.fk_id_categoria


SELECT cliente.nome, cliente.email, endereco.cidade

FROM
	cliente
    
LEFT JOIN
	endereco
ON
	endereco.fk_id_cliente = cliente.id_cliente