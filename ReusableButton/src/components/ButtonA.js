import { useState } from "react";
import ReusableButton from './../components/ReusableButton';

const ButtonA = () => {

  const [count, setCount] = useState(0);
  
  const handleClickA = () => {
  setCount(count + 1);
  };

  const handleClickB = () => {
    setCount(count - 1);
    };

  return (
    <div>
      <h2>Button A Functionality</h2>
     
      <ReusableButton label="+" onClick={handleClickA} style={{ background: 'green', color: 'white' }} />
      {count}
      <ReusableButton label="-" onClick={handleClickB} style={{ background: 'red', color: 'white' }} />
    </div>
  );
};

export default ButtonA;