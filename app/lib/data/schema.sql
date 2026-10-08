CREATE pokemonster;

USE pokemonster;

CREATE Table pokemon_to_exchange(
    id SERIAL PRIMARY KEY,
    id_pokemon INTEGER NOT NULL REFERENCES pokemons(id),
    name_pokemon TEXT NOT NULL,
    age_pokemon INTEGER
);

INSERT INTO pokemon_to_exchange (id_pokemon, name_pokemon, age_pokemon)
VALUE (2, "bichou", 3),
(157, "headStrong", 10),
(58, "lovely", 6);
