import React,{memo} from 'react';

const InputAdd = memo((props) => {
    const inputRef = React.createRef();
    const inputReset = React.createRef();
    const onSubmit = event => {
        // submit는 진행하면 자동으로 새로고침이 진행됨 그걸 막아줌
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputReset.current.reset();
    };
        return (
            <form ref={inputReset} className="add_form" onSubmit={onSubmit}>
                <input ref={inputRef} type="text" className="add-input" placeholder="Enter the Habit" />
                <button className="add-button">add</button>
            </form>
        );
    
});


export default InputAdd;