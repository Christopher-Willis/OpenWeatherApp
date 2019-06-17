import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth:120,
    minWidth:100
    // backgroundColor:"#212121"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: "#9CCC65",
  },
}));

const kelvinToF = (number) =>{
  return ((number - 273.15) * 9/5) + 32
}

const utcTimeToHour = (numberDate) => {
  // changes utc time to hours time so I can test for noon in each timezone vs just
  // 1200 UTC 
  var adjustedTimeHours = new Date(0); // The 0 there is the key, which sets the date to the epoch
  adjustedTimeHours.setUTCSeconds(numberDate);
  return adjustedTimeHours.getHours()
}

export default function ForecastWeather(props) {
  const theme = {
    backgroundColor:              props.theme===0? "#ffffff" : "#000000",
    colorPrimary:                 props.theme===0? "#000000" : "#ffffff",
  }
  const classes = useStyles();
  let noonForecast = []
  if(props.forecast.list){
      noonForecast = props.forecast.list.reduce((accumulator,weatherDay,index) => {
      if(accumulator.length === 0 && utcTimeToHour(weatherDay.dt) >12 && utcTimeToHour(weatherDay.dt)>9){
        accumulator.push(weatherDay)
        return accumulator
      }else if (accumulator.length >0 && utcTimeToHour(accumulator[0].dt)===utcTimeToHour(weatherDay.dt)) {
        accumulator.push(weatherDay)
        return accumulator
      }
      return accumulator
    },[] )
  }
  // const timeOfReport = new Date(0)
  // timeOfReport.setUTCSeconds(props.current.dt)
  // const iconPicture = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`
  return (
    noonForecast.map((dailyWeather,index)=> {
      return (
        
        <Card key={index} className={classes.card} style={{backgroundColor:theme.backgroundColor,color:theme.colorPrimary}} >
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={`http://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png`} alt="weather icon" height="42" width="42"/>
            </Avatar>
          }
          titleTypographyProps={{variant:'h6' }}
          title={parseInt(kelvinToF(parseInt(dailyWeather.main.temp)))+"°F"}
        />
        </Card>
      )
    })

    // <Card className={classes.card} >
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="Recipe" className={classes.avatar}>
    //         <img src={iconPicture} alt="weather icon" height="42" width="42"/>
    //       </Avatar>
    //     }
    //     titleTypographyProps={{variant:'h4' }}
    //     title={parseInt(kelvinToF(parseInt(props.current.main.temp)))+"°F"}
    //     subheader={props.current.weather[0].description}
    //     subheaderTypographyProps={{variant:'h6' }}
    //   />
    //   <CardContent>
    //     <Typography  variant="body1" color="textPrimary" component="p">
    //       Hi/Lo: {parseInt(kelvinToF(parseInt(props.current.main.temp_max)))+"°F/"+parseInt(kelvinToF(parseInt(props.current.main.temp_min)))+"°F"}
    //     </Typography>
    //      {/* <Typography  variant="body1" color="textPrimary" component="p">
    //       At: {timeOfReport.toLocaleString()}
    //     </Typography> 
    //     not  feature, so removed, but useful*/
    //     }
    //   </CardContent>
    // </Card>
  );
}