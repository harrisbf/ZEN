import React, {useState} from 'react'
import schema from './Schema'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";
import zen_logo from '../assets/Zen.png';
import { DataGrid } from '@mui/x-data-grid';
import grammar from './testjson.json'

export default function Dashboard() {
  //const [columns, setColumns] =  useState([]);
  const theme = createTheme();
  let dataList = [];
  //field: 'id', headerName: 'ID', width: 70 
  
  const getParentFields = (json, path = '', parentFields = []) => {
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
  }

  //const parentFields = getParentFields(grammar);
  //console.log(parentFields);
  const getAllFields = (json) => {
    let fields = Object.keys(json);
    for (let field of fields) {
      if (typeof json[field] === "object") {
        fields = fields.concat(getAllFields(json[field]).map(childField => field + "." + childField));
      }
    }
    return fields;
  }
  dataList = getAllFields(grammar);

  console.log("BFH",dataList);
  
  const fields = getParentFields(grammar);
  //console.log(fields);

  const columns = [
    { field: dataList[0], headerName: dataList[0], width: 70 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <>
      <div className=''>
        <label className=''>Editor</label>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} round={true}>
          <Box
            sx={{
              my: 2,
              p: 5,
            }}
          >
            <label>Object</label>
            <DataGrid
              rows={rows}
              columns={columns}
              paginationModel={{ page: 0, pageSize: 5 }}
              checkboxSelection
            />
          </Box>
        </Grid>
      </div>
    </>
  )
}

