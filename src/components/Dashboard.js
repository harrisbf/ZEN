import React, {useState} from 'react'
import './Dashboard.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";
import zen_logo from '../assets/Zen.png';
import grammar from './grammar.json';
import ReactJson from 'react-json-view';
import JsonEditor from 'react-json-editor-ui'

export default function Dashboard() {
  const [isJson, setIsJson] =  useState(grammar);
  const theme = createTheme();
  let dataList = [];
  //field: 'id', headerName: 'ID', width: 70 
  
  /*const getParentFields = (json, path = '', parentFields = []) => {
    if (typeof json !== 'object' || !json) {
      // If the value is not an object, we have reached a leaf node.
      // Add the parent fields to the result array and return.
      parentFields.push(path);
      return parentFields;
    }
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        getParentFields(json[key], path + key + '.', parentFields);
        //getParentFields(json[key], path + key, parentFields);
      }
    }
  
    return parentFields;
  }*/

  //const parentFields = getParentFields(grammar);
  //console.log(parentFields);
  /*const getAllFields = (json) => {
    let fields = Object.keys(json);
    for (let field of fields) {
      if (typeof json[field] === "object") {
        fields = fields.concat(getAllFields(json[field]).map(childField => field + "." + childField));
      }
    }
    return fields;
  }
  dataList = getAllFields(grammar);
  
  const fields = getParentFields(grammar);*/

  const columns = [
    { field: dataList[0], headerName: dataList[0], width: 70 },
  ];
  //  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: dataList[0] },
  ];
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div className="editor_label">Editor</div>
        <div className="grammar_label">Grammar</div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container p={10} sx={{display: 'flex', justifyContent: 'space-around'}}>
          <Grid item xs={5}  component={Paper} elevation={2} round={true} sx={{height: "100vh", overflowY: "scroll"}}>
            <Box
              sx={{
                p: 8,
              }}
            >
              <JsonEditor
                data={grammar}
                onChange={data => {setIsJson(data)}}
                optionsMap={{
                  color: [
                    { value: 'red', label: 'Red' },
                    { value: 'blue', label: 'Blue' },
                  ],
                }}
                />
            </Box>
          </Grid>
          <Grid item xs={5} component={Paper} elevation={2} round={true} sx={{height: "100vh", overflowY: "scroll"}}>
            <Box  
              sx={{
                p: 8,
                lineHeight: "50px",
                fontSize: "16px",
              }}
            >
              <ReactJson src={isJson} enableClipboard={false} name={"Grammar"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

