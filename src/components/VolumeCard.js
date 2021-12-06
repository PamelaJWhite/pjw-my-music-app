
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function valuetext(value) {
    return `${value}°C`;
  }
export default function VolumeCard({volume, setVolume, title, body, component: Component}) {
    const handleChange = (event) => {
      event.preventDefault()
      console.log("inside VolumeCard handleChange()")
      console.log("event.value: ", event.target.value)
      setVolume(event.target.value)
      console.log("handleChange() in VolumeCard set the volume to: ", volume)
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
                defaultValue={20}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks={true}
                min={0}
                max={100}
                onChange={handleChange} 
            />
        </Box>
      </CardActions>
    </Card>
  );
}