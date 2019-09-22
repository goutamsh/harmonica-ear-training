import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux';



class NoteIdentifyQuiz extends React.Component{    
    
    componentDidMount(){
        
        this.takeTurn();        
        
    }

    async takeTurn(){
               
            this.props._takeTurn(this.props.questionsattended);
            console.log("Curret Question set to "+this.props.currentQuestion.note);
            this.props._playQuestionNote();
                
             
    }    

    render(){
        if(!this.props.quizCompleted){
            return (
                
                <Card>
                    <Card.Body>                    
                    <h6>Question {this.props.questionsattended+1}:</h6>
                    <Button size="sm" onClick={this.props._playQuestionNote}>Question Note</Button>    
                    <br/>
                    <h6>Answers:</h6>
                    <div style={this.props.backgroundColour}>
                    <Table borderless>
                    <tbody>
                            <tr>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('sa')}>Sa</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('re')}>Re</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('ga')}>Ga</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('ma')}>Ma</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('pa')}>Pa</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('dha')}>Dha</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('ni')}>Ni</button>
                                </td>
                                <td>
                                    <button onClick={() => this.props._checkAnswerSelected('ss')}>Sa'</button>
                                </td>
                                
                            </tr>
                    </tbody>                    
                </Table>   
                </div>                
                <Button disabled={!this.props.enableNext} onClick={() => {this.props._handleNextButton(this.props.questionsattended+1); this.props._playQuestionNote()}}>Next</Button>                
                    </Card.Body>
                </Card>
                
            
            );
        }else{
            return (
                <Card>
                <Card.Body>
                <h3>Congratulations !! Quiz Completed</h3>    
                <br/>
                <h5>Scored {this.props.correctAnswers} / {this.props.questionsattended}</h5>
                </Card.Body>
                </Card>
                );
        }
        
        
    }
}


const mapStateToProps = (state) => {
    return {
        ...state.quiz
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        _takeTurn: (questionsattended) => {

            dispatch({
                type:'QUIZ_NOTE_IDENTIFICATION_TAKE_TURN',
                questionsattended : questionsattended
            });
        },

        _quizCompleted: () => {

            dispatch({
                type:'QUIZ_NOTE_IDENTIFICATION_COMPLTED'
            });
        },

        _playQuestionNote : () => {

            dispatch({
                type:'QUIZ_NOTE_IDENTIFICATION_PLAY_QUES_NOTE'
            });
        },

        _checkAnswerSelected : (answerSelected) => {

            dispatch({
                type:'QUIZ_NOTE_IDENTIFICATION_ANS_SELECTED',
                answerSelected:answerSelected
            });
        },

        _handleNextButton : (questionsattended) => {
            dispatch({
                type:'QUIZ_NOTE_IDENTIFICATION_TAKE_TURN',
                questionsattended : questionsattended
            });
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps) (NoteIdentifyQuiz);