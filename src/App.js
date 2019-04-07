import React, { Component } from 'react';
import { BrowserRouter, Route,  } from 'react-router-dom'; //Redirect
import * as redux from 'redux';
import {Provider} from 'react-redux';


import logo from './logo.png';
import './App.css';


import { Header } from './shared/Header';
import  NotesList from './components/Notes/NotesList';
import { NoteDetails } from './components/Notes/NoteDetails';




class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     isNotesList: true
  //   }
  //   this.navigate = this.navigate.bind(this);
  // }

  // navigate(){
  //   this.setState({
  //     isNotesList: !this.state.isNotesList
  //   })
  // }

  render() {

    const store = redux.createStore(()=>{
      return {
        notes: [{"title":"My second notes","body":"My notes body"},
        {"title":"My second notes","body":"My notes body"},
        {"title":"My second notes","body":"My notes body"},
        {"title":"My second notes","body":"My notes body"}]
      }
    });
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <button onClick={this.navigate}>Navigate</button> */}
          <header className="App-header">
            <h1 className='page-title'>It's a react App Bitches</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="container">
            {/* <Route exact path="/" render={()=>{ return <Redirect to='/notes-list'/>}} /> */}
            <Route exact path="/notes-list" component={NotesList} />
            <Route exact path="/view-note/:id" component={NoteDetails} />
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

/* npm start to start the server */
