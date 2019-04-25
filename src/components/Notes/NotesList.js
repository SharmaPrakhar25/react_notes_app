import React from 'react';
import { NotesCard } from './NotesCard';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class NotesList extends React.Component {

    // constructor(){
    //     super();
    //     // state 
    //     this.state={
    //         notes: []
    //     }

    //     this.addNote = this.addNote.bind(this); // why do we have to do this ?
    //     // class methods are not bound by default. If you forget to bind this.addNote and pass it to onClick,
    //     //  this will be undefined when the function is actually called.
    //     // .bind() simply creates a new function that, when called, has its this keyword set to the provided value. 
    //     //  So, we pass our desired context, this (which is NotesList), into the .bind() function.
    //     //  Then, when the callback function is executed, this references NotesList.

    // }

    renderNotes() {
        return this.props.notes.map((note, index) => {
            //  debugger;  // use this to stop code and check in source 
            return (
                <NotesCard key={index}
                    colNum="col-md-3 col-xs-6"
                    note={note} />
            )
        });
    }

    addNote() {
        const notes = this.state.notes; // Take the notes property from current component state 
        notes.push(1); // update the data, add one more 

        // Update the state of current component
        this.setState({
            notes: notes
            // if the property name and the value name is same, we can just put one name and it will work fine
            // for e.g. notes
        })
    }

    componentWillMount() {

        this.props.dispatch(actions.fetchNotes())
    }

    render() {
        // debugger;
        // we do not want to call the add note function that's why we don't need () after addNote, it will be called onClick 
        return (
            <div className='container'>
                <section id='rentalListing'>
                    <div className="row">
                        {this.renderNotes()}
                    </div>
                </section>

                {/* <button onClick={()=>{this.addNote()}} name="Add Note" value="Add note" >Add Note </button> */}
                <button onClick={this.addNote} name="Add Note" value="Add note" >Add Note </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // state contains data from notes object from store 
    return {
        notes: state.notes.data
    }
}

// Connect is used to map the stores state and dispatch to the props of a component
export default connect(mapStateToProps)(NotesList);


// ALT + SHIFT + A for multiline comments in VS code and CTRL + A + K + F
/*
   mapStateToProps is pure function that are provided the stores “state”.
   Furthermore, the function have to return an object,
   whose keys will then be passed on as the props of the component they are connected to.
   In this case, mapStateToProps returns an object with only one key : “notes”.
*/