import styles from "../styles/about.module.css";

export function About () {

  return (
    <section className={styles.container}>
      <h2 className={styles.name}>Sobre <span className={styles.nameColor}>mí</span></h2>

      <p className={styles.info}>Soy Matías Aguirre, nací el 20 de noviembre de 1995 en Buenos Aires, Argentina. Termine mis estudios de medicina en la Facultad de Ciencias Médicas en 2023. Actualmente, me encuentro trabajando en el Hospital Italiano.</p>
    </section>
  )
}