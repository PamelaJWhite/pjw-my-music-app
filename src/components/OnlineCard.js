import {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicCard({handleChange, state, title, body, component: Component}) {
  
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
       
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
         <Switch {...label} checked={state} onChange={handleChange} />
      </CardActions>
    </Card>
  );
}
