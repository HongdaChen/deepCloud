<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="layui-side layui-bg-black">
	<div class="layui-side-scroll">
		<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
		<ul class="layui-nav layui-nav-tree" lay-filter="test">
			<li class="layui-nav-item layui-nav-itemed"><a class=""
				href="javascript:;">档案管理</a>
				<dl class="layui-nav-child">
					<dd>
						<a href="Userlist_t">心理教师档案</a>
					</dd>
					<dd>
						<a href="Userlist_c">咨询师档案</a>
					</dd>
					<dd>
						<a href="Userlist">在册学生档案</a>
					</dd>
				</dl></li>
			<li class="layui-nav-item"><a href="manage-analyse.jsp">数据图形化展示</a>

			</li>
			<li class="layui-nav-item"><a href="manage-course.jsp">成长课堂管理</a>

			</li>
		</ul>
	</div>
</div>
