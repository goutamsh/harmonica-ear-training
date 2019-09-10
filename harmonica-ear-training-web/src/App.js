import React from 'react';
import Sound from 'react-sound';
import soundfile from './sounds/dha.aac';
import Music from './Music';



class  App extends React.Component {
  render(){
    return (
      <div>
      <h1>Hello</h1>
      <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      <Music/>
      </div>
    );
  }
  
}

export default App;
