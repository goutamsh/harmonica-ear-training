
React app created with below command

```
npx create-react-app harmonica-ear-training-web
cd harmonica-ear-training-web
npm start
```



<Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
	  