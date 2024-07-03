import { useEffect, useState } from "react"
import { toast } from "sonner"

export function useContactForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState(null)

  const handleSumbit = (e) => {
    e.preventDefault()
    setEmail('')
    setName('')
    setMessage('')
    toast.success('Mensaje enviado exitosamente')
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  useEffect(() => {

    if (!name.match(/^[a-zA-Z\s]+$/)) {
      setError('El nombre solo puede contener letras y espacios')
      return
    }

    if (name.length < 5) {
      setError('Introduzca un nombre valido')
      return
    }

    setError(null)

  },[name])

  useEffect(() => {

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError('El email no es valido')
      return
    }

    setError(null)
    
  },[email])

  useEffect(() => {

    if(message.length < 10) {
      setError('El mensaje debe tener al menos 10 caracteres')
      return
    }

    setError(null)

  },[message])

  return {name, email, message, error, handleChangeName, handleChangeEmail, handleChangeMessage, handleSumbit}
}