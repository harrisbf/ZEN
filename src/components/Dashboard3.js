import React, { Component } from 'react'
import {ObjectEditor} from 'object-editor-react';
import { SchemaTypes } from 'object-editor-react';
import jsonData from './testjson.json';

export default class Dashboard3 extends Component {
    
  render() {
    const schema = {
        foo: SchemaTypes.string({ required: true }),
        
        bar: {
            baz: SchemaTypes.arrayOf({
                nested: SchemaTypes.string(),
            }),
        },
    }
    return (
      <div>
        <ObjectEditor
            type={schema}
            object={jsonData}
            onSave={() => {}}
            locale="en"
            theme="light"
            height="400px"
        />
      </div>
    )
  }
}
