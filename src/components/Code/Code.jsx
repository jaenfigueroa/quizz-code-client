import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code = ({content}) => {

  return (
    <SyntaxHighlighter
      language="javascript"
      style={materialOceanic}
      showLineNumbers>
      {content}
    </SyntaxHighlighter>
  )
}
