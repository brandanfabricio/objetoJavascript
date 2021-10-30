//@ts-check

export class UI {
    constructor(){}

    /**
     * 
     * @param {string} text pintar cuestionario 
     */
    showQuestion(text){
        const quistionTitle = document.getElementById('quistion');
        quistionTitle.innerText = text;
    }

        /**
         * 
         * @param {string[]} choices lista de obciones de pregunta 
         */
    showChoices(choices,callback){
        const ContenedorChoices = document.getElementById('choices');
        ContenedorChoices.innerHTML = '';
        for(let i = 0; i < choices.length; i++){
            const boton = document.createElement('button');
            boton.innerText = choices[i];
            boton.className = 'button';
            boton.addEventListener('click',()=>callback(choices[i]));
            ContenedorChoices.appendChild(boton);
        }

    }
    /**
     * 
     * @param {number} score respuestas correctas
     */
    showScores(score){
        const elementos = `
            <h1>Resultado</h1>
                <h2>${score}</h2>
        `;
        const resultado = document.getElementById("quiz");
        resultado.innerHTML = elementos;
    }
        /**
         * 
         * @param {number} indiceActual 
         * @param {number} total 
         */
    showProges(indiceActual,total){
        const elemento = document.getElementById('progress');
        elemento.innerHTML= `Pregunta ${indiceActual} de ${total}`

    }
}