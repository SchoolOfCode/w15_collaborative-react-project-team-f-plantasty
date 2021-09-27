import React from 'react';
import styles from './IconButton.module.css'

// text button component for use site wide
// need component functional code followed by jsx?

function IconButton() {

    return (
        <button className={styles.IconButton}>
            <div className="Left-column">
                <img></img>
            </div>
            <div className="Right-column">
                <p></p>
            </div>
        </button>
    )
}

export default IconButton;