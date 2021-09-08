import React from 'react';
import {useEffect,useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function TaskList({task,deleteHandler,updateHandler}) {
 const classes = useStyles();
 
 return(
 <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{  height: '100vh' }} >
          <div className={classes.root}>
           <Grid container spacing={3}>
            {
             task.map((task)=>{
              return(
               <Grid item xs={12}>
                <Paper className={classes.paper} key={task._id}>
                 <h3>{task.tname}</h3>
                 <Button variant="contained" color="primary" style={{marginTop : 20}} onClick={()=>deleteHandler(`http://localhost:4000/delete/${task._id}`)}>
                    Delete
                  </Button>
                  <Button variant="contained" color="primary" style={{marginTop : 20,marginLeft:20}} onClick={()=>updateHandler('http://localhost:4000/update/$(task._id)')} >
                    {task.staus ? 'Completed' : 'Mark as Compeleted'}
                  </Button>
                </Paper>
               </Grid>
              )
             })
            }
           </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
 )
}