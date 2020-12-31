import React, {useState} from 'react';
import Tweet from "./Tweet";
import {Link} from "react-router-dom";

function TweetPage(){
    const [users] = useState([
        {name: "Manogya", tweet: "That's the whole tweet"},
        {name: "Suyogya", tweet: "Word"},
        {name: "Someone", tweet: "The show must go on"}
    ])

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <button>
                                Home
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="App">
                {users.map(user => (
                        <div key={user.id}>
                            <Tweet name={user.name} tweet={user.tweet} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default TweetPage;