import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';
import {ObjectEditor, ArrayEditor} from 'object-editor-react';
import { SchemaTypes } from 'object-editor-react';
import jsonData from './testjson.json';


const Dashboard2 = () => {
  const [data, setData] = useState(jsonData);
  const handleSave = (newData) => {
    setData(newData);
  };

  const schema = {
    foo: SchemaTypes.string({ required: true }),
    
    bar: {
        baz: SchemaTypes.arrayOf({
            nested: SchemaTypes.string(),
        }),
    },
}

  const returnEditor = () => {
    return (
      <h1>Test</h1>
    )
  }

  return (
    <div>
      {() => returnEditor()}
    </div>
  );
};
export default Dashboard2