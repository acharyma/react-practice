// import logo from './logo.svg';
import React, {useState} from 'react';
import Tweet from './Tweet'
import './App.css';

function App() {
    const [users] = useState([
        {name: "Manogya", tweet: "That's the whole tweet"},
        {name: "Suyogya", tweet: "Word"},
        {name: "Someone", tweet: "The show must go on"}
    ])

  return (
    <div className="App">
        {users.map(user => (<Tweet name={user.name} tweet={user.tweet} />))}

    </div>
  );
}

export default App;
