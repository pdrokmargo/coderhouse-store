import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import Brand from './components/Brand';
import Menu from './components/Menu';

export default class App extends Component {
  opciones = ["Inicio", "Catálogo", "Contacto"];

  constructor(){
    super();
    this.state = {title: '', opciones: this.opciones}
  }

  // cambiarState(){
  //   this.setState({title: 'Fragantos'});
  // }

  componentDidMount(){
    
  }
  componentDidUpdate(){
    
  }

  componentWillUnmount(){
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* Brand */}
          <Brand>{this.state.title}</Brand>
  
          {/* Menu */}
         <Menu opciones={this.opciones} />
  
        </header>
      </div>
    );
  }
}
