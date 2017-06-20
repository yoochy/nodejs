const http = require('http')
var cheerio = require('cheerio')
const url = 'http://v6.bang.weibo.com/czv/shishang'


http.get(url,function(res) {
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		var t = $('html').find('script').text();

        console.log(t);
        
    
})
	}).on('error',function(){
	console.log('获取课程数据出错')
})