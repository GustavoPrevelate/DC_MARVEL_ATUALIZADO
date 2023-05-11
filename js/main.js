'use strict'

//  ****************************** Variaveis ******************************

const procurarPersonagem = document.querySelector('.procura__personagem')

// Variavel que com base no ID existente da API, retorna o nome do personagem
const listagemPersonagem = document.getElementById('resultado__filtragem__busca')

let todosDadosPersonagens;



//  ****************************** Função de exibixão ******************************

// Função que retorna a imagem e o nome do personagem pesquisado
const resultadoBuscaPersonagem = (dadosPersonagem) => {

    // retorno da imagem com base na pesquisa
    document.querySelector('.character__hero').innerHTML = `<img class = "character__img" src = "${dadosPersonagem.image.url}">`

    // retorno do nome do personagem com base na pesquisa
    document.querySelector('#nome__personagem__encontrado').textContent = dadosPersonagem.name
}

//  ****************************** Funções para pesquisa ******************************

// Função que retorna os valores dos personagens 
const getValorNoInput = async (event) => {

    event.preventDefault()

    let searchText = await procurarPersonagem.seach.value
    fetchTodosPersonagens(searchText)
  
};

// Função que recebe o click do mouse do usuário
procurarPersonagem.addEventListener('submit', getValorNoInput)


// Função que mostra o resultado da pesquisa com o id dos personagens entre 1 e 732
procurarPersonagem.seach.addEventListener('keyup', () => {

    if (procurarPersonagem.seach.value.length >= 1 & procurarPersonagem.seach.value.length <= 732) {
        fetchTodosPersonagens(procurarPersonagem.seach.value)
    } else {
        listagemPersonagem.innerHTML = ""
    }
})

// Função para filtragem do id, quando um usuário clicka no nome de um personagem, ele retorna o id do mesmo.
listagemPersonagem.addEventListener('click', (event) => {

    let filtragemID = event.target.dataset.id

    let buscaUnicoDado = todosDadosPersonagens.results.filter(unicoDadoFiltrado => {

        return filtragemID === unicoDadoFiltrado.id;

    })

    resultadoBuscaPersonagem(buscaUnicoDado[0])

    listagemPersonagem.innerHTML = ""

})

// Função para retornar informações de um personagem com base no personagem que foi selecionado no input
const fetchTodosPersonagens = async (searchText) => {

    let chaveAcessoAPI = '2135483929990724'
    let urlDados = `https://superheroapi.com/api.php/${chaveAcessoAPI}/search/${searchText}`
    let status = false;

    try {
        const response = await fetch(urlDados)

        todosDadosPersonagens = await response.json()

        if (todosDadosPersonagens.response == 'success') {
            showSearchList(todosDadosPersonagens.results)
        }
    } catch (error) {
        console.log(status)
    }

};

// Função para a criação do nome do personagem selecionado.
const showSearchList = (dadosJson) => {

    listagemPersonagem.innerHTML = ""
    console.log(dadosJson);
    

    dadosJson.forEach(tipoDado => {
        
        //  Função para retornar o tipo de elemento
        const elemento = document.createElement('div')
        elemento.classList.add('resultado__filtragem__busca-item')

        elemento.innerHTML = ` <p data-id = "${tipoDado.id}"> ${tipoDado.name}</p>`
        listagemPersonagem.appendChild(elemento)
        
    });
};

