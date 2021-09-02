import React, { Component } from 'react';


class InputAdd extends Component {
    inputRef = React.createRef();
    inputReset = React.createRef();
    onSubmit = event => {
        // submit는 진행하면 자동으로 새로고침이 진행됨 그걸 막아줌
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputReset.current.reset();
    };
    render() {
        
        return (
            <form ref={this.inputReset} className="add_form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Enter the Habit" />
                <button className="add-button">add</button>
            </form>
        );
    }
}

export default InputAdd;