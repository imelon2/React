import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import InputAdd from './components/InputAdd';
import SimpleHabit from './components/simpleHabit';

class App extends Component {
  state ={
    habits:[
        {id : 1, name: 'Reading',count:0},
        {id : 2, name: 'Running',count:0},
        {id : 3, name: 'Coding',count:0},
    ]

};

handleIncrement = habit => {
  const habits = this.state.habits.map( item => {
    if(item.id === habit.id) {
      return {...habit,count:habit.count +1 }
    } else {
      return item
    }
  })
  this.setState({habits: habits})
} 
handleDecrement = (habit) => {
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  const count = habits[index].count -1;
  habits[index].count = count > 0 ? count : 0;
  this.setState({habits: habits})
} 
handleDelete = (habit) => {
  // const habits = [...this.state.habits];
  // const index = habits.indexOf(habit);
  // habits[index].count = 0;
  // this.setState({habits: habits})
  const habits = this.state.habits.filter(item => item.id !== habit.id );
  this.setState({habits: habits})
}

handelAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name:name, count: 0}];
  this.setState({habits: habits});
}

ResetAll = () => {
  const habits = this.state.habits.map(habit=> {
    if(habit.count !== 0 ) {
      return {...habit, count: 0}
    }
    return habit;
  })
  this.setState({habits : habits});
}

  render() {
    const totalCount = this.state.habits.filter(item => item.count > 0).length;
    return (
      <>
      <Navbar totalCount = {totalCount}
      />
      <Habits 
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handelAdd}
      ResetAll={this.ResetAll}
      />

      <SimpleHabit/>
      </>
    );
  }
}

export default App;