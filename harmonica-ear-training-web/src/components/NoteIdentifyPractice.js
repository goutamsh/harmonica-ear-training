import React from 'react';
import Table from 'react-bootstrap/Table';
import {note_file_map} from './NoteMediaFiles';


class NoteIdentifyPractice extends React.Component{

    
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
                
            <Table borderless>
                <tbody>
                        <tr>
                            <td>
                                <button onClick={() => this.playNote('sa')}>Sa</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('re')}>Re</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('ga')}>Ga</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.playNote('ma')}>Ma</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('pa')}>Pa</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('dha')}>Dha</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.playNote('ni')}>Ni</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('ss')}>Sa'</button>
                            </td>
                        </tr>
                </tbody>                    
            </Table>
            
            
        </div>
        );
        
    }
}

export default NoteIdentifyPractice;