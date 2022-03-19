/*
Quando clicar no pokemon da listagem no canto terá que fechar o pokemon aberto e abrir o correspondente que foi clicado
Para isso vamos trabalhar com duas listagens 
1-Cartão Pokemon
2-Listagem

Precisamos criar duas váriaveis no JS para manipular dois elementos da tela

Precisamos trabalhar com um evento de clique criado pelo usuário 

Remover a classe aberto apenas do pokemon que está aberto

Ao clicar em um pekomon da listagem descobrimos qual é o ID dele para mostrar qual cartão ele é 

*/ 

const ListaSelecaoPokemon = document.querySelectorAll('.pokemon')
const PokemonCard = document.querySelectorAll('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(numero1 + numero2)

}

ListaSelecaoPokemon.forEach(pokemon =>{
  
    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = ('cartao-' + idPokemonSelecionado)
        
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto') 

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    } )
})