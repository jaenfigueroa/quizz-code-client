import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { text } from './Text';

//////////////////////////////////////////////////
export const EditorTR = () => {

  const [textCode, setTextCode] = useState('')

  useEffect(()=> {

    console.log(textCode)

  },[textCode])
  //////////////////////////////////////////////////
  return (
    <Editor
      // className='exercise__code'
      height="100%"
      defaultLanguage="javascript"
      defaultValue={text}
      theme='vs-dark'
      onChange={(value) => setTextCode(value)}
    />
  )
}
