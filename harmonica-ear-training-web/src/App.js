import React from 'react';
import Sound from 'react-sound';
import soundfile from './sounds/dha.aac';
import Music from './Music';
import MainTabs from './components/MainTabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NoteIdentifyPractice from './components/NoteIdentifyPractice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class  App extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
    this.handleClose = () => this.setState({show: false});
    this.handleShow = () => this.setState({show: true});

  }
  render(){
    return (
      <div>
         
      <h1>Harmonica Ear Training</h1>
      
          

      <Button onClick={this.handleShow}>Small modal</Button>


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
      </div>
    );
  }
  
}

export default App;
