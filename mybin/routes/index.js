var express = require('express');
var router = express.Router();

var mysql = require('mysql');


var con = mysql.createConnection({
	
	host:'localhost',
	port:'3306',
	user:'baiduUser',
	password:'',
	database:'web5'
});

router.get('/baiduNews',function(req,res,next){
	// 读取数据  从数据库中来
	// 下面的设置参数是数据库那边的服务器
	// user 是表名
	//console.log('req:'+req);
	//console.log('res:'+res);
	//console.log('next:'+next);
	var sql = "SELECT * FROM `baidu`";
	var sql1= "SELECT * FROM `baidu` WHERE channel='推荐'";
	var sql2= "SELECT * FROM `baidu` WHERE channel='百家'";
	var sql3= "SELECT * FROM `baidu` WHERE channel='本地'";
	var sql4= "SELECT * FROM `baidu` WHERE channel='图片'";
	var sql5= "SELECT * FROM `baidu` WHERE channel='娱乐'";
	var classify=[];
	con.query(sql1,function(err,results,f){
		classify.push(results);
		//console.log(columns);
		//console.log('classify:'+classify);
		//console.log(results.length);
		//res.send({state:'ok',data1:results[0]})
	})
	con.query(sql2,function(err,results,f){
		classify.push(results);	
	})
	con.query(sql3,function(err,results,f){
		classify.push(results);	
	})
	con.query(sql4,function(err,results,f){
		classify.push(results);	
	})
	con.query(sql5,function(err,results,f){
		classify.push(results);	
	})
	
	con.query(sql,function(err,results,f){
		//console.log(results[3].img);
		//console.log(err);
		//console.log('results11:'+results);
		//console.log(f);
		// res.send({state:'ok',data:results[0]})
		console.log(classify);
		res.render('news',{state:'ok',datas:results,classifys:classify})
		
	})
	
	
	
})



/*admin*/
router.get('/baiduAdmin',function(req,res,next){
	/*console.log('req:'+req);
	console.log('res:'+res);
	console.log('next:'+next);*/
	var sql = "SELECT * FROM `baidu`";

	con.query(sql,function(err,results,f){
		//console.log(err);
		//console.log(results);
		// res.send({state:'ok',datas:results})
		// res.render('admin1',{data:results})
		res.render('admin',{datas:results});
	})
})

router.get('/addNews',function(req,res,next){
	console.log(req.query.title);
	//console.log(res);
	var tit = req.query.title;
	var img = req.query.img;
	var cont = req.query.content;
	var date = req.query.date;
	var col = req.query.column;  

	var sql=`INSERT INTO baidu (title,img,content,date,column) VALUES (?,?,?,?,?)`;
	//var sql=`INSERT INTO baidu (title,img,content) VALUES ("${tit}","${img}","${con}")`;
	con.query(sql,[tit,img,cont,date,col],function(err,results,f){

			res.send({state:'ok',message:'成功'})


	})
	con.end();

})
router.post('/addNews',function(req,res,next){

	
	//console.log(req.body.title);
	//console.log(res);
	var tit = req.body.title;
	var img = req.body.img;
	var cont = req.body.content;
	var date = req.body.date;
	var col = req.body.column;

	//console.log(con);
	var sql1 = "SELECT  `column` FROM `baidu` WHERE 1";

	/*con.query(sql,function(err,results,f){
		console.log('err:'+err);
		console.log(results);
		console.log('f:'+f);
		//res.send();
	})*/
	

	var sql="INSERT INTO baidu (title,img,content,date,column) VALUES (?,?,?,?,?)";
	//var sql=`INSERT INTO baidu (title,img,content) VALUES ("${tit}","${img}","${cont}")`;
	con.query(sql,[tit,img,cont,date,col],function(err,results,f){
		console.log('results:'+results);
			res.send({state:'ok',message:'成功'})


	})


	//con.end();

})

router.post('/removeLi',function(req,res,next){
	var id = req.body.id;

	var sql="DELETE FROM `baidu` WHERE `id`=?";
	con.query(sql,[id],function(err,results,f){

			res.send({state:'ok',message:'删除成功'})
	})
	//con.end();
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '百度新闻' });
});

router.post('/inserUser',function(req,res,next){

	var name = req.body.name;
	var age = req.body.age;
	var fav = req.body.fav; 

	var sql=`INSERT INTO user (name,age,fav) VALUES ("${name}","${age}","${fav}")`;
	con.query(sql,function(err,results,f){

			res.send({state:'ok',message:'插入成功'})


	})
	con.end();

})


module.exports = router;
