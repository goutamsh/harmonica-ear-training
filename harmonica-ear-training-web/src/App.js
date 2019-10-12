import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';

import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import  {EarTrainingApp} from './components/EarTrainingApp'


class  App extends React.Component {

    constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

  
  render(){
    const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                            
                        }
                        {
                          console.log("HEllo from App")
                        }
                        
                        <Router history={history}>
                            <Switch>
                                
                                <Route exact path="/" component={EarTrainingApp} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
  }
  
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};



export default connect(mapState, actionCreators) (App);