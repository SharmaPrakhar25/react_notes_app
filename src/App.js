import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'; //Redirect

import { Provider } from 'react-redux';

import logo from './logo.png';
import './App.css';

import { Header } from './shared/Header';
import NotesList from './components/Notes/NotesList';
import { NoteDetails } from './components/Notes/NoteDetails';

const store = require('./reducers').init();

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
    // Create a Redux store holding the state of your app.
    // const store = redux.createStore(() => {
    //   return {
    //     /* The shape of the state is up to you: it can be a primitive, an array, an object,
    //     or even an Immutable.js data structure */
    //     // This is the current state of the data in our app.
    //     notes: []
    //   }
    // });
    return (
      <Provider store={store}>
        {/* Provider is a React component given to us by the “react-redux” library. 
        It serves just one purpose : to “provide” the store to its child components. */}
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
