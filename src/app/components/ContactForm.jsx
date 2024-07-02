import styles from "../styles/contactForm.module.css"

export function ContactForm () {

  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>

      <form className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor="name">Nombre</label>
          <input className={styles.formInput} type="text" id="name" name="name" placeholder="Nombre" required />
        </div>

        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor="email">Email</label>
          <input className={styles.formInput} type="email" id="email" name="email" placeholder="Email" required />
        </div>

        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor="message">Mensaje</label>
          <textarea className={styles.formTextarea} id="message" name="message" placeholder="Mensaje" required></textarea>
        </div>

        <button className={styles.formButton} type="submit">Enviar</button>
      </form>
    </footer>
  )
}