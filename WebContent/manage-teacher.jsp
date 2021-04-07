<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit|ie-comp|ie-stand">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  
  <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
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
        <li class="layui-nav-item">
          <a href="javascript:;">
            <img src="http://t.cn/RCzsdCq" class="layui-nav-img" alt="">
            zyq
          </a>
          <dl class="layui-nav-child">
            <dd><a href="">基本资料</a></dd>
            <dd><a href="">安全设置</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">退出</a></li>
      </ul>
    </div>

<%@ include file="manage-side.jsp" %>
    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div style="padding: 15px;">
        
        <table class="layui-table">
					<colgroup>
						<col width="150">
						<col width="200">
						<col>
					</colgroup>
					<thead>
						<tr>
							<th>工号</th>
							<th>姓名</th>
							<th>教龄</th>
							<th>号码</th>
							<th>地址</th>
			
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${userlist_t}" var="user">
							<tr>
								<td>${user.tnumber}</td>
								<td>${user.tname}</td>
								<td>${user.tyears}</td>
								<td>${user.ttelephone}</td>
								<td>${user.taddress}</td>
						
			
								
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
    layui.use('element', function () {
      var element = layui.element;

    });
  </script>
 

    
</body>

</html>