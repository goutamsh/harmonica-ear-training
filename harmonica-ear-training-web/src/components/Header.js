import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends React.Component{

    render(){
        return(
            <Jumbotron >
                {localStorage.getItem('user') ? <h6>Hi User</h6> : <h6>LogIn123</h6>}
                <center><h1>Harmonica Ear Training</h1></center>
            </Jumbotron>        
        );
    }
}

export default Header;