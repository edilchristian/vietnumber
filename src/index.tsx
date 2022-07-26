import * as React from 'react'
import { render } from 'react-dom'
import ReadNumber from './ReadNumber'

document.body.style.backgroundColor = 'rgb(240, 42, 187)'
document.body.style.textAlign = 'center'

const styles = {
  overall: {
    marginTop: '120px',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '30px'
  },
  stars: {
    fontSize: '17px'
  },
  
  titlebar: {
    fontFamily: 'times',
    fontSize: '30px'
  },
  creatortag: {
    color: 'red',
    fontFamily: 'didot',
    marginBottom: '60px'
  },
  explaining: {
    fontFamily: 'didot',
    fontSize: '17px'
  },
  bottombar: {
    color: 'white',
    fontFamily: 'didot',
    fontWeight:'bold'
  },
}



const App = () => (
  <React.StrictMode>
    <div style={styles.overall}>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * *
      </h3>
      <h1 style={styles.titlebar}>
         V I E T N U M B E R
      </h1>
      <h3 style={styles.stars}>
         * * * * * * * * * * * * * * * * * * * *
      </h3>
      <h2 style={styles.creatortag}> 
        Created by Edil
      </h2>
      <div style={styles.explaining}>
        <h2> Converting English numbers into Vietnamese words</h2>
      <ReadNumber />
      </div>
    </div>
    
    <div style={styles.bottombar}>  -for MyMy Hoang </div>
  </React.StrictMode>
)

render(<App />, document.getElementById('root'))