import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends React.Component{

    render(){
        return(
            <Jumbotron >
                <center><h1>Harmonica Ear Training</h1></center>
            </Jumbotron>        
        );
    }
}

export default Header;