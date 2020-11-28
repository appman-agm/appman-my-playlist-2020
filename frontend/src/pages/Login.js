// import styled from "styled-components";
import Sign from "../components/SignStyled"

import React, { useState } from 'react'
import styled from 'styled-components'
// import { Provider, useLogin } from '../contexts/LoginContext'
import { fetchLogin } from '../services/fetchData'

const Conatiner = styled.div`
`

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const handleOnEmailOnChange = (event) => {
    setEmail(event.target.value)
  }
  const handleOnPasswordOnChange = event => {
    setPassword(event.target.value)
  }
  const handleOnSubmit = async event => {
    if (email !== '' && password !== '') {
      await fetchLogin(email, password).then(response => console.log(response))
    }
  }
  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      handleOnSubmit()
    }
  }
  return (
    <>
    {/* <Provider> */}
    <Sign/>
    {/* </Provider> */}
    </>
  )
}

export default Login