import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
// import styles from './App.module.css';
import './App.module.css';

function App(props: { children: ReactNode }) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default App;

App.propTypes = {
    children: PropTypes.node,
};
