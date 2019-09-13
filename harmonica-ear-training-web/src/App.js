import React from 'react';
import Sound from 'react-sound';
import soundfile from './sounds/dha.aac';
import Music from './Music';
import MainTabs from './components/MainTabs';



class  App extends React.Component {
  render(){
    return (
      <div>
      <h1>Harmonica Ear Training</h1>
      
      <Music/>

      <MainTabs/>
      </div>
    );
  }
  
}

export default App;
