import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import NoteIdentifySection from './NoteIdentifySection';
import IntervalDetectionSection from './IntervalDetectionSection';


class  EarTrainingApp extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
    this.handleClose = () => this.setState({show: false});
    this.handleShow = () => this.setState({show: true});

  }
  render(){
    return (
      
         <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NoteIdentifySection />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <IntervalDetectionSection />
                    </Col>
                </Row>
            </Container>
      
    );
  }
  
}

export default EarTrainingApp;
