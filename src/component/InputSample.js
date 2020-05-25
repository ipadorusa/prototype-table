import React from 'react'
import { useState, useRef } from 'react'


function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const { name, nickname } = inputs;
  const nameInput = useRef();

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
    
  }
  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} ref={nameInput} />
      <input placeholder="닉네임" name="nickname" onChange={onChange} />
      <button type="button" onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} {(nickname) === '' ? '' : '(' + nickname + ')'}
      </div>
    </div>
  )
}

export default InputSample;