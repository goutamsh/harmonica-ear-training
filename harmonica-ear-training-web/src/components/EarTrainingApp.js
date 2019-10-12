import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import NoteIdentifySection from './NoteIdentifySection';
import IntervalDetectionSection from './IntervalDetectionSection';
import { connect } from 'react-redux';

class  EarTrainingApp extends React.Component {
    
  
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

function mapState(state) {

    return {  };
}

const actionCreators = {
    
};

const connectedEarTrainingApp = connect(mapState, actionCreators)(EarTrainingApp);
export { connectedEarTrainingApp as EarTrainingApp };


