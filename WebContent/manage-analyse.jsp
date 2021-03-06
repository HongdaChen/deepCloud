<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<link rel="stylesheet" href="res/layui/css/admin.css?v=318" />
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
		layui
				.use(
						'upload',
						function() {
							var $ = layui.jquery, upload = layui.upload;

							//普通图片上传
							var uploadInst = upload
									.render({
										elem : '#test1',
										url : 'https://httpbin.org/post' //改成您自己的上传接口
										,
										before : function(obj) {
											//预读本地文件示例，不支持ie8
											obj
													.preview(function(index,
															file, result) {
														$('#demo1').attr('src',
																result); //图片链接（base64）
													});
										},
										done : function(res) {
											//如果上传失败
											if (res.code > 0) {
												return layer.msg('上传失败');
											}
											//上传成功
										},
										error : function() {
											//演示失败状态，并实现重传
											var demoText = $('#demoText');
											demoText
													.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
											demoText.find('.demo-reload').on(
													'click', function() {
														uploadInst.upload();
													});
										}
									});

							//多图片上传
							upload
									.render({
										elem : '#test2',
										url : 'https://httpbin.org/post' //改成您自己的上传接口
										,
										multiple : true,
										before : function(obj) {
											//预读本地文件示例，不支持ie8
											obj
													.preview(function(index,
															file, result) {
														$('#demo2')
																.append(
																		'<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
													});
										},
										done : function(res) {
											//上传完毕
										}
									});

							//指定允许上传的文件类型
							upload.render({
								elem : '#test3',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								accept : 'file' //普通文件
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res);
								}
							});
							upload.render({ //允许上传的文件后缀
								elem : '#test4',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								accept : 'file' //普通文件
								,
								exts : 'zip|rar|7z' //只允许上传压缩文件
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});
							upload.render({
								elem : '#test5',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								accept : 'video' //视频
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});
							upload.render({
								elem : '#test6',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								accept : 'audio' //音频
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});

							//设定文件大小限制
							upload.render({
								elem : '#test7',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								size : 60 //限制文件大小，单位 KB
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});

							//同时绑定多个元素，并将属性设定在元素上
							upload.render({
								elem : '.demoMore',
								before : function() {
									layer.tips('接口地址：' + this.url, this.item, {
										tips : 1
									});
								},
								done : function(res, index, upload) {
									var item = this.item;
									console.log(item); //获取当前触发上传的元素，layui 2.1.0 新增
								}
							})

							//选完文件后不自动上传
							upload.render({
								elem : '#test8',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								auto : false
								//,multiple: true
								,
								bindAction : '#test9',
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});

							//拖拽上传
							upload.render({
								elem : '#test10',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								done : function(res) {
									layer.msg('上传成功');
									layui.$('#uploadDemoView').removeClass(
											'layui-hide').find('img').attr(
											'src', res.files.file);
									console.log(res)
								}
							});

							//多文件列表示例
							var demoListView = $('#demoList'), uploadListIns = upload
									.render({
										elem : '#testList',
										url : 'https://httpbin.org/post' //改成您自己的上传接口
										,
										accept : 'file',
										multiple : true,
										auto : false,
										bindAction : '#testListAction',
										choose : function(obj) {
											var files = this.files = obj
													.pushFile(); //将每次选择的文件追加到文件队列
											//读取本地文件
											obj
													.preview(function(index,
															file, result) {
														var tr = $([
																'<tr id="upload-'+ index +'">',
																'<td>'
																		+ file.name
																		+ '</td>',
																'<td>'
																		+ (file.size / 1024)
																				.toFixed(1)
																		+ 'kb</td>',
																'<td>等待上传</td>',
																'<td>',
																'<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>',
																'<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>',
																'</td>',
																'</tr>' ]
																.join(''));

														//单个重传
														tr
																.find(
																		'.demo-reload')
																.on(
																		'click',
																		function() {
																			obj
																					.upload(
																							index,
																							file);
																		});

														//删除
														tr
																.find(
																		'.demo-delete')
																.on(
																		'click',
																		function() {
																			delete files[index]; //删除对应的文件
																			tr
																					.remove();
																			uploadListIns.config.elem
																					.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
																		});

														demoListView.append(tr);
													});
										},
										done : function(res, index, upload) {
											if (res.files.file) { //上传成功
												var tr = demoListView
														.find('tr#upload-'
																+ index), tds = tr
														.children();
												tds
														.eq(2)
														.html(
																'<span style="color: #5FB878;">上传成功</span>');
												tds.eq(3).html(''); //清空操作
												return delete this.files[index]; //删除文件队列已经上传成功的文件
											}
											this.error(index, upload);
										},
										error : function(index, upload) {
											var tr = demoListView
													.find('tr#upload-' + index), tds = tr
													.children();
											tds
													.eq(2)
													.html(
															'<span style="color: #FF5722;">上传失败</span>');
											tds.eq(3).find('.demo-reload')
													.removeClass('layui-hide'); //显示重传
										}
									});

							//绑定原始文件域
							upload.render({
								elem : '#test20',
								url : 'https://httpbin.org/post' //改成您自己的上传接口
								,
								done : function(res) {
									layer.msg('上传成功');
									console.log(res)
								}
							});

						});
	</script>
	<!-- js部分 -->
	<script type="text/javascript" src="res/layui/layui.js"></script>
	<script type="text/javascript" src="res/layui/common.js?v=318"></script>
	<script type="text/javascript" src="res/layui/echarts.min.js"></script>
	<script type="text/javascript" src="res/layui/macarons.js"></script>
	<script type="text/javascript" src="res/layui/javaweb_statistics.js"></script>
</body>

</html>