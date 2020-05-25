import React from 'react';
import { useState, useEffect, createRef } from 'react'



export default () => {
  const [idReference, setIdReference] = useState(() => createRef())
  const [passwordReference, setPasswordReference] = useState(() => createRef())

  const requestToLogin = event => {
    event.preventDefault()

    const id = idReference.current.target.value
    const password = passwordReference.current.target.value

    // a AJAX logic
  }

  return (
    <form onSubmit={requestToLogin}>
      <label>
        id:
        <input ref={idReference} type='text' />
      </label>
      <label>
        password:
        <input ref={passwordReference} type='password' />
      </label>
      <button type='submit'>로그인!</button>
    </form>
  )
}