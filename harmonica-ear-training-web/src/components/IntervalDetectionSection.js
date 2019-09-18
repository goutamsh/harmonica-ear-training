import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                <Card.Title>Interval Detection (Coming Soon..)</Card.Title>
                Listen and identify the played interval
                <br/>
                <Button>Practice</Button>
                <Button>Quiz</Button>
                </Card.Body>
            </Card>
        

            
        </>
        );
    }
}


export default IntervalDetectionSection;