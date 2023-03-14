import React from 'react';
import Title from '../Title/Title';
import Container from '../Container/Container';
import styles from './Main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <Container>
        <img
          className={styles['desert-image']}
          src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
          alt="desert"
        />
        <Title text="About" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet odit ipsum architecto? Eius nulla ratione cupiditate totam dolores
          reprehenderit modi nam dolore eaque doloribus, cum officiis! Optio eius hic est.
        </p>
      </Container>
    </main>
  );
}
