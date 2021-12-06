
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SoundQualityCard({quality, setQuality, title, body, component: Component}) {
    const handleChange = (event) => {
        event.preventDefault()
        console.log("SoundQualityCard handleChange() event.target.value: ", event.target.value)
        setQuality(event.target.value);
      };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent >

        <Typography variant="h5" component="div">
          {title}
        </Typography>
       
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions className="soundQualityCardActions" >
        <FormControl  className="soundQualityFormControl" variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={quality}
            onChange={handleChange}
            label="quality"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"normal"}>Normal</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
            </Select>
        </FormControl>
            
      </CardActions>
    </Card>
  );
}




