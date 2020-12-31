import React from 'react';
import {
    Link
} from "react-router-dom";

function MainPage(){

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/tweets">
                            <button>
                                Tweets
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default  MainPage;