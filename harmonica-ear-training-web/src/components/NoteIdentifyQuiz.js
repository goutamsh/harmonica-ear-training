import React from 'react';
import Table from 'react-bootstrap/Table';
import sa_note from '../sounds/sa.aac';
import re_note from '../sounds/re.aac';
import ga_note from '../sounds/ga.aac';
import ma_note from '../sounds/ma.aac';
import pa_note from '../sounds/pa.aac';
import dha_note from '../sounds/dha.aac';
import ni_note from '../sounds/ni.aac';
import ss_note from '../sounds/ss.aac';
import re_komal_note from '../sounds/re_komal.aac';
import ga_komal_note from '../sounds/ga_komal.aac';
import ma_tivra_note from '../sounds/ma_tivra.aac';
import dha_komal_note from '../sounds/dha_komal.aac';
import ni_komal_note from '../sounds/ni_komal.aac';


const note_file_map = new Map([
    ['sa', sa_note], 
    ['re', re_note],
    ['ga', ga_note],
    ['ma', ma_note],
    ['pa', pa_note],
    ['dha', dha_note],
    ['ni', ni_note],
    ['ss', ss_note],
    ['re_komal', re_komal_note],
    ['ga_komal', ga_komal_note],
    ['ma_tivra', ma_tivra_note],
    ['dha_komal', dha_komal_note],
    ['ni_komal', ni_komal_note]       
]);

class NoteIdentifyQuiz extends React.Component{

    
    constructor(){
        super();
        this.playNote = this.playNote.bind(this);
        // this.playAudio = this.playAudio.bind(this);
        this.isPlaying = this.isPlaying.bind(this);
        this.audio = null;
        this.state = {
            'currentSelectedNote':'',
            'playing':false
        };
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