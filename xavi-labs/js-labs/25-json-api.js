function searchById(){
    const pokemonId = document.getElementById("pokemonId").value;

    fetch(`https://pokeapi.co/${pokemonId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
    });
}