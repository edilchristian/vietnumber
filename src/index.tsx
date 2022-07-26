import * as React from 'react'
import { render } from 'react-dom'
import ReadNumber from './ReadNumber'

document.body.style.backgroundColor = 'rgb(240, 42, 187)'
document.body.style.textAlign='center'
const styles = {
  divcont: {
    fontFamily: 'didot',
    fontSize: '17px'
  },
  h1cont: {
    fontFamily: 'times',
    fontSize: '30px'
  },
  h2cont: {
    color: 'red',
    fontFamily: 'didot',
    marginBottom: '60px'
  },
  h3cont: {
    color: 'white',
    fontFamily: 'didot',
    fontWeight:'bold'
  },
  overall: {
    marginTop: '120px',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '30px'
  },
  stars: {
    fontSize: '17px'
  }
}



const App = () => (
  <React.StrictMode>
    <div style={styles.overall}>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * *
      </h3>
      <h1 style={styles.h1cont}>
         V I E T N U M B E R
      </h1>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * *
      </h3>
      <h2 style={styles.h2cont}> 
        Created by Edil
      </h2>
      <div style={styles.divcont}>
        <h2> Converting english numbers into Vietnamese words</h2>
    <ReadNumber />
      </div>
    </div>
    
    <div style={styles.h3cont}>  -for MyMy Hoang </div>
  </React.StrictMode>
)

render(<App />, document.getElementById('root'))