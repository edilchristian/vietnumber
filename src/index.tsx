import * as React from 'react'
import { render } from 'react-dom'
import ReadNumber from './ReadNumber'

document.body.style.backgroundColor = 'rgb(240, 42, 187)'
document.body.style.textAlign = 'center'

const styles = {
  overall: {
    marginTop: '60px',
    marginBottom: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: 'white',
    padding: '30px'
  },
  stars: {
    fontSize: '17px',
    color: 'rgb(240, 42, 187)'
  },
  titlebar: {
    fontFamily: 'times',
    fontSize: '30px'
  },
  explaining: {
    marginTop: '40px',
    marginBottom: '10px',
    fontFamily: 'didot',
    fontSize: '15px'
  },
  bottombar: {
    color: 'white',
    fontFamily: 'didot'
  },
}

const App = () => (
  <React.StrictMode>
    <div style={styles.overall}>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * * *
      </h3>
      <h1 style={styles.titlebar}>
         V I E T N U M B E R
      </h1>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * * *
      </h3>
      <div style={styles.explaining}>
        <h2> Converting English numbers into Vietnamese words</h2>
      <ReadNumber />
      </div>
    </div>
    
    <div style={styles.bottombar}>  -created by Edil Christian </div>
  </React.StrictMode>
)

render(<App />, document.getElementById('root'))