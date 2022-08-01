import * as React from 'react'
import readNumber from 'read-vn-number'

interface State {
  number: string | undefined
  modified: boolean
}

export default class ReadNumber extends React.Component<any, State> {
  number: HTMLInputElement | null

  constructor(props: any) {
    super(props)
    this.state = { number: '', modified: false }
  }

  handleNumberChange = (e: any) => {
    this.setState({ number: e.target.value, modified: true })
  }

  render() {
    const { modified, number } = this.state
    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={this.handleNumberChange}
        />
        {(!modified || !number || number.startsWith('-')) && (
          <h4>Enter a positive number in the box above </h4>
        )}
        {modified && number && !number.startsWith('-') && (
          <h2>{readNumber(number)}</h2>
        )}
      </div>
    )
  }
}