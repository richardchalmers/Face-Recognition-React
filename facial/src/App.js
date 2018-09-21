import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

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
  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            />
       <Navigation />
       <Logo />
       <Rank/>
      <ImageLinkForm />
       {/*<FaceRecognition />}*/}
      </div>
    );
  }
}

export default App;
