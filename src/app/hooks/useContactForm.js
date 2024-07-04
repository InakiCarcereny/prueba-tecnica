import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

export function useContactForm () {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errorName, setErrorName] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const isFirstRender = useRef(true)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({
      name: '',
      email: '',
      message: ''
    })
    isFirstRender.current = true
    toast.success('Mensaje enviado exitosamente')
  }
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = values.name === ''
      return
    }

    if (values.name.startsWith(' ')) {
      setErrorName('El nombre no puede empezar con un espacio')
      return
    }

    if (!values.name.match(/^[a-zA-Z\s]+$/)) {
      setErrorName('El nombre solo puede contener letras y espacios')
      return
    }

    setErrorName(null)

  },[values.name])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = values.email === ''
      return
    }

    if (values.email.startsWith(' ')) {
      setErrorEmail('El email no puede empezar con un espacio')
      return
    }

    if (!values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setErrorEmail('El email no es valido')
      return
    }

    setErrorEmail(null)

  },[values.email])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = values.message === ''
      return
    }

    if (values.message.startsWith(' ')) {
      setErrorMessage('El mensaje no puede empezar con un espacio')
      return
    }

    if(values.message.length < 10) {
      setErrorMessage('El mensaje debe tener al menos 10 caracteres')
      return
    }

    setErrorMessage(null)

  },[values.message])

  return {values, handleInputChange, handleSubmit, errorName, errorEmail, errorMessage}
}