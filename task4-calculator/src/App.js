import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState("");

  const handleClick = (e)=>{
    setResult(result.concat(e.target.value))
  }

  const clearDisplay =()=>{
    setResult("");
  }

  const calc=()=>{
    setResult(eval(result).toString());
  }
 
  return (
    <div className="App">
      <input type='text' placeholder='0' value={result} id='answer'/>
      <input type='button' value="9" className='button' onClick={handleClick}/>
      <input type='button' value="8" className='button' onClick={handleClick}/>
      <input type='button' value="7" className='button' onClick={handleClick}/>
      <input type='button' value="6" className='button' onClick={handleClick}/>
      <input type='button' value="5" className='button' onClick={handleClick}/>
      <input type='button' value="4" className='button' onClick={handleClick}/>
      <input type='button' value="3" className='button' onClick={handleClick}/>
      <input type='button' value="2" className='button' onClick={handleClick}/>
      <input type='button' value="1" className='button' onClick={handleClick}/>
      <input type='button' value="0" className='button' onClick={handleClick}/>
      <input type='button' value="." className='button' onClick={handleClick}/>
      <input type='button' value="+" className='button' onClick={handleClick}/>
      <input type='button' value="-" className='button' onClick={handleClick}/>
      <input type='button' value="*" className='button' onClick={handleClick}/>
      <input type='button' value="/" className='button' onClick={handleClick}/>
      <input type='button' value="%" className='button' onClick={handleClick}/>
      <input type='button' value="Clear" className='button button1' onClick={clearDisplay}/>
      <input type='button' value="=" className='button button1' onClick={calc}/>
    </div>
  );
}

export default App;
<input type='button' value="." className='button'/>
