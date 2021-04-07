<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="applicable-device" content="pc">
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<title>用户登录/注册_阳光心理健康平台</title>
<meta name="keywords" content="用户登录/注册" />
<link type="image/x-icon" rel="icon" href="../static/images/heart.png">

<meta name="description"
	content="用户登录/注册，阳光心理健康平台,汇聚全国万名专业心理咨询师，在线帮您解决心理困惑。" />

<link rel="stylesheet" href="../static/css.css">
<link rel="stylesheet" href="../static/sms.css">
<link rel="stylesheet" href="../static/sui.css">

<link rel="stylesheet" href="../res/layui/css/layui.css">
<link rel="stylesheet" href="../res/static/css/index.css">

<style type="text/css">
#d1 {
	background-color: rgb(49, 200, 249);
}

.container {
	width: 420px;
	height: 320px;
	min-height: 320px;
	max-height: 320px;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	padding: 20px;
	z-index: 130;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 3px 18px rgba(100, 0, 0, .5);
	font-size: 16px;
}

.close {
	background-color: white;
	border: none;
	font-size: 18px;
	margin-left: 410px;
	margin-top: -10px;
}

.layui-input {
	border-radius: 5px;
	width: 300px;
	height: 40px;
	font-size: 15px;
}

.layui-form-item {
	margin-left: -20px;
}

#logoid {
	margin-top: -16px;
	padding-left: 150px;
	padding-bottom: 15px;
}

.layui-btn {
	margin-left: -50px;
	border-radius: 5px;
	width: 350px;
	height: 40px;
	font-size: 15px;
}

.verity {
	width: 120px;
}

.font-set {
	font-size: 13px;
	text-decoration: none;
	margin-left: 120px;
}

a:hover {
	text-decoration: underline;
}
</style>

</head>


<body>
	<div class="wrap pd">
		<p id="logo">
			<a href=""><img src="../static/images/logo.png" alt="阳光心理网首页" /></a>
		</p>
		<p class="title">登录 / 注册</p>
		<p class="fun">
			<a href="../index.html"> < 返回首页</a>
		</p>
		<br class="clear" />
	</div>
	<div id="d1">
		<div class="layui-container">
			<div class="layui-row">
				<div class="layui-col-md7">
					<img src="../static/images/weixin.png" />
				</div>

				<div class="layui-col-md4">
					<br> <br>

					<form class="layui-form" action="../RegAction" method="post">
						<div class="container">

							<div class="layui-form-mid layui-word-aux">
								<img id="logoid" src="../static/images/07.png" height="35">
							</div>
							<div class="layui-form-item">
								<label class="layui-form-label">用户名</label>
								<div class="layui-input-block">
									<input type="text" name="username" required
										placeholder="请输入用户名" autocomplete="off" class="layui-input">
								</div>
							</div>
							<div class="layui-form-item">
								<label class="layui-form-label">密 &nbsp;&nbsp;&nbsp;码</label>
								<div class="layui-input-inline">
									<input type="password" name="password" required
										placeholder="请输入密码" autocomplete="off" class="layui-input">
								</div>
								<!-- <div class="layui-form-mid layui-word-aux">辅助文字</div> -->
							</div>

							<div class="layui-form-item">
								<label class="layui-form-label">身 &nbsp;&nbsp;&nbsp;份</label>
								<div class="layui-input-block">
									<select name="pid">
										<option value=""></option>
										
										<option value="5">学生</option>
										<option value="6">心理教师</option>
										<option value="7">家长</option>
										<option value="8">其他教师</option>
									</select>
								</div>
							</div>

							<div class="layui-form-item">
								<div class="layui-input-block">
									<button class="layui-btn" lay-submit lay-filter="formDemo">注册</button>
								</div>
							</div>
							<a href="" class="font-set"></a><a href="login2.jsp"
								class="font-set">用户登录</a>
								
						</div>
						<p style="color: red">${info }</p>
					</form>
				</div>

				<div class="layui-col-md1"></div>
			</div>
		</div>
		<br> <br>

	</div>

	<%@ include file="../footer.jsp"%>
	<script src="../res/layui/layui.js"></script>

	<script>
		layui
				.use(
						[ 'form', 'layedit', 'laydate' ],
						function() {
							var form = layui.form, layer = layui.layer, layedit = layui.layedit, laydate = layui.laydate;
							form.on('submit(demo1)', function(data) {
								layer.alert(JSON.stringify(data.field), {
									title : '最终的提交信息'
								})
								return false;
							});
						});
	</script>

</body>

</html>