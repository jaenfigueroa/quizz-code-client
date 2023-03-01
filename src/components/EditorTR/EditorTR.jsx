import React from 'react'
import Editor from "@monaco-editor/react";
import { text } from './Text';

//////////////////////////////////////////////////
export const EditorTR = () => {


  //////////////////////////////////////////////////
  return (
    <Editor
      // className='exercise__code'
      height="100%"
      defaultLanguage="javascript"
      defaultValue={text}
      theme='vs-dark'
    // onChange={(value) => setContent(value)}
    />
  )
}
