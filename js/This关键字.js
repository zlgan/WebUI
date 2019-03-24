//自执行的函数
//必须弄清楚的概念

/*
	1、 this 关键字
	2、 prototype
	3、	对象与函数
	4、 闭包
	5、jquery框架原理
	6、js面向对象设计

*/
//1方式一

var jsTest={

	demo1:function(){
	var temp1=function(){return 'aa'};
	console.log(temp1);//返回函数本身
	console.log(typeof temp1);//function

	var temp3=(function(){return 'aa'});//同temp1


	var temp2=(function(){return 'aa'}())
	console.log(temp2);//aa
	console.log(typeof temp2);//string
},
//jquery
	demo12:(
	function(w){
		
		var person=function(name,sex){
			this.name=name;
			this.sex=sex;
			
			this.showInfo=function(){
				alert("name="+this.name+"--sex="+this.sex);
			}
		}
		
		w.person=person;
	}
)(window)
}


//jsTest.demo1();


//var p1=new person('张三','男');
//p1.showInfo();



var obj1={name:"zhangsan",sex:"男"};

var string1="this is test string";

var string2=new String("this is test string");

String.prototype.Show=function(){
	
	alert(this);
}

//alert(obj1.prototype); //undefined

//alert(typeof obj1.prototype)//undefined

//alert(string1.prototype); //undefined

//string1.Show(); //string1.show is not a function
//string2.Show();

//showInfo();



function aa()
{
	alert("window.aa");
}

var myobj=
{
		aa:function(){
			
		alert("myobj.aa");
		}
}

function aa()
{
	alert("window.aa again");
}


aa();

myobj.aa();

//jsTest.demo2;





