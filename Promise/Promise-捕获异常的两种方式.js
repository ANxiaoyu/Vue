const fs=require('fs')

function getFileByPath(fpath){
	return new Promise(function(resolve,reject){
		fs.readFile(fpath,'utf-8',(err,dataStr)=>{
			if(err) return reject(err)
				resolve(dataStr)
		})
	})
}


//读取1
getFileByPath('./Promise/1.txt')
.then(function(data){
	console.log(data);

	//读取2
	return getFileByPath('./Promise/2.txt');
},function(err){  //捕获异常的第一种方式
	console.log('这是失败的结果：'+err.message);
	//return 一个新的promise
	return getFileByPath('./Promise/2.txt');
})
.then(function(data){
	console.log(data);


	//读取3
	return getFileByPath('./Promise/2.txt')
})
.then(function(data){
	console.log(data);
})
//捕获异常的第二种方式
.catch(function(err){  //catch的作用：如果前面有任何的 Promise执行失败，则立即终止所有promise的执行，并马上进入catch去处理promise中抛出异常；
	console.log('这是自己的处理方式：'+err.message)
})