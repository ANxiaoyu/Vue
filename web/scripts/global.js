function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement,nextSibling);
	}
}

function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+= value;
		element.className=newClassName;
	}
}

function highlightPage(href){
	var headers=document.getElementsByTagName('header');
	if(headers.length==0)return false;
	var navs=headers[0].getElementsByTagName('nav');
	if(navs.length==0)return false；
	var links=navs[0].getElementsByTagName('a');
	var linkurl;
	for(var i=0;i<links.length;i++){
		linkurl=link[i].getAttribute("href");
		if(window.location.href.indexOf(linkurl)!=-1){
			link[i].className="here";
			var linktext=link[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext); //为每个页面的body元素添加id属性
		}
	}
}
addLoadEvent(highlightPage);

function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x && ypos==final_y){
		return true;
	}
	if(xpos<final_x){
		var dist=Math.ceil((final_x-xpos)/10);
		xpos=xpos+dist;
	}
	if(xpos>final_x){
		var dist=Math.ceil((xpos-final_x)/10);
		xpos=xpos-dist;
	}
	if(ypos<final_y){
		var dist=Math.ceil((final_y-ypos)/10);
		ypos=ypos+dist;
	}
	if(ypos>final_y){
		var dist=Math.ceil((ypos-final_y)/10);
		ypos=ypos-dist6;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	movement=setTimeout(repeat,interval);
}

function showSection(id){
	var sections=document.getElementsByTagName("section");
	for(var i=0;i<sections.length;i++){
		if(sections[i].getAttribute("id")!=id){
			sections[i].style.display="none";
		}else{
			sections[i].style.display="block";
		}
	}
}

function prepareInternalnav(){
	var articles=document.getElementsByTagName("srticle");
	if(articles.length==0) return false;
	var navs=articles[0].getElementsByTagName("nav");
	if(navs.length==0)return false;
	var nav=navs[0];
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var sectionId=links[i].getAttribute("href").spilt("#")[1];
		if(!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display="none";
		links[i].destination=sectionId;
		links[i].onclick=function(){
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareInternalnav);

function stripeTables(){
	if(!document.getElementsByTagName)return false;
	var tables=document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		rows=tables[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				rows[j].style.backgroundColor="#ffc";
				odd=false;
			}else{
				odd=true;
			}
		}
	}
}
addLoadEvent(stripeTables);

function highlightRows(){
	if(!document.getElementsByTagName)return false;
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].oldClassName=rows[i].className;
		rows[i].onmouseover=function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout=function(){
			this.className=this.oldClassName;
		}
	}
}
addLoadEvent(highlightRows);

//显示“缩略语列表”
function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement||!document.createTextNode) return false;
	//获取所有的缩略词
	var abbreviations=document.getElementsByTagName('abbr');
	if(abbreviations.length<1) return false;
	var defs= new Array();

	//遍历所有的缩略词并存在数组defs中
	for(var i=0;i<abbreviations.length;i++){
		if(abbreviations.childNodes.length<1) continue;
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;
	}

	//创建定义列表
	var dlist=document.createElement("dl");

	//遍历所有定义
	for(key in defs){
		var definition=defs[key];
		//创建定义标题及标题文本
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述及描述文本
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1)return false;

	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChlid(header_text);

	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);


}
addLoadEvent(displayAbbreviations);