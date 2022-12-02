//1导入express
const express = require("express");
//2创建web服务器
const app = express();
const port = 3000;
const apiRouter=require('./router')
app.use(express.urlencoded({extended:false}))
app.use('/api',apiRouter)
//3调用app.listen(端口号,启动成功后的回调函数),启动服务器
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
