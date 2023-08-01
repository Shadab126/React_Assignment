import React from 'react';
import ReusableButton from './../components/ReusableButton';


const ButtonA = () => {

    // const [count, setCount] = useState('')

    // const increment = () => {
    //     setCount (count + 1);
    // }
  const handleClickA = () => {
    alert('ButtonA is clicked!');
  };

  return (
    <div>
      <h2>Button A Functionality</h2>
      {/* {count} */}
      <ReusableButton label="Click Me" onClick={handleClickA} style={{ background: 'blue', color: 'white' }} />
    </div>
  );
};

export default ButtonA;