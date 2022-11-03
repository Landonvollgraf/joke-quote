import React, { useEffect, useState } from "react";
import './App.css'


const App = () => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
        

        const fetchData = async () => {
            try {
             
	
                const response = await  fetch('https://api.chucknorris.io/jokes/random');
                const json = await response.json();
                console.log(json);
                setJoke(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="App">
        <h1 className="value">{joke.value}</h1>
        <a href="/"><button>New joke</button></a>
      </div>
      
    );
};

export default App;
