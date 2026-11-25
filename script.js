// Exo 1 

const pokemonStock = ["Pikachu", "Dracofeu", "Bulbizarre", "Evoli", "Psykokwak"]
const pokemonPref = pokemonStock[1]

function afficherPokemon() {
    console.log(" Ton pokémon préféré est " + pokemonPref);
    // alert("Votre Pokémon préféré est " + pokemonPref); 
}

afficherPokemon();

// Exo 2

const pokeInvent = [pokemonStock];
console.log("Votre liste de Pokémon", pokeInvent);
 
// Exo 3

// const boutonPoke = document.querySelector("#btnPokemon");
// const resultatPoke = document.querySelector("#resultatPoke"); 

// boutonPoke.addEventListener("click", () => {
//     resultatPoke.textContent = "Ton pokémon préféré est " + pokemonPref;
// })

const boutonPoke = document.querySelector("#btnPokemon");
const resultatPokeDiv = document.querySelector("#resultatPoke"); 

boutonPoke.addEventListener("click", async () => {
    try {
        // 1. Fetch the data from the API
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");
        
        // // 2. Check if the request was successful
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // 3. Convert the response into usable JSON data
        const data = await response.json();
        
        // 4. Log the result and display something on the page
        console.log(data);
        resultatPokeDiv.textContent = `Pokémon: ${data.name}, Height: ${data.height}`;
        
        return data;
    } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
    }
});

