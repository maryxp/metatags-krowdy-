//Interactuar con los componentes

import React from 'react'
import Layout from './components/Layout'
import Main from './containers/Main'

const App = () => {
  return (
    //El layout envueve a todo el subcontainer
    <Layout>
      <Main />
    </Layout>
  )
}

export default App