import React, { useState } from 'react';
import './App.css';
import { sortInputNumbers } from './sortInputNumbers'

let nums: number[] = []

function App(): JSX.Element {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<number | string>('')

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()

    // делаем из инпута массив чисел
    nums = input.split(',').map(item => {
      if (item.trim() !== '') { return +item } else { return NaN }
    })

    //вызов функции, в которую помещаем массив чисел nums
    setResult(sortInputNumbers(nums))

    setInput('')
  }

  return (
    <div className="app">
      <form className='app__form' action="submit" onSubmit={submitHandler}>
        <input type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button>Push</button>
      </form>

      <div>
        {result}
      </div>
    </div>
  );
}

export default App;
