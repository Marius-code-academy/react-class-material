import React from 'react';
import Title from '../Title/Title';
import Container from '../Container/Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-background']}>
      <Container>
        <Title text="Contacts" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum velit ipsa minima dolore, cumque tempore quia laborum quam eaque
          fuga at vel voluptate nemo quod animi culpa sit magni? Tenetur.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit ullam possimus enim sapiente corrupti nemo, tenetur maxime
          nesciunt totam quam a magni facere, saepe, eos dolores doloribus. Quibusdam, officia.
        </p>
      </Container>
    </footer>
  );
}
