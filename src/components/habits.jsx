import React, { Component } from 'react';
import Habit from './habit';
import InputAdd from './InputAdd';

class Habits extends Component {

    // 리액트에서 state를 직접 수정하는건 좋지 않다!
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    } 
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    } 
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }
    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
            <InputAdd onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                        key={habit.id} 
                        habit={habit} 
                        name={habit.name}
                        count={habit.count}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button onClick={this.props.ResetAll} className="habits-reset">RestAll</button>
                </>
        );
    }
}

export default Habits;

