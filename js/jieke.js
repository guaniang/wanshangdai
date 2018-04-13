window.onload = function() {
            var oBox = document.getElementById("gong");
			var oXia = document.getElementById("gong1");
			
					oBox.onmousemove = function() {
						oBox.style.color="red";
						oXia.style.display="block";
					}
					oBox.onmouseout=function(){
						oXia.style.display="none";
						oBox.style.color="";
					}				
// ==========================================================================           
    var box=document.getElementById("center2A2er");
    var oImg=box.getElementsByTagName("img")[0];
    var oBtn=box.getElementsByTagName("button");
    
    var dox=document.getElementById("center2A2er1");
    var aImg=dox.getElementsByTagName("img")[0];
    var aBtn=dox.getElementsByTagName("button");
    
    function hello(oBtn,oImg){
    var d=1;
	oBtn[1].onclick=function(){
		d=++d
		if(d>2){
			d=1;
		}
	 	oImg.src="img/wan"+d+'.jpg';
	 }
	oBtn[0].onclick=function(){
		d=--d
		if(d<1){
			d=2;
		}
	 	oImg.src="img/wan"+d+'.jpg';
	 }
	}
    hello(oBtn,oImg);
    hello(aBtn,aImg);

	//=========================================================================	
	// 放大	
	var oBanner = document.getElementById("bannerA")
	var oba = oBanner.getElementsByTagName("li")
	for(var i = 0; i < oba.length; i++) {
		oba[i].index = i;
		oba[i].onmouseover = function() {
				for(var i = 0; i < oba.length; i++) {
					oba[i].className = "";
				}
				oba[this.index].className = "select";
		}
	}
	//====================================================================	
	//	选项卡
	//1.获取元素
	
	var oDiv = document.getElementById("qwer");
	var oLi = oDiv.getElementsByTagName("li");
	var oSelect = oDiv.getElementsByTagName('div');
//1111111111111111111111111111111111111111111111111111111	
	var oxuan=document.getElementById("xuan");
	var oal=oxuan.getElementsByTagName("li");
	var obox=oxuan.getElementsByTagName('div');
	var oa=oxuan.getElementsByTagName("a");
	for(var i=0;i<oa.length;i++){
		oa[i].innerHTML=oa[i].innerHTML.substring(0,20)+'...'
	}
	//2.绑定事件
	function hel(oLi,oSelect){
		for(var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
				for(var i = 0; i < oSelect.length; i++) {
					oSelect[i].className = "";
					oLi[i].className = "";
				}
				this.className = "select";
				oSelect[this.index].className = "select";
		}
	}
	}
		hel(oLi,oSelect);
	    hel(oal,obox)
//=====================================================================	

//轮播图片
    var tu=document.getElementById("tuA");
    var bImg=tu.getElementsByTagName("img")[0];
    var bBtn=tu.getElementsByTagName("button");
    
    function fn(bBtn,bImg){
    var a=1;
	bBtn[1].onclick=function(){
		a=++a
		if(a>4){
			a=1;
		}
	 	bImg.src="img/lunbo"+a+'_03.jpg';
	 }
	bBtn[0].onclick=function(){
		a=--a
		if(a<1){
			a=4;
		}
	 	bImg.src="img/lunbo"+a+'_03.jpg';
	 }
	}
    fn(bBtn,bImg);

//====================================================================

    var box=document.getElementById("box");
    var List=document.getElementById("list");
    var  oImg=List.getElementsByTagName("img");
    var oBtn=box.getElementsByTagName("button");
    var sum=0; //计数器
    var num=0;//步数初始化
    var step=10;//每30毫秒移动的量
    var imgIndex=0;//img记录索引
    var dotIndex=0;//dote记录索引
    var boo=true;
    List.timer="";
    box.timer="";

    function move(width,step){    //一个画面的运动函数
        num=Math.abs(width/step); // 一个画面走多少步
       List.timer=setInterval(function(){
            if(sum>=num){        //一个画面是否运动完成 判断
                clearInterval(List.timer);//一个画面运动完 关闭定时器
                sum=0;            //归零计步器
                boo=true;        //开启点击事件
                return;
            }
            List.style.marginLeft=parseInt(getCss(List,"marginLeft"))+step+"px";
            sum++;
        },30)
    }
    function autoPlay(){
        box.timer=setInterval(function(){
            oBtn[1].onclick();
        },1600);
    }
    autoPlay();//自动轮播

    box.onmousemove=function(){
        clearInterval(box.timer);
    }
    box.onmouseout=function(){
        autoPlay();
    }

    oBtn[1].onclick=function(){
        if(boo){
            boo=false;
            if(imgIndex>=oImg.length-1){
                List.style.marginLeft="0px";
                imgIndex=0;
            }
            move(670,-step);
            imgIndex++;
        }
    }
    oBtn[0].onclick=function(){
        if(boo){
            boo=false;
            if(imgIndex<=0){
                List.style.marginLeft="-3350px";
                imgIndex=oImg.length-1;
            }
            move(670,step);
            imgIndex--;
            if(dotIndex<=0){
            }
            dotIndex--;
        }
    };


    function change(n){
        if(boo){
            boo=false;
            if(n>dotIndex){
         var width=670*Math.abs(n-dotIndex);
                move(width,-step);
            }else {
                var width=670*Math.abs(n-dotIndex);
                move(width,step);
            }

         imgIndex=dotIndex=n;
        }
    }
    function getCss( obj, attr ) {
        return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
    }





	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}