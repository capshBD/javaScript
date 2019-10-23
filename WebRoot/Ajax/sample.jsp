<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

String userName=request.getParameter("username");
Thread.sleep(1000);
  	if(userName.equals("admin")){
  		throw new Exception("模拟ajx请求过程中的异常"); 
  		out.print(userName+"该用户名已经被占用");
  	}else{
  		out.print(userName+"请继续"); 
  	}
%>
