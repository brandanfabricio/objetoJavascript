// @ts-check

import { Question } from "./quistion.js";

export class Quiz{
        questionIndex = 0;
        score = 0;

        /**
         * 
         * @param {Question[]} question pregntas 
         */

    constructor(question){
        this.question = question;

    }


    
            /**
             * 
             * @returns {Question} 
             */
    getQuetionIndex(){
        return this.question[this.questionIndex]
    }
    
    isEnd(){
        return this.question.length === this.questionIndex;
    }
    
    
    /**
     * 
     * @param {string} answer 
     */
    guess(answer){
        console.log(answer)
        if(this.getQuetionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++
    }


}

    