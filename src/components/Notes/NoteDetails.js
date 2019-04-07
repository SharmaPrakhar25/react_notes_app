import React from 'react';

export class NoteDetails extends React.Component{
    render(){
        const params = this.props.match.params
        console.log(params.id);
        debugger;
        return(
            <div>
            <h1>I am Note Detail Component.</h1>
            </div>
        );
    }
}