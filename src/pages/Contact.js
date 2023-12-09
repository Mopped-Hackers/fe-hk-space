import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.content}>
        <img
          src={process.env.PUBLIC_URL + '/Jacob.jpg'}
          alt='profile'
          className={styles.profile}
        />
        <div className={styles.text}>
          <p>
            <strong>Full name:</strong> Jacob Pichna
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href='mailto:pichna@icloud.com'>pichna@icloud.com</a>
          </p>
          <p>
            <strong>Phone number:</strong> +358 503624658
          </p>
          <p>
            <strong>Role:</strong> Head of strategy
          </p>
          <p className={styles.socialMedia}>
            <strong>Social Media:</strong>
            <a href='https://www.linkedin.com/in/pichna/'>
              <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt='linkedin' className={styles.icon} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
