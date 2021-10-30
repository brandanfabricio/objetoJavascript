// @ts-check
import { queston } from "./data/quistion.js";
import { Quiz } from "./model/Quiz.js";
import { UI } from "./model/UI.js";

/**
 * 
 * @param {Quiz} quiz objeto quiz 
 * @param {UI} ui  objeto ui
 */
const renderPage = (quiz,ui)=>{
    if(quiz.isEnd()){
        console.log(   quiz.score)
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuetionIndex().text)
        ui.showChoices(quiz.getQuetionIndex().choices, valor => 
        
        {quiz.guess(valor)
        
            renderPage(quiz,ui)
        
        })
        ui.showProges( quiz.questionIndex + 1 , queston.length)

    }
}

function main(){
    const quiz = new Quiz(queston)
    const ui = new UI();
    renderPage(quiz,ui)
}



main()