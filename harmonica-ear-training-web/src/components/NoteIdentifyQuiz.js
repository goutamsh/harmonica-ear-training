import React from 'react';
import {note_file_map, quizQuestionSet} from './NoteMediaFiles';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

class NoteIdentifyQuiz extends React.Component{

    
    constructor(){
        super();
        this.state = {
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
        };
        this.playQuestionNote = this.playQuestionNote.bind(this);
        // this.playAudio = this.playAudio.bind(this);
        this.isPlaying = this.isPlaying.bind(this);
        this.takeTurn = this.takeTurn.bind(this)
;        this.audio = null;

        this.checkAnswerSelected = this.checkAnswerSelected.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        
    }

    componentDidMount(){
        console.log("Before takeTurn"+this.state.totalQuestions);


        this.setState({ quizStarted:true});
        this.takeTurn();
        
        console.log("After takeTurn"+this.state);

    }
    takeTurn(){
        console.log("in takeTurn()" +this.state.questionsattended);
        var min = 1;
        var max = quizQuestionSet.list.length;
        var rand =  min + (Math.random() * (max-min));
    
        var question = quizQuestionSet.list[Math.floor(rand)];
        this.setState(
            {
                currentQuestion : question, 
           
            enableNext:false,
            backgroundColour:{},
            currentQuestionAttempted:false
        }, ()=> {console.log("Curret Question set to "+this.state.currentQuestion.note);
        
        
        this.playQuestionNote()});
        
        

        console.log(this.state);

    }
    playQuestionNote(){
     
        if(this.isPlaying()){
            this.audio.pause();
        }
        this.audio = new Audio(this.state.currentQuestion.file);

        this.audio.load();
            console.log(this.audio);
            this.audio.play();          

    }
    isPlaying () {
        return this.audio
            && this.audio.currentTime > 0
            && !this.audio.paused
            && !this.audio.ended
            && this.audio.readyState > 2;
    }

    checkAnswerSelected(answerSelected){

        if(answerSelected == this.state.currentQuestion.note){
            console.log("Correct Answer selected");
            if(!this.state.currentQuestionAttempted){
                this.setState({correctAnswers: (this.state.correctAnswers+1)});
            }
            this.setState({               
                backgroundColour: {backgroundColor: bgColors.Green},
                enableNext:true
            });
            
        
            
            
        }else{
            console.log("Wrong answer selected. Try again");
            this.setState({backgroundColour: {backgroundColor: bgColors.Red}});
        }
        this.setState({currentQuestionAttempted:true});
        
    }

    // playAudio() {
    //     const audioPromise = this.audio.play()
    //     if (audioPromise !== undefined) {
    //       audioPromise
    //         .then(_ => {
    //           // autoplay started
    //         })
    //         .catch(err => {
    //           // catch dom exception
    //           console.info(err)
    //         })
    //     }
    // }

    handleNextButton(){
        this.setState({questionsattended:this.state.questionsattended+1});
        if(this.state.questionsattended === this.state.totalQuestions){
            this.setState({quizCompleted:true});
            
        }
        this.takeTurn();
    }
    render(){
        if(!this.state.quizCompleted){

            return (
                <div style={this.state.backgroundColour}>
                    <h5>Question {this.state.questionsattended+1}</h5>
                    <Button onClick={this.playQuestionNote}>QuestionNote</Button>
    
                    Answers:
    
                    <Table borderless>
                    <tbody>
                            <tr>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('sa')}>Sa</button>
                                </td>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('re')}>Re</button>
                                </td>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('ga')}>Ga</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('ma')}>Ma</button>
                                </td>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('pa')}>Pa</button>
                                </td>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('dha')}>Dha</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('ni')}>Ni</button>
                                </td>
                                <td>
                                    <button onClick={() => this.checkAnswerSelected('ss')}>Sa'</button>
                                </td>
                                
                            </tr>
                    </tbody>                    
                </Table>
    
                    
                <Button disabled={!this.state.enableNext} onClick={this.handleNextButton}>Next</Button>
                
            </div>
            );
        }else{
            return (
            <div>
                <h3>Quiz Completed ..Congratulations !!</h3>
                <br/>
                <h5>Scored {this.state.correctAnswers} / {this.state.questionsattended}</h5>
                </div>
                );
        }
        
        
    }
}

export default NoteIdentifyQuiz;