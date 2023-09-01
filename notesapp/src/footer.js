import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer className='footer'>
        <p style={{textAlign:'center' , paddingTop: '20px', fontWeight:600}}>Copyright &copy; {year}, All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Footer
