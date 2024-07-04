'use client'

import { useId } from "react"
import { useContactForm } from "../hooks/useContactForm"
import { EmailIcon } from "../icons/EmailIcon"
import { MessageIcon } from "../icons/MessageIcon"
import { NameIcon } from "../icons/NameIcon"
import styles from "../styles/contactForm.module.css"

export function ContactForm () {
  const {values, handleInputChange, handleSubmit, errorName, errorEmail, errorMessage} = useContactForm()

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={nameId}>
            <NameIcon />
          </label>
          <input className={`${styles.formInput} ${errorName && styles.errorBorder}`} 
          type="text" 
          id={nameId}
          name="name" 
          placeholder="Nombre" 
          required 
          value={values.name}
          onChange={handleInputChange}
          />
        </div>

        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={emailId}>
            <EmailIcon />
          </label>
          <input className={`${styles.formInput} ${errorEmail && styles.errorBorder}`} 
          type="email" 
          id={emailId}
          name="email" 
          placeholder="usuario@gmail.com" 
          required 
          value={values.email}
          onChange={handleInputChange}
          />
        </div>

        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={messageId}>
            <MessageIcon />
          </label>
          <textarea className={styles.formTextarea}
           id={messageId}
           name="message" 
           placeholder="Mensaje" 
           required
           value={values.message}
           onChange={handleInputChange}
           >
           </textarea>
        </div>

        {errorName && <span className={styles.error}>{errorName}</span>}
        {errorEmail && <span className={styles.error}>{errorEmail}</span>}
        {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        
        <button className={styles.formButton} type="submit">Enviar</button>
      </form>
    </footer>
  )
}