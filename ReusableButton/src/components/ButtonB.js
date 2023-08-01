import React from 'react'
import ReusableButton from './../components/ReusableButton';
function ButtonB() {

    const handleClickB = () => {
        alert('ButtonB is clicked');
    }
  return (
    <div>
        <h2>Button B Functionality</h2>
      <ReusableButton label="Click Me" onClick={handleClickB} style={{ background: 'red', color: 'white' }}/>
    </div>
  )
}

export default ButtonB
