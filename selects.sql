create database animeflix;
use animeflix;

CREATE TABLE pessoa (
	id_pessoa INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT(3),
    email VARCHAR(50)
);

CREATE TABLE anime (
	id_anime INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50),
    genero VARCHAR(20),
    ani_lancamento INT(4)
);

CREATE TABLE assiste (
	id_pessoa INT,
    id_anime INT,
    data_assistiu DATE,
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(id_pessoa),
    FOREIGN KEY (id_anime) REFERENCES anime(id_anime),
    PRIMARY KEY (id_pessoa, id_anime)
);

alter table anime 
rename column ani_lancamento to ano_lancamento;

INSERT INTO pessoa (id_pessoa, nome, idade, email) VALUES
(1, 'Alice', 20, 'alice@exemple.com'),
(2, 'Bruno', 25, 'bruno@exemple.com'),
(3, 'Carla', 22, 'carla@exemple.com'),
(4, 'Diego', 30, 'diego@exemple.com'),
(5, 'Evelyn', 27, 'evelyn@exemple.com');

INSERT INTO anime (id_anime, titulo, genero, ano_lancamento) VALUES
(1, 'Naruto', 'Ação', 2002),
(2, 'One Piece', 'Aventura', 1999),
(3, 'Attack on Titan', 'Ação', 2013),
(4, 'My Hero Academia', 'Ação', 2016),
(5, 'Death Note', 'Suspense', 2006);

INSERT INTO assiste (id_pessoa, id_anime, data_assistiu) VALUES
(1, 1, '2024-01-01'),
(1, 2, '2024-02-15'),
(2, 3, '2024-03-10'),
(3, 1, '2024-04-20'),
(4, 4, '2024-05-01'),
(4, 2, '2024-06-18'),
(5, 5, '2024-07-22'),
(2, 1, '2024-08-10'),
(3, 5, '2024-09-03'),
(5, 3, '2024-10-12');

SELECT email FROM pessoa;

SELECT email, idade FROM pessoa
WHERE idade > 20;

SELECT pessoa.nome
FROM pessoa
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE anime.titulo = 'One Piece';

/* 1. Exiba todos os nomes das pessoas cadastradas 
 a. Use SELECT e especifique a coluna nome na tabela pessoa */

SELECT nome FROM pessoa;

/* 2. Liste os títulos de todos os animes disponíveis
 a. Use SELECT e especifique a conula título na tabela anime */
 
SELECT titulo FROM anime;

/* 3. Encontre todos os animes do gênero "Ação"
 a. Use SELECT  com a cláusula WHERE para filtrar por gênero = 'Ação' na tabela anime */
 
SELECT * FROM anime WHERE genero = 'Ação';

/* 4. Mostre o nome e a idade das pessoas com mais de 25 anos
 a. Use SELECT e a cláusula WHERE para definir a condição idade > 25 na tabela pessoa */
 
SELECT * FROM pessoa WHERE idade > 25;

/* 5. Liste os animes que foram lançados antes de 2010
 a. Use SELECT e WHERE para filtrar ano_lancamento < 2010 na tabela anime */
 
SELECT * FROM anime WHERE ano_lancamento < 2010;

/* 6. Encontre o email de todas as pessoas que assistiram o anime "Naruto"
 a. Use JOIN entre pessoa, assiste e anime, com WHERE titulo = 'Naruto' para filtrar */
 
SELECT pessoa.nome, anime.titulo
FROM pessoa 
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE anime.titulo = 'Naruto';

/* 7. Mostre o nome das pessoas que assistram "One Piece"
 a. Use JOIN entre pessoa, assiste e anime com WHERE titulo = 'One Piece' */
 
SELECT pessoa.nome
FROM pessoa 
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa 
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE anime.titulo = 'One Piece';

/* 8. Exiba a data em que "Carla" assistiu ao anime "Death Note"
 a. Use JOIN entre pessoa, assiste e anime, e WHERE para filtrar por nome = 'Carla' e titulo = 'Death Note' */
 
SELECT pessoa.nome, anime.titulo
FROM pessoa 
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE nome = 'Carla' AND titulo = 'Death Note';

/* 9. Liste todos os animes assistidos pela pessoa "Diego"
 a. Use JOIN entre pessoa, assiste e anime, e WHERE para filtrar nome = 'Diego' */
 
SELECT anime.titulo /* O resultado final da query */
FROM pessoa /* Buscando primeira tabela para comparação */
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa /* Selecionando os atributos a serem comparados entre as tabelas */
JOIN anime ON assiste.id_anime = anime.id_anime /* Selecionando a terceira tabela, definindo quais atributos serão comparados com a segunda tabela */
WHERE nome = 'Diego'; /* Filtrando os resultados com uma condição final */

/* 10. Mostre o título dos animes que foram assistids em 2024
 a. Use JOIN entre animes e assiste, e WHERE para filtrar YEAR(data_assistiu) = 2024 */
 
SELECT anime.titulo
FROM anime 
JOIN assiste ON assiste.id_anime = anime.id_anime
WHERE YEAR(data_assistiu) = '2024';

/* 11. Encontre o nome e o anime assistido pela pessoa mais jovem
 a. Use JOIN entre pessoa, assiste e anime e ordene por idade ASC com LIMIT 1 */
 
SELECT pessoa.nome, anime.titulo
FROM pessoa
JOIN assiste ON pessoa.id_pessoa = assiste.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
ORDER BY pessoa.idade ASC LIMIT 1;

/* 12. Exiba o titulo e ano de lançamentode todos os animes que "Alice" assistiu
 a. Use JOIN entre pessoa, assiste e anime, e WHERE para nome = 'Alice' */
 
SELECT anime.titulo
FROM pessoa
JOIN assiste ON assiste.id_pessoa = pessoa.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE nome = 'Alice';
 
/* 13. Liste as pessoas que assistiram algum anime de "Aventura"
 a. Use JOIN entre pessoa, assiste e anime, com WHERE genero = 'Aventura' */
 
SELECT pessoa.nome
FROM pessoa
JOIN assiste ON assiste.id_pessoa = pessoa.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE genero = 'Aventura';

/* 14. Mostre o número total de animes assistidos por "Evelyn"
 a. Use JOIN entre pessoa e assiste e filtre por nome = 'Evelyn' com COUNT(id_anime) */
 
SELECT COUNT(anime.id_anime)
FROM anime
JOIN assiste ON assiste.id_anime = anime.id_anime
JOIN pessoa ON pessoa.id_pessoa = assiste.id_pessoa
WHERE pessoa.nome = 'Evelyn';

/* 15. Liste o nome das pessoas que assistiram ao menos um anime de "Suspense"
 a. Use JOIN entre pessoa, assiste e anime com WHERE genero = 'Suspense' */
 
SELECT pessoa.nome
FROM pessoa
JOIN assiste ON assiste.id_pessoa = pessoa.id_pessoa
JOIN anime ON anime.id_anime = assiste.id_anime
WHERE anime.genero = "Suspense";

/* 16. Encontre o título do anime que "Bruno" assistiu mais recentemente
 a. Use JOIN entre pessoa, assiste e anime, e filtre por nome = 'Bruno' */
 
SELECT anime.titulo
FROM anime
JOIN assiste ON assiste.id_anime = anime.id_anime
JOIN pessoa ON assiste.id_pessoa = pessoa.id_pessoa
ORDER BY assiste.id_pessoa = "2" ASC LIMIT 1;

/* 17. Liste os email das pessoas que assistiram a um anime lançado em 2016
 a. Use JOIN entre pessoa, assiste e anime, e filtre por ano_lancamento = 2016 */
 
SELECT pessoa.email
FROM pessoa
JOIN assiste ON assiste.id_pessoa = pessoa.id_pessoa
JOIN anime ON assiste.id_anime = anime.id_anime
WHERE anime.ano_lancamento = 2016;

/* 18. Mostre todas as datas em que "Diego" assistiu a algum anime
 a. Use o JOIN entre pessoa e assiste, e filtre por nome = 'Diego' */

SELECT assiste.data_assistiu
FROM assiste
JOIN pessoa ON pessoa.id_pessoa = assiste.id_pessoa
WHERE pessoa.nome = 'Diego';