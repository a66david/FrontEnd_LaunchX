const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombres = (innerText) =>{
    const nombre = document.getElementById("nombres");
    nombre.innerText = innerText;
}

const pokeType = (innerText) =>{
    const type = document.getElementById("type");
    type.innerText = innerText;
}


const pokeHp = (innerText) =>{
    const hp = document.getElementById("hp");
    hp.innerText = innerText;
}

const pokeAttack = (innerText) => {
    const Attack = document.getElementById ("attack");
    Attack.innerText=innerText;
}

const pokeDefense = (innerText) => {
    const defense = document.getElementById ("defense");
    defense.innerText= innerText;
}

const pokeSpecialAt = (innerText) =>{
    const SpecialAt = document.getElementById ("specialAtt");
    SpecialAt.innerText=innerText;
}

const pokeSpecialDef = (innerText)=>{
    const SpecialDf = document.getElementById("specialDef");
    SpecialDf.innerText = innerText;
}

const pokeSpeed = (innerText) =>{
    const speed = document.getElementById("speed");
    speed.innerText=innerText;
}

const pokeMov1 = (innerText) => {
    const mov1 = document.getElementById("mov1");
    mov1.innerText = innerText;
}

const pokeMov2 = (innerText) => {
    const mov2 = document.getElementById("mov2");
    mov2.innerText = innerText;
}


const pokeMov3 = (innerText) => {
    const mov3 = document.getElementById("mov3");
    mov3.innerText = innerText;
}

const pokeMov4 = (innerText) => {
    const mov4 = document.getElementById("mov4");
    mov4.innerText = innerText;
}

// funcion fetch
const fetchPokemon = () => 
     {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Images/pokebola.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {

            console.log(data);
            
            // Imagen del pokemon
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //console.log(pokeImg);

            
            
            //Nombre del pokemon
            let pokenombre = data.name;
                pokeNombres(pokenombre);
            
            //Tipo de pokemon
            let poketype = data.types[0].type.name;
                pokeType(poketype);
            

            //habilidades
                //hp
            let pokehp = data.stats[0].base_stat;
                pokeHp (pokehp);

                //attack
            let pokeat = data.stats[1].base_stat;
                pokeAttack (pokeat)

                //Defense
            let pokedefense = data.stats[2].base_stat;
                pokeDefense(pokedefense);

                //Special-Attack
            let pokespecialAt = data.stats[3].base_stat;
                pokeSpecialAt(pokespecialAt);

                //Special Defense
            let pokespecialDef = data.stats[4].base_stat;
                pokeSpecialDef(pokespecialDef);

                //Speed
            let pokespeed = data.stats[5].base_stat;
            pokeSpeed(pokespeed);

                //Movimientos
            
            let mov_1 = data.moves[0].move.name;
            pokeMov1(mov_1);

            let mov_2 = data.moves[1].move.name;
            pokeMov2(mov_2);

            let mov_3 = data.moves[2].move.name;
            pokeMov3(mov_3);

            let mov_4 = data.moves[3].move.name;
            pokeMov4(mov_4);
    });
}

