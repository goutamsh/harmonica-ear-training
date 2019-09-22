import React from 'react';
import Table from 'react-bootstrap/Table';
import {connect} from 'react-redux';


class NoteIdentifyPractice extends React.Component{
    render(){
        return (
            <div>
                
            <Table borderless>
                <tbody>
                        <tr>
                            <td>
                                <button onClick={() => this.props._playNote('sa')}>Sa</button>
                            </td>
                            <td>
                                <button onClick={() => this.props._playNote('re')}>Re</button>
                            </td>
                            <td>
                                <button onClick={() => this.props._playNote('ga')}>Ga</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.props._playNote('ma')}>Ma</button>
                            </td>
                            <td>
                                <button onClick={() => this.props._playNote('pa')}>Pa</button>
                            </td>
                            <td>
                                <button onClick={() => this.props._playNote('dha')}>Dha</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.props._playNote('ni')}>Ni</button>
                            </td>
                            <td>
                                <button onClick={() => this.props._playNote('ss')}>Sa'</button>
                            </td>
                        </tr>
                </tbody>                    
            </Table>
            
            
        </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return {
        currentSelectedNote:state.currentSelectedNote,
        playing: state.playing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        _playNote : (note) =>{
            dispatch({
                type:'PLAY_NOTE',
                note:note
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteIdentifyPractice);