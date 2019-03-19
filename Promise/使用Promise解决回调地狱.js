const fs=require('fs')

function getFileByPath(fpath){
	return new Promise(function(resolve,reject){
		fs.readFile(fpath,'utf-8',(err,dataStr)=>{
			if(err) return reject(err)
				resolve(dataStr)
		})
	})
}



//先读取文件1，再读取文件2，最后读取文件3
//注意：通过 .then 指定回调函数的时候，成功的回调函数，必须传，但是，失败的回调可以省略不写
//读取1
getFileByPath('./Promise/1.txt')
.then(function(data){
	console.log(data);

	//读取2
	return getFileByPath('./Promise/2.txt')
})
.then(function(data){
	console.log(data);


	//读取3
	return getFileByPath('./Promise/2.txt')
})
.then(function(data){
	console.log(data);
})