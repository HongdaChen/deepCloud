	<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<meta name="viewport"
	content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<title>阳关心理咨询 后台管理系统</title>
<link type="image/x-icon" rel="icon" href="static/images/heart.png">
<link rel="stylesheet" href="res/layui/css/layui.css">
</head>
<body class="layui-layout-body">
	<div class="layui-layout layui-layout-admin">
		<div class="layui-header">
			<div class="layui-logo">阳光心理后台布局</div>
			<!-- 头部区域（可配合layui已有的水平导航） -->
			
			<ul class="layui-nav layui-layout-right">
				<li class="layui-nav-item"><a href="javascript:;"> <img
						src="http://t.cn/RCzsdCq" class="layui-nav-img" alt=""> zyq
				</a>
					<dl class="layui-nav-child">
						<dd>
							<a href="">基本资料</a>
						</dd>
						<dd>
							<a href="">安全设置</a>
						</dd>
					</dl></li>
				<li class="layui-nav-item"><a href="">退出</a></li>
			</ul>
		</div>
<%@ include file="manage-side.jsp" %>
		<div class="layui-body">
			<!-- 内容主体区域 -->
			
			<div style="padding: 15px;">
			  <form action="Upload" method="post" enctype="multipart/form-data">
      数据：<input type="file" name="data">
     <input type="submit" value="上传">
      </form>

				<table class="layui-table">
					<colgroup>
						<col width="150">
						<col width="200">
						<col>
					</colgroup>
					<thead>
						<tr>
							<th>学号</th>
							<th>姓名</th>
							<th>性别</th>
							<th>年级</th>
							<th>分数</th>
							<th>心理健康等级</th>
			
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${userlist }" var="user">
							<tr>
								<td>${user.number}</td>
								<td>${user.name}</td>
								<td>${user.sex}</td>
								<td>${user.grade}</td>
								<td>${user.score}</td>
								<td>${user.level}</td>
						
			
								
							</tr>
						</c:forEach>

					</tbody>
				</table>

			</div>

		</div>

		<div class="layui-footer">
			<!-- 底部固定区域 -->
			© deepcloud.com - 阳光心理网
		</div>
	</div>

	<script src="res/layui/layui.js"></script>
	<script>
		//JavaScript代码区域
		layui.use('element', function() {
			var element = layui.element;

		});
	</script>
	<script>
		layui.use('table', function() {
			var table = layui.table;

			table.render({
				elem : '#test',
				url : '/demo/table/user/',
				cellMinWidth : 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
				,
				cols : [ [ {
					field : 'id',
					title : 'ID',
					sort : true
				}, {
					field : 'username',
					title : '姓名'
				}, {
					field : 'sex',
					title : '性别',
					sort : true
				}, {
					field : 'city',
					title : '年龄'
				}, {
					field : 'experience',
					title : '学校',
					sort : true
				}, {
					field : 'wealth',
					title : '年级',
					sort : true
				} ] ]
			});
		});
	</script>

</body>



</html>