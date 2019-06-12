import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import BrightnessHigh from '@material-ui/icons/BrightnessHigh';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    top: 0
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class PrimarySearchAppBar extends React.Component {

  enterPressed = (e) => {
    //this hack, this is bad code! I forgot how to bind correctly and will fix when I get around to it
    var that = this;
    if (e.key === 'Enter') {
      //fetch for current data
      console.log()
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip},us&appid=ce56b921ff906a7678e66938677bff2e`)
        .then(function(response) {
          return response.json();
        })
        .then(function(currentWeatherJson) {
          that.props.setCurrent(currentWeatherJson)
        });
        
      fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.props.zip},us&appid=ce56b921ff906a7678e66938677bff2e`)
        .then(function(response) {
          return response.json();
        })
        .then(function(currentWeatherJson) {
          that.props.setForecast(currentWeatherJson)
        });
    }    
  }

  changeText = (e) => {
    
    if(this.props.zip.length < 5){
      this.props.setZip(e.target.value)
    }
    else{
      this.props.setZip(e.target.value.slice(0,5))
    }
  }



  render() {
    const { classes } = this.props;



    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Find Weather by Zip Code:
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                autoFocus={true}
                value = {this.props.zip} 
                onChange={(e=>this.changeText(e))}
                onKeyPress={(e)=>this.enterPressed(e)}
                type="number"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div >
              <IconButton color="inherit">
                <BrightnessHigh />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);