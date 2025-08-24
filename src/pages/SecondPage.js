import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  return (
    <div style={styles.page}>
        <h1> Second Page</h1>

      <Link to="/" style={styles.button}>
        العودة للصفحة الأولى
      </Link>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh', 
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4c2d82',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SecondPage;
