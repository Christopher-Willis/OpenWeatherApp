import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    // backgroundColor:"#212121"
  },
  avatar: {
    backgroundColor: "#9CCC65",
  },
}));

const kelvinToF = (number) =>{
  return ((number - 273.15) * 9/5) + 32
}

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  // const timeOfReport = new Date(0)
  // timeOfReport.setUTCSeconds(props.current.dt)
  const iconPicture = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`
  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            <img src={iconPicture} alt="weather icon" height="42" width="42"/>
          </Avatar>
        }
        titleTypographyProps={{variant:'h4' }}
        title={parseInt(kelvinToF(parseInt(props.current.main.temp)))+"°F"}
        subheader={props.current.weather[0].description}
        subheaderTypographyProps={{variant:'h6' }}
      />
      <CardContent>
        <Typography  variant="body1" color="textPrimary" component="p">
          Hi/Lo: {parseInt(kelvinToF(parseInt(props.current.main.temp_max)))+"°F/"+parseInt(kelvinToF(parseInt(props.current.main.temp_min)))+"°F"}
        </Typography>
         {/* <Typography  variant="body1" color="textPrimary" component="p">
          At: {timeOfReport.toLocaleString()}
        </Typography> 
        not  feature, so removed, but useful*/
        }
      </CardContent>
    </Card>
  );
}