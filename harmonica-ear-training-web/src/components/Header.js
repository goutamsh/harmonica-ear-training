import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom';
import { userActions } from '../_actions';
import {connect} from 'react-redux';

class Header extends React.Component{

    render(){
        return(
            <Jumbotron >
                {localStorage.getItem('user') ? <h6>Hi {JSON.parse(localStorage.getItem('user')).token}
                <Link to={'/login'}>
                <span onClick={this.props.logout}>Logout</span>
                </Link>
    </h6> : <h6>Hi Guest <Link to="/login">Login</Link></h6>}
                <center><h1>Harmonica Ear Training</h1></center>
            </Jumbotron>        
        );
    }
}

function mapStateToProps(state) {

    return {  };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: userActions.logout
    };
    
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);