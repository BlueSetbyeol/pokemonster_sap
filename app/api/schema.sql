CREATE pokemonster;

USE pokemonster;

CREATE Table pokemon_to_exchange(
    id INT PRIMARY KEY auto increment NOT NULL,
    id_pokemon INT NOT NULL,
    name_pokemon VARCHAR(150) NOT NULL,
    age_pokemon INT
);

INSERT INTO pokemon_to_exchange (id, id_pokemon, name_pokemon, age_pokemon)
VALUE (1, 2, "bichou", 3),
(2, 157, "headStrong", 10),
(3, 58, "lovely", 6);
