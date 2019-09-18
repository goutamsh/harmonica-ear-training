import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import NoteIdentifyPractice from './NoteIdentifyPractice';
import NoteIdentifyQuiz from './NoteIdentifyQuiz';

class NoteIdentifySection extends React.Component{
    constructor(){
        super();
        this.state = {show: false, showQuiz: false};
        this.handleClose = () => this.setState({show: false});
        this.handleShow = () => this.setState({show: true});

        this.handleQuizClose = () => this.setState({showQuiz: false});
        this.handleQuizShow = () => this.setState({showQuiz: true});
    
      }

    render(){
        return (
<>
            <Card>
                <Card.Body>
                <Card.Title>Note Identification</Card.Title>
                Listen and identify the note
                <br/>
                <Button onClick={this.handleShow}>Practice</Button>
                <Button  onClick={this.handleQuizShow}>Quiz</Button>
                </Card.Body>
            </Card>
        

            <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Practice Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>                
          <NoteIdentifyPractice />          
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      <Modal show={this.state.showQuiz} onHide={this.handleQuizClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>                
          <NoteIdentifyQuiz />          
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleQuizClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </>
        );
    }
}


export default NoteIdentifySection;