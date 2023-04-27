import React, { Component, useState } from 'react'
import JsonEditor from 'react-json-editor-ui'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'


export default class Dashboard2 extends Component {
  render() {
    const data = [{ foo: "bar" }, { foo: "baz" }];
    return (
      <>
          <ArrayEditor
            className={"edit-box"}
            type={schema}
            object={data}
            onUpdateElement={(el, index) => {}}
            onAddElement={(newElement) => {}}
          />
      </>
    )
  }
}
