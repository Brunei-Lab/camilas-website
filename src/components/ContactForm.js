import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import styles from '../assets/styles/Contact.module.scss';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p>Thanks for your contact! I will reply as soon as possible.</p>
  }

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <input 
        className={styles.name}
        id = "nome"
        type = "nome"
        name = "nome"
        placeholder = "Nome"
        required
      />
      <ValidationError 
        prefix = "Nome"
        field = "nome"
        errors = {state.errors}
      />
      <input 
        id = "email"
        type = "email"
        name = "email"
        placeholder = "Email"
        required
      />
      <ValidationError 
        prefix = "Email"
        field = "email"
        errors = {state.errors}
      />
      <input 
        id = "telefone"
        type = "telefone"
        name = "telefone"
        placeholder = "Telefone"
        required
      />
      <ValidationError 
        prefix = "Telefone"
        field = "telefone"
        errors = {state.errors}
      />
      <textarea
        className={`${styles.message} my-1`}
        id = "mensagem"
        name = "mensagem"
        placeholder = "Menssagem"
        required
      />
      <ValidationError 
        prefix = "Menssagem"
        field = "mensagem"
        errors = {state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar mensagem
      </button>
    </form>
  )
}

export default ContactForm;