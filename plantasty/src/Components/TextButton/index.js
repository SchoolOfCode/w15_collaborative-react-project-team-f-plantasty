import React from 'react';
import styles from './button.module.css';

// text button component for use site wide
// need component functional code followed by jsx?

function TextButton({ text }) {
  return <button className={styles.textButton}>{text}</button>;
}

export default TextButton;
