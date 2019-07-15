import React from 'react';
import './App.css';


class Helloworld extends React.Component{

  state = {
    show:true
  }

  toggleShow(){
    this.setState({show:!this.state.show});
  }

  render(){
    if(this.state.show){
      return(
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            <button onClick={()=> this.toggleShow()}>Cambiar State</button> 
        </div>
      )
    }else{
      return(
      <div>
        <h1> No hay elementos </h1>
        <button onClick={()=> this.toggleShow()}>Cambiar State</button> 
      </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      <Helloworld title="ESTE ES EL TITULO"
                  subtitle="ESTE ES EL SUBTITULO"/>
    </div>
  );
}

export default App;
