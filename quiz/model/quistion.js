export class Question {

    /**
     * 
     * @param {string} text  Es la pregunta
     * @param {string[]} choices lista de respuesta
     * @param {string} answer respues correcta
     */
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;

    }
    /**
     * 
     * @param {string} choices pregunta a adivinar 
     * @returns {boolean}retorna true si es correcto
     */
    correctAnswer(choices) {
        return choices === this.answer;
    }
}

