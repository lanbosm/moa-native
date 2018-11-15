!function(win){
	var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var native = '';
 
	var moa={
		//返回app
		handleBackApp(){
			var code = {testString: "goBack",}
           if(isiOS){ 
            	window.webkit.messageHandlers.buttonClickGoBack.postMessage(code)
			  }else{
			   	window.moa1.handleBackApp1();
			   	alert("2222")
			  }
		},
		

	
		//自动登录
		 handleAutoLogin(){
		 
		// 	alert("333")
		 	 var res={
		 	 	empName:"111",
     			
		        }
		
			this.buttonClickTest({
	             result: function(data) {
	             // demo.innerHTML = data["test"];
	              // alert(data["test"])
	              this.res.empName = data["test"]
	              }
	            })
			 return Promise.resolve(res);
		  // var testData={'ss':12};
		  // window.webkit.messageHandlers.buttonClickGetUserInfo.postMessage(testData);
			
		},
	    buttonClickTest(testData) {

	        var result = testData.result
	        //此处不能直接将回调函数传给iOS需要将回调函数转成字符串,其他的保持不变即可
	        testData.result = result.toString()
	        window.webkit.messageHandlers.buttonClickGetUserInfo.postMessage(testData);
	    },

		//查看附件
		handleViewAttach(url){
			alert("查看附件"+url)
		},
		//选人
		handleSelectMember(uid){
			

			var res=[
				{empName:"欧阳红的部下1",userid:"115"},
				{empName:"欧阳红的部下2",userid:"116"}

			]
			return Promise.resolve(res);
				
			
		}


	}

	win.$moa=moa;
    win.moa={}
	

}(window)
