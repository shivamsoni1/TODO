const Task = require('../models/task');

exports.getPost = async (req,res,next)=>{
  const result = await Task.find();
  res.status(200).send(result);
 
 
}
exports.createPost = (req,res,next) => {
 const tname = req.body.tname;
 const status = req.body.status || false;
 const task = new Task({
  tname:tname,
  status:status
 })
 task.save().then(async ()=>
 {
  const result =await Task.find();
  res.status(200).json({result:result});
 }
 ).catch(err => console.log(err));
}
exports.getCompletePost = async (req,res,next) => {
   const result = await Task.find();
   const filterResult = result.filter(task => task.status === true );
   res.status(200).send(filterResult);
}

exports.getincompletePost = async (req,res,next) => {
   const result = await Task.find();
   const filterResult = result.filter(task => task.status === false );
   res.status(200).send(filterResult);
}
exports.delete = async (req,res,next) => {
   const result =  await Task.findByIdAndRemove(req.params._id);
   result = await Task.find();
   res.status(200).send(result);
}
exports.update = async (req,res,next) => {
   const result = await Task.findByIdAndUpdate(req.params.id,{tname:tname,status:true});
   result = await Task.find();
   res.status(201).json({
      task:result,
   })
}