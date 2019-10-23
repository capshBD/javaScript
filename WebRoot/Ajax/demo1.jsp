<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>Ajax开发框架</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">
		var http_request=false;
		function send_request(url,pos){
			//开始初始化XMLHttpRequest对象
			if(window.XMLHttpRequest){
				http_request=new XMLHttpRequest();
				if(http_request.overrideMimeType){
					http_request.overrideMimeType("text/xml");
				}
			}else if(window.ActiveXObject){
				try {
					http_request=new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						http_request=new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {
					}
				}
			}
			
			if(!http_request){
				window.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}
			
		    // 确定发送请求的方式和URL以及是否同步执行下段代码
		    http_request.open("GET", url, true);
			http_request.send(null);
			http_request.onreadystatechange = function(){
				if(http_request.readyState==4){
					if(http_request.status==200||http_request.status==304){
						document.getElementById(pos).innerHTML=http_request.responseText;
					}else{
						alert('error');
					}
				}
			};
			
			
		}
		
		/* function processRequest(){
			if(http_request.readyState==4){
				if(http_request.status==200){
					alert(http_request.responseText);
				}else{
					alert("异常!");
				}
			}
		} */
		
		function userCheck(){
			var f=document.form1;
			var username=f.username.value;
			if(username=="") {
				window.alert("用户名不能为空。");
				f.username.focus();
				return false;
			}else{
				send_request('sample.jsp?username='+username,'aa');
			}
		}
		
		function showRoles(pos){
			var role=document.getElementById(pos);
			if(role.parentNode.style.display){
				role.parentNode.style.display="";
			}
			else{
				role.parentNode.style.display="none";
					return;
			}
			 
			role.innerHTML = "正在读取数据...";
			send_request('sample2.jsp?playPos='+pos,pos);
		}
	</script>
  </head>
  
  <body>
    <form name="form1" action="" method="post">
	用户名:<input type="text" name="username" value="">&nbsp;
		 <input type="button" name="check" value="唯一性检查" onClick="userCheck()">
		 <input type="submit" name="submit" value="提交">
	</form>
	
	<table width="200" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td height="20">
				<a href="javascript:void(0)" onclick="showRoles('pos1')">经理室</a>
			</td>
		</tr>
		<tr style="display: none">
			<td height="20" id='pos1'></td>
		</tr>
		<tr>
			<td height="20">
				<a href="javascript:void(0)" onclick="showRoles('pos2')">研发部</a>
			</td>
		</tr>
		<tr style="display: none">
			 <td height="20" id='pos2'></td>
		</tr>
	</table>
	<a id='aa'></a>
  </body>
</html>
