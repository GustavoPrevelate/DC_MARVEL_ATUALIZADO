'use strict'

class cardherois extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open' });
        this.nome = 'Nome Heroi'
        this.biografiaheroi = 'Biografia herói'
        this.textobiografiaheroi = 'Texto da biografia do herói'
        this.feitosheroi = 'Feitos do herói'
        this.textofeitosheroi = 'Texto dos feitos do herói'
        this.foto = null
        this.cor = 'cardheroi'
        this.backgroundcor = 'corbackground'

    }
    static get observedAttributes(){
        return [
            'nome', 
            'biografiaheroi', 
            'textobiografiaheroi', 
            'feitosheroi', 
            'textofeitosheroi', 
            'foto', 
            'cor', 
            'backgroundcor'
        ]
    }
    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }
    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles(){
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .card{
            width: 600px;
            height: 600px;
            display: grid;
            grid-template-rows: 20% 60% 20%;
            place-items: center;
            background-color: ${this.cor};
        }
        .card__text{
            color: #ffffff;
            font-size: 2.2rem;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
        }
        .card__image{
            height: 300px;
            width: 300px;
            border-radius: 50%;
            background-color: yellow;
            background-image: url(${this.foto});
            background-size: cover;
        }
        .container__herois{
            display: flex;
            grid-area: cardheroi;
            height: 866px;
            width: 1920px;
            flex-direction: rows;
            gap: 120px;
            padding-top: 80px;
            padding-left: 80px;
            background-color: ${this.backgroundcor};
        }
        .alinhamento__info__herois{
            display: grid;
            grid-template-areas:
            "cardheroi biografia"
            "cardheroi textobiografia"
            "cardheroi feitos"
            "cardheroi textofeitos";
            flex-direction: column;
            justify-content: center;
            height: 750px;
            width: 1000px;
            font-weight: 900px;
        }
        .biografia__heroi{
            grid-area: biografia;
            font-size: 3rem;
            font-weight: bold;
            font-weight: 900px;
            font-family: 'Roboto', sans-serif;
            color: ${this.cor};
        }
        .texto__bibliografia__heroi{
            grid-area: textobiografia;
            font-size: 2rem;
            font-weight: 900px;
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
        }
        .feitos__heroi{
            grid-area: feitos;
            font-size: 3rem;
            font-weight: bold;
            font-weight: 900px;
            font-family: 'Roboto', sans-serif;
            color: ${this.cor};
        }
        .texto__feitos__heroi{
            grid-area: textofeitos;
            font-size: 2rem;
            font-weight: 900px;
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
        }

        @media (max-width: 600px){
            .card{
                width: 500px;
                height: 500px;
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
                background-color: ${this.cor};
            }
            .card__text{
                color: #ffffff;
                font-size: 2.2rem;
                font-weight: bold;
                font-family: 'Roboto', sans-serif;
            }
            .card__image{
                height: 300px;
                width: 300px;
                border-radius: 50%;
                background-color: yellow;
                background-image: url(${this.foto});
                background-size: cover;
            }
            .container__herois{
                display: flex;
                grid-area: cardheroi;
                height: 2200px;
                width: 600px;
                flex-direction: column;
                justify-content: center;
                aling-items: center;
                padding-top: 80px;
                padding-left: 80px;
                background-color: ${this.backgroundcor};
            }
            .alinhamento__info__herois{
                display: grid;
                grid-template-areas:
                "cardheroi"
                "biografia"
                "textobiografia"
                "feitos"
                "textofeitos";
                flex-direction: column;
                justify-content: center;
                height: 1300px;
                width: 450px;
                font-weight: 900px;
            }
            .biografia__heroi{
                grid-area: biografia;
                font-size: 3rem;
                font-weight: bold;
                font-weight: 900px;
                font-family: 'Roboto', sans-serif;
                color: ${this.cor};
                width: 200px;
            }
            .texto__bibliografia__heroi{
                grid-area: textobiografia;
                font-size: 2rem;
                font-weight: 900px;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
                height: 500px;
                width: 500px;
            }
            .feitos__heroi{
                grid-area: feitos;
                font-size: 3rem;
                font-weight: bold;
                font-weight: 900px;
                font-family: 'Roboto', sans-serif;
                color: ${this.cor};
                width: 200px;
            }
            .texto__feitos__heroi{
                grid-area: textofeitos;
                font-size: 2rem;
                font-weight: 900px;
                font-family: 'Roboto', sans-serif;
                color: #ffffff;
            }
            
            @media (max-width: 375px){
                .card{
                    width: 275px;
                    height: 600px;
                    display: grid;
                    grid-template-rows: 20% 60% 20%;
                    place-items: center;
                    
                    background-color: ${this.cor};
                }
                .card__text{
                    color: #ffffff;
                    font-size: 2.2rem;
                    font-weight: bold;
                    font-family: 'Roboto', sans-serif;
                }
                .card__image{
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                    background-color: yellow;
                    background-image: url(${this.foto});
                    background-size: cover;
                }
                .container__herois{
                    display: flex;
                    grid-area: cardheroi;
                    height: 3500px;
                    width: 375px;
                    flex-direction: column;
                    padding-top: 80px;
                    background-color: ${this.backgroundcor};
                }
                .alinhamento__info__herois{
                    display: grid;
                    grid-template-areas:
                    "cardheroi"
                    "biografia"
                    "textobiografia"
                    "feitos"
                    "textofeitos";
                    flex-direction: column;
                    justify-content: center;
                    height: 2200px;
                    width: 275px;
                    font-weight: 900px;
                }
                .biografia__heroi{
                    grid-area: biografia;
                    font-size: 3rem;
                    font-weight: bold;
                    font-weight: 900px;
                    font-family: 'Roboto', sans-serif;
                    color: ${this.cor};
                    width: 200px;
                    max-height: 60px;
                }
                .texto__bibliografia__heroi{
                    grid-area: textobiografia;
                    font-size: 2rem;
                    font-weight: 900px;
                    font-family: 'Roboto', sans-serif;
                    color: #ffffff;
                    height: 960px;
                    width: 275px;
                }
                .feitos__heroi{
                    grid-area: feitos;
                    font-size: 3rem;
                    font-weight: bold;
                    font-weight: 900px;
                    font-family: 'Roboto', sans-serif;
                    color: ${this.cor};
                    width: 200px;
                    max-height: 60px;
                }
                .texto__feitos__heroi{
                    grid-area: textofeitos;
                    font-size: 2rem;
                    font-weight: 900px;
                    font-family: 'Roboto', sans-serif;
                    color: #ffffff;
                }
        }
        `
        return css
    }
    component(){
        const card = document.createElement('div')
        card.classList.add('card')

        const nomeHeroi = document.createElement('div')
        nomeHeroi.classList.add('card__text')
        nomeHeroi.textContent = this.nome;

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const tituloHeroi = document.createElement('div')
        tituloHeroi.classList.add('card__text')
        tituloHeroi.textContent = 'Herói Favorito'

        const containerHeroi = document.createElement('div')
        containerHeroi.classList.add('container__herois')

        const alinhamentoInfoHerois = document.createElement('div')
        alinhamentoInfoHerois.classList.add('alinhamento__info__herois')

        const biografiaHeroi = document.createElement('div')
        biografiaHeroi.classList.add('biografia__heroi')
        biografiaHeroi.textContent = this.biografiaheroi;

        const textoBiografiaHeroi = document.createElement('div')
        textoBiografiaHeroi.classList.add('texto__bibliografia__heroi')
        textoBiografiaHeroi.textContent = this.textobiografiaheroi;

        const feitosHeroi = document.createElement('div')
        feitosHeroi.classList.add('feitos__heroi')
        feitosHeroi.textContent = this.feitosheroi;

        const textoFeitosHeroi = document.createElement('div')
        textoFeitosHeroi.classList.add('texto__feitos__heroi')
        textoFeitosHeroi.textContent = this.textofeitosheroi;

        card.append (nomeHeroi, imagem, tituloHeroi)
        alinhamentoInfoHerois.append (biografiaHeroi, textoBiografiaHeroi, feitosHeroi, textoFeitosHeroi)
        containerHeroi.append (card, alinhamentoInfoHerois)
        
        return containerHeroi
    }
}

customElements.define('card-herois', cardherois)