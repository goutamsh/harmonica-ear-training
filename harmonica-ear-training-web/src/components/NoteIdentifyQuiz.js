import React from 'react';
import {note_file_map} from './NoteMediaFiles';


class NoteIdentifyQuiz extends React.Component{

    
    constructor(){
        super();
        this.playNote = this.playNote.bind(this);
        // this.playAudio = this.playAudio.bind(this);
        this.isPlaying = this.isPlaying.bind(this);
        this.takeTurn = this.takeTurn.bind(this)
;        this.audio = null;
        this.state = {
            currentSelectedNote:'',
            playing:false,
            currentQuestion:null,
            questions:null,
            totalQuestions:10,
            correctAnswers:0
        };
    }

    componentDidMount(){
        console.log(this.state);
        const note_arrays = note_file_map.entries();
        console.log(note_arrays);
        this.setState({questions:note_arrays});
        console.log(this.state);
        this.takeTurn();

    }
    takeTurn(){
        var min = 1;
   var max = 7;
   var rand =  min + (Math.random() * (max-min));
    
        this.setState({currentQuestion : this.state.questions[Math.floor(rand)]});

        console.log(this.state);

    }
    playNote(note){
     
        if(this.isPlaying()){
            this.audio.pause();
        }
        this.audio = new Audio(note_file_map.get(note));

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

    render(){
        return (
            <div>
                <h5>Identify Note Quiz</h5>
            
            
        </div>
        );
        
    }
}

export default NoteIdentifyQuiz;