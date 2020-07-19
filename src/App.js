import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactFCCtest from 'react-fcctest';
import { placeholder } from './placeholder';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => setContent(placeholder), []);

  return (
    <div className="App">
      <ReactFCCtest />
      <textarea id="editor" onChange={(e) => setContent(e.target.value)}>
        {placeholder}
      </textarea>
      <div id="preview">
        <ReactMarkdown source={content} />
      </div>
    </div>
  );
}

export default App;
