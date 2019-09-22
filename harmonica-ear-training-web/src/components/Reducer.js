
import {note_file_map, quizQuestionSet, bgColors} from './NoteMediaFiles';



const initialState = {
    showNoteIdentifyPractice: false,
    showNoteIdentifyQuiz: false,

    currentSelectedNote:'',
    playing:false,

    audio:null,

    quiz:{
        currentQuestion:'',
            questions:[],
            totalQuestions:4,
            correctAnswers:0,
            questionsattended:0,
            quizStarted:false,
            quizCompleted:false,
            backgroundColour:{},
            enableNext:false,
            currentQuestionAttempted:false
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case 'SHOW_NOTE_IDENTIFY_PRACTICE':
            return {
                ...state,
                showNoteIdentifyPractice:true
            };
        case 'SHOW_NOTE_IDENTIFY_QUIZ':
            return {
                ...state,
                showNoteIdentifyQuiz:true
            };
        case 'CLOSE_NOTE_IDENTIFY_PRACTICE':
            return {
                ...state,
                showNoteIdentifyPractice:false
            };
        case 'CLOSE_NOTE_IDENTIFY_QUIZ':
            return {
                ...state,
                showNoteIdentifyQuiz:false
            };

        case 'PLAY_NOTE':
            if(isPlaying(state.audio)){
                state.audio.pause();
            }
            const audio = new Audio(note_file_map.get(action.note));
            audio.load();
            console.log(audio);
            audio.play();
            return {
                ...state,
                audio:audio
            }

        case 'QUIZ_NOTE_IDENTIFICATION_COMPLTED':
            return {
                ...state,
                quiz:{
                    ...state.quiz,
                    quizCompleted:true
                }
            }
        case 'QUIZ_NOTE_IDENTIFICATION_TAKE_TURN':
            return {
                ...state,
                quiz:{
                    ...state.quiz,
                    currentQuestion : getRandonQuestion(),            
                    enableNext:false,
                    backgroundColour:{},
                    currentQuestionAttempted:false,
                    questionsattended:action.questionsattended,
                    quizCompleted:action.questionsattended === state.quiz.totalQuestions ? true:false 
                }
            };
        case 'QUIZ_NOTE_IDENTIFICATION_PLAY_QUES_NOTE':
            if(!state.quiz.quizCompleted){
                if(isPlaying(state.audio)){
                    state.audio.pause();
                }
                const audio1 = new Audio(state.quiz.currentQuestion.file);
                audio1.load();
                console.log(audio1);
                audio1.play();
                return {
                    ...state,
                    audio:audio1
                };
            }else{
                return{
                    ...state
                }
            }
                
        case 'QUIZ_NOTE_IDENTIFICATION_ANS_SELECTED':
                if(action.answerSelected === state.quiz.currentQuestion.note){
                    console.log("Correct Answer selected");
                    return {
                        ...state,
                        quiz:{
                            ...state.quiz,
                            backgroundColour: {backgroundColor: bgColors.Green},
                            currentQuestionAttempted:true,
                            enableNext:true,
                            correctAnswers: !state.quiz.currentQuestionAttempted?state.quiz.correctAnswers+1:state.quiz.correctAnswers

                        }
                    }
                            
                }else{
                    console.log("Wrong answer selected. Try again");
                    return {
                        ...state,
                        quiz:{
                            ...state.quiz,
                            backgroundColour: {backgroundColor: bgColors.Red},
                            currentQuestionAttempted:true

                        }
                    }
                    
                }


        default:
                return {
                    ...state
                }
    }
    
}

const isPlaying  = (audio) => {
    return audio
        && audio.currentTime > 0
        && !audio.paused
        && !audio.ended
        && audio.readyState > 2;
}
  

const getRandonQuestion = () => {
    var min = 1;
    var max = quizQuestionSet.list.length;
    var rand =  min + (Math.random() * (max-min));

    var question = quizQuestionSet.list[Math.floor(rand)];
    return question;
}


export default reducer;