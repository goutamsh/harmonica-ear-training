import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import NoteIdentifyPractice from './NoteIdentifyPractice';
import NoteIdentifyQuiz from './NoteIdentifyQuiz';
import {connect} from 'react-redux';

class NoteIdentifySection extends React.Component {
  render() {
    return (
      <>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Note Identification</Card.Title>
            Listen and identify the note
                  <br/>
                  
                    <Button onClick={this.props._handleShowNoteIdentifyPractice}>Practice</Button>{' '}
                    <Button onClick={this.props._handleShowNoteIdentifyQuiz}>Quiz</Button>
                  
            
          </Card.Body>
        </Card>


        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" 
            centered
            show={this.props.showNoteIdentifyPractice} onHide={this.props._handleCloseNoteIdentifyPractice}>
          <Modal.Header closeButton>
            <Modal.Title>Practice Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <NoteIdentifyPractice />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props._handleCloseNoteIdentifyPractice}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>

        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" 
            centered
            show={this.props.showNoteIdentifyQuiz} onHide={this.props._handleCloseNoteIdentifyQuiz}>
          <Modal.Header closeButton>
            <Modal.Title>Quiz</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <NoteIdentifyQuiz />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props._handleCloseNoteIdentifyQuiz}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { harp_ear_raining_reducer } = state;
  
  return {
    showNoteIdentifyPractice : harp_ear_raining_reducer.showNoteIdentifyPractice,
    showNoteIdentifyQuiz : harp_ear_raining_reducer.showNoteIdentifyQuiz
  } ;
}

const mapDispatchToProps = (dispatch) => {
  return {
    _handleShowNoteIdentifyPractice: () => {
      dispatch({
        type:'SHOW_NOTE_IDENTIFY_PRACTICE'
      })
    },

    _handleShowNoteIdentifyQuiz: () => {
      dispatch({
        type: 'SHOW_NOTE_IDENTIFY_QUIZ'
      })
    },

    _handleCloseNoteIdentifyPractice: () => {
      dispatch({
        type:'CLOSE_NOTE_IDENTIFY_PRACTICE'
      })
    },

    _handleCloseNoteIdentifyQuiz: () => {
      dispatch({
        type: 'CLOSE_NOTE_IDENTIFY_QUIZ'
      })
    }




  };
}

export default connect(mapStateToProps, mapDispatchToProps) (NoteIdentifySection);