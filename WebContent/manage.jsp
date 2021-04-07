<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
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

		<%@ include file="manage-side.jsp"%>
		
		<div class="layui-body">
			<!-- 内容主体区域 -->
			<div style="padding: 15px;">
				<div class="layui-fluid ew-console-wrapper">

					<!-- 饼状图 -->
					<div class="layui-row layui-col-space15">
						<div class="layui-col-md12 layui-col-sm6">
							<div class="layui-row layui-col-space15">
								<div class="layui-col-md6">
									<div class="layui-card">
										<div class="layui-card-header">同名数据统计报表</div>
										<div class="layui-card-body" style="height: 300px;"
											id="statistics1"></div>
									</div>
								</div>
								<div class="layui-col-md6">
									<div class="layui-card">
										<div class="layui-card-header">用户访问来源统计报表</div>
										<div class="layui-card-body" style="height: 300px;"
											id="statistics2"></div>
									</div>
								</div>
								<div class="layui-col-md12">
									<div class="layui-card">
										<div class="layui-card-header">堆叠柱状图统计报表</div>
										<div class="layui-card-body" style="height: 300px;"
											id="statistics3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- 柱状图 -->


					<!-- 漏斗 
	<div class="layui-row layui-col-space15">
		<div class="layui-col-md12 layui-col-sm6">
			<div class="layui-row layui-col-space15">
				<div class="layui-col-md6">
					<div class="layui-card">
						<div class="layui-card-header">漏斗一</div>
						<div class="layui-card-body" style="height: 300px;" id="statistics7">
						</div>
					</div>
				</div>
				<div class="layui-col-md6">
					<div class="layui-card">
						<div class="layui-card-header">漏斗二</div>
						<div class="layui-card-body" style="height: 300px;" id="statistics8">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	-->

					<!-- 仪表盘 
	<div class="layui-row layui-col-space15">
		<div class="layui-col-md12 layui-col-sm6">
			<div class="layui-row layui-col-space15">
				<div class="layui-col-md6">
					<div class="layui-card">
						<div class="layui-card-header">仪表盘一</div>
						<div class="layui-card-body" style="height: 300px;" id="statistics9">
						</div>
					</div>
				</div>
				<div class="layui-col-md6">
					<div class="layui-card">
						<div class="layui-card-header">仪表盘二</div>
						<div class="layui-card-body" style="height: 300px;" id="statistics10">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	-->
				</div>


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
					width : 80,
					title : 'ID',
					sort : true
				}, {
					field : 'username',
					width : 80,
					title : '姓名'
				}, {
					field : 'sex',
					width : 80,
					title : '性别',
					sort : true
				}, {
					field : 'city',
					width : 80,
					title : '城市'
				}, {
					field : 'classify',
					title : '教龄'
				} ] ]
			});
		});
	</script>

	<script type="text/javascript" src="res/layui/common.js?v=318"></script>
	<script type="text/javascript" src="res/layui/echarts.min.js"></script>
	<script type="text/javascript" src="res/layui/macarons.js"></script>
	<script type="text/javascript" src="res/layui/javaweb_statistics.js"></script>
</body>

</html>