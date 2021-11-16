import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function valuetext(value) {
    return `${value}°C`;
  }
  

export default function VolumeCard({volume, setVolume, title, body, component: Component}) {
    const handleChange = () => {
        setVolume(!volume)
    }
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
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
        </Box>
      </CardActions>
    </Card>
  );
}