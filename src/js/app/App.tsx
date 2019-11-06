import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import styles from './App.module.css';
import './App.module.css';
import Papa from 'papaparse';

function App() {
    type Words = [{
        type: string;
        english:  string;
        russian: string;
    }];


    const [words, setWords] = useState<Words | null>(null);

    useEffect(() => {
        getWordsPreposition()
            .then((dataCsv) => {
                const object = Papa.parse(dataCsv, {
                    header: true,
                });

                // setWords(object.data);
                console.log(object);
            });
    }, [words]);

    const getWordsPreposition = async() => {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNHkNmfpLyS_5gnrhTo5qayBIDx0ZMnVD560tq0vYSJEG2blf8hvE7m100U4BOZr8ZFv8rRH0FoUPP/pub?gid=142624304&single=true&output=csv';
        const response = await fetch(url);

        return await response.text();
    };

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles.link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
