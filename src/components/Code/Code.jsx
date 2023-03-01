import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

////////////////////////////////////////////////
export const Code = ({content}) => {

  // const customStyle = {
  //   // fontFamily: 'Consolas, monospace',
  //   // fontSize: 50,
  // }

  ////////////////////////////////////////////////
  return (
    <SyntaxHighlighter
      // className='exercise__code'
      language="javascript"
      style={materialOceanic}
      // customStyle={customStyle}
      showLineNumbers>
      {content}
    </SyntaxHighlighter>
  )
}
