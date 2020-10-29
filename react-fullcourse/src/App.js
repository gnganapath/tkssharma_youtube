import React from 'react';
import { Route, Switch, Redirect,BrowserRouter } from 'react-router-dom';
import './App.css';
import Child from './components/child';
import Home from './components/home';
import About from './components/about';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App(props) {
  const classes = useStyles();
  console.log(props.data);
  return (
    <>
    <h2>React JS Full course - Course particians- Video</h2>
    <BrowserRouter>
      <Switch>
         

          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
                <Route exact path="/">    <Redirect to="/Home" />  </Route>

                  <Route exact path="/Home" component={Home} />

                  <Route exact path="/About" component={About} />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>
          </div>
      </Switch>
    </BrowserRouter>
    <Child data={props.data}/>
    </>
  );
}

export default App;
