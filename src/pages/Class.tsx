import React, { Component } from 'react'
import Message from '../components/Message'

const initialState = {
  name: 'Stefan',
  message: 'look at you learning TypeScript',
}

type State = Readonly<typeof initialState>

class Class extends Component<any, State> {
  readonly state: State = initialState

  render() {
    return (
      <>
        <h1>Classes!</h1>
        <Message message={this.state.message} name={this.state.name} />
      </>
    )
  }
}
export default Class
