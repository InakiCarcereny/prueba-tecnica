'use client'

import { useId } from "react"
import { useContactForm } from "../hooks/useContactForm"
import { EmailIcon } from "../icons/EmailIcon"
import { MessageIcon } from "../icons/MessageIcon"
import { NameIcon } from "../icons/NameIcon"
import styles from "../styles/contactForm.module.css"

export function ContactForm () {
  const {name, email, message, error, handleChangeName, handleChangeEmail, handleChangeMessage, handleSumbit} = useContactForm()

  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>

      <form onSubmit={handleSumbit} className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={nameId}>
            <NameIcon />
          </label>
          <input className={`${styles.formInput} ${error && styles.errorBorder}`} 
          type="text" 
          id={nameId}
          name="name" 
          placeholder="Nombre" 
          required 
          value={name}
          onChange={handleChangeName}
          />
        </div>

        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={emailId}>
            <EmailIcon />
          </label>
          <input className={`${styles.formInput} ${error && styles.errorBorder}`} 
          type="email" 
          id={emailId}
          name="email" 
          placeholder="usuario@gmail.com" 
          required 
          value={email}
          onChange={handleChangeEmail}
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
           value={message}
           onChange={handleChangeMessage}
           >
           </textarea>
        </div>

        {error && <span className={styles.error}>{error}</span>}
        
        <button className={styles.formButton} type="submit">Enviar</button>
      </form>
    </footer>
  )
}