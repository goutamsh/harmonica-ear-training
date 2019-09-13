import React from 'react';
import Table from 'react-bootstrap/Table';
import soundfile from '../sounds/eesundara.mp3';



class NoteIdentifyPractice extends React.Component{

    constructor(){
        super();
        this.playNote = this.playNote.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.audio = null;
    }
    playNote(note){
     
        
        this.audio = new Audio(soundfile);

        this.audio.load();
            console.log(this.audio);
            this.audio.play();          

    }

    playAudio() {
        const audioPromise = this.audio.play()
        if (audioPromise !== undefined) {
          audioPromise
            .then(_ => {
              // autoplay started
            })
            .catch(err => {
              // catch dom exception
              console.info(err)
            })
        }
    }

    render(){
        return (
            <div>
                <h5>Practice Notes</h5>
            <Table striped borderless hover>
                <tbody>
                        <tr>
                            <td>
                                <button onClick={() => this.playNote('sa')}>Sa</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('sa')}>Re</button>
                            </td>
                            <td>
                                <button onClick={() => this.playNote('sa')}>Ga</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.playNote('sa')}>Ma</button>
                            </td>
                            <td>
                                <button>Pa</button>
                            </td>
                            <td>
                                <button>Dha</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Ni</button>
                            </td>
                            
                        </tr>
                </tbody>                    
            </Table>
            
            
        </div>
        );
        
    }
}

export default NoteIdentifyPractice;