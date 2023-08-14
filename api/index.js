const axios = require('axios');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/evolution-chain/:pokemonName', async (req, res) => {
  try {
    const pokemonName = req.params.pokemonName.toLowerCase();
    
    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = pokemonResponse.data;
    
    const speciesUrl = pokemonData.species.url;
    const speciesResponse = await axios.get(speciesUrl);
    const speciesData = speciesResponse.data;
    
    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    const evolutionChainData = evolutionChainResponse.data;
    
    function processEvolutionChain(chain) {
      const name = chain.species.name;
      const variations = chain.evolves_to.map(evolution => processEvolutionChain(evolution));
      
      return { name, variations };
    }
    
    const evolutionChain = processEvolutionChain(evolutionChainData.chain);
    
    res.json(evolutionChain);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
