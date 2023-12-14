import { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    console.log({ email, password })
  }

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input value={email} onChange={({ target }) => setEmail(target.value)} />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Form
