import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

const app = new Clarifai.App({
 apiKey: 'e67f6fe6e99c435cad3c236e77d74d96'
});

const particlesOptions = {
                particles: {
                  number:{
                    value: 70,
                    density: {
                      enable: true,
                      value_area: 700,
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }
            }
          }
            
          
            
class App extends Component {
  constructor (){
    super();
    this.state={
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg")
    .then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            />
       <Navigation />
       <Logo />
       <Rank/>
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}/>
       <FaceRecognition />
      </div>
    );
  }
}

export default App;
