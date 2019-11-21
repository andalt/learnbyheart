import React, { useState, useEffect, useCallback } from 'react';
import logo from '../../../logo.svg';
import styles from './App.module.css';
import './App.module.css';
import Papa from 'papaparse';

function RepeatWords() {
    type Word = {
        type: string;
        english:  string;
        russian: string;
    };

    type Words = {
        [key:string]: Word;
    };

    const [words, setWords] = useState<Words[]>([]);

    const getPreposition = useCallback(async () => {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNHkNmfpLyS_5gnrhTo5qayBIDx0ZMnVD560tq0vYSJEG2blf8hvE7m100U4BOZr8ZFv8rRH0FoUPP/pub?gid=142624304&single=true&output=csv';
        const response = await fetch(url);

        return await response.text();
    }, []);

    useEffect(() => {
        getPreposition()
            .then((dataCsv) => {
                const object = Papa.parse(dataCsv, {
                    header: true,
                });

                console.log(dataCsv);

                setWords(object.data);
            });

        return () => {
            setWords([]);
        };
    }, [getPreposition]);

    console.log(words);

    return (
        <div className={styles.app}>
            {/* <header className={styles.header}>
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
            </header> */}
        </div>
    );
}

export default RepeatWords;
