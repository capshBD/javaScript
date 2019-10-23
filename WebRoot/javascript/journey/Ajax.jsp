<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


	<%
		String id=request.getParameter("id");
		String name=request.getParameter("name");
		out.print(id+"|"+name);
	 %>
