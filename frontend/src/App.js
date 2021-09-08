import React from 'react';
import {useState,useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TaskList from './component/TaskLIst'
import axios from 'axios'
import SplitButton from './component/splitButton'
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50 ,
    flexGrow: 1,
  },
  paper: {
    fontWeight: 'bold',
    fontSize: 'large',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#000',
  },
}));





export default function App() {
  const classes = useStyles();
  const [task,setTask] = useState('');
  const [taskList,setTaskList] = useState([])
  useEffect( () => {
  const fetchData = async ()=>{
  const result = await axios.get("http://localhost:4000");
  console.log(result);
  setTaskList(result.data);
  }
  fetchData();
 }, []);
 const deleteHandler = async (URL)=>{
   const result = await axios.delete(URL);
   setTaskList(result.data);
 }
 const updateHandler = async (URL)=>{
   const result = await axios.update(URL);
   setTaskList(result.data);
 }
  const submitHandler = async (e)=> {
   e.preventDefault();
   const body = {
     tname : task
   }
   const result =await axios.post("http://localhost:4000/createPost",body);
  setTaskList(result.data.result);
  }
  const CompleteHandler = async(URL)=>{
    const result = await axios.get(URL);
   setTaskList(result.data);
  }
  const RemainHandler = async (URL)=>{
    const result = await axios.get(URL);
    setTaskList(result.data);
  }
  const AllTask =async (URL)=>{
      const result = await axios.update(URL);
      setTaskList(result.data);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{  height: '100vh' }} >
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <Paper className={classes.paper} >TODO APP</Paper>
              </Grid>
              <Grid item xs={12}>
                <form onSubmit={submitHandler}>
                  <TextField id="outlined-basic" label="ADD TASK" variant="outlined" style={{width: '100%'}} onChange={(e)=>{setTask(e.target.value); console.log(task)}}/>
                  <Button variant="contained" color="primary" style={{marginTop : 20}} type='submit'>
                    Add task
                  </Button>
                </form>
              </Grid>
              <SplitButton style={{marginBottom:20}} complete={CompleteHandler} Remain={RemainHandler} ALL={AllTask}/>
              <TaskList task={taskList} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}



