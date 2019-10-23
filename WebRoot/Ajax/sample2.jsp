<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

String playPos = request.getParameter("playPos");
	Thread.sleep(1000);
	if("pos1".equals(playPos))
		out.print("&nbsp;&nbsp;总经理<br>&nbsp;&nbsp;副总经理"+playPos);
	else 
		out.print("&nbsp;&nbsp;总工程师<br>&nbsp;&nbsp;软件工程师"+playPos);
%>
<html>
	<head></head>
	<body>
		<select>
			<option value="1">11</option>
			<option>2</option>
			<option>3</option>
		</select>
	</body>
	<script type="text/javascript">
	console.info(document.getElementsByTagName('select')[0]);
	document.getElementsByTagName('select')[0][0].text=111
		console.info(document.getElementsByTagName('select')[0][0]);
	</script>
</html>
