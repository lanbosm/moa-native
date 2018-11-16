
(function(win){
	var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var native = '';
 	

   

	var moa={
		EventBus:EventBus,
		//返回app
		handleBackApp(){
			var code = {testString: "goBack",}
           if(isiOS){ 
            	window.webkit.messageHandlers.buttonClickGoBack.postMessage(code)
			  }else{
			   	window.moa.handleBackApp1();
			   	
			  }
		},
		

		//自动登录
		 handleAutoLogin(cb){
		 
		// 	alert("333")
		// 	// 

			
			$moa.EventBus.addEventListener("sso", function(res){
					alert('触发回调')
					alert(res.target)
			});
			
			window.moa.showAndroid('sss');
		//	window.moa.showAndroid()
			// var result = testData.result
	        //此处不能直接将回调函数传给iOS需要将回调函数转成字符串,其他的保持不变即可
	      //   testData.result = result.toString()
	      //   window.webkit.messageHandlers.buttonClickGetUserInfo.postMessage(testData);
			
		},
		handleAutoLoginCallBack(){
			var res={
				empName:"欧阳红2",
      			img_url:"http://192.168.117.151/group1/M00/00/01/wKh1l1tICa2AWBUwAAGOQMQZWts825.jpg",
      			companyId:"38",
				deptId:"39",
				deptName:"产品研发运营部",
				userid:"114"
			}
			
			$moa.EventBus.dispatch("sso",res);
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
 
	

})(window)
