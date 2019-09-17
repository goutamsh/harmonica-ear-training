import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import NoteIdentifyPractice from './NoteIdentifyPractice';

class IntervalDetectionSection extends React.Component{
    constructor(){
        super();
        this.state = {show: false};
        this.handleClose = () => this.setState({show: false});
        this.handleShow = () => this.setState({show: true});
    
      }

    render(){
        return (
<>
            <Card>
                <Card.Body>
                <Card.Title>Interval Detection Practice</Card.Title>
                This is for HArmonica Interval Detection Practice section consisting of Practive and Quiz..bla bla
                <br/>
                <Button onClick={this.handleShow}>Practice</Button>
                <Button >Quiz</Button>
                </Card.Body>
            </Card>
        

            <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Practice Interval</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>                
                 
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </>
        );
    }
}


export default IntervalDetectionSection;