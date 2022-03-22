const pokeURL = "https://pokeapi.co/api/v2/pokemon/";
const pokeName = document.getElementById ('pokeName');
const buscarPokemon = document.getElementById ('buscarPokemon');
const eliminarPokemon = document.getElementById ('eliminarPokemon');
const pokeDatos = document.getElementById ('pokeDatos');



buscarPokemon.addEventListener ('click', insertPokemon);
eliminarPokemon.addEventListener ('click', deletePokemon);



function deletePokemon() {
    let allpokemon = pokeDatos.childNodes;
    allpokemon = Array.from(allpokemon);

    allpokemon.forEach(pokemon =>{
        pokemon.remove(pokemon);
    })
    
}
function insertPokemon (){
    window.fetch (`${pokeURL}${pokeName.value.toLowerCase()}`)
    .then ((response) =>{
        if (response === "404"){
            alert("El pokemon que buscas no se encuntra, intentalo de nuevo");

        }else{
            return response.json();
        }
    }).then ((responseJSON) =>{
        const allItems = [];

        const result = [];

        for (let pokeInfo in responseJSON){
            result.push ([pokeInfo, responseJSON[pokeInfo]])

        }
        console.table(result);

        //Imganen del pokemon
        const pokeImage = document.createElement ("img");
        pokeImage.src = result[14][1].front_default;

        // Momnbre de pokemon
        const pokemonName = document.createElement ("h2");
        pokemonName.innerText = `Nombre: ${result[10][1]} ID: ${result[6][1]}`;

        //Tipo de pokemon
        const poketype = document.createElement("h2");
        poketype.innerHTML = `Tipo: ${result[16][1][0].type.name}`;


        // Estadisticas del pokemon
        const pokeHp = document.createElement("p");
        pokeHp.innerHTML = `HP: ${result[15][1][0].base_stat}`;

        const pokeAttack = document.createElement("p");
        pokeAttack.innerHTML = `Attack: ${result[15][1][1].base_stat}`;

        const pokeDefense = document.createElement("p");
        pokeDefense.innerHTML = `Defense: ${result[15][1][2].base_stat}`;
        
        const pokeSpecialAt = document.createElement("p");
        pokeSpecialAt.innerHTML = `Special Attack: ${result[15][1][3].base_stat}`;

        const pokeSpecialDef = document.createElement("p");
        pokeSpecialDef.innerHTML = `Special Defese: ${result[15][1][4].base_stat}`;

        const pokeSpeed = document.createElement("p");
        pokeSpeed.innerHTML = `Speed: ${result[15][1][5].base_stat}`;

        //Contendedor de los elementos

        const container = document.createElement ('div');
        container.append (pokeImage, pokemonName, poketype, pokeHp, 
            pokeAttack, pokeDefense, pokeSpecialAt, pokeSpecialDef, pokeSpeed);

         allItems.push(container);
         
         pokeDatos.append(...allItems);

    })
}


