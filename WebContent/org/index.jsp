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
<title>阳光心理健康平台</title>
<link type="image/x-icon" rel="icon" href="../static/images/heart.png">
<meta name="keywords" content="心理咨询,心理网,阳光心理网,心理服务,心理咨询师,阳光" />
<meta name="description"
	content="阳光心理网,您身边的心理咨询专家，提供专业的心理咨询服务，是来访者、心理咨询师、心理机构首选的在线心理咨询平台，值得信赖，百万用户的选择！" />
<!--[if lt IE 9 ]><script src="/res/js/lib/html5shiv.min.js"></script><script src="/res/js/lib/respond.min.js"></script><![endif]-->
<link rel="stylesheet" href="../static/css.css">
<link rel="stylesheet" href="../static/home.css">
<link rel="stylesheet" href="../static/citydr.css">

</head>

<body>

	<%@ include file="../nav.jsp"%>
	<!-- 主题栏-->
	<%@ include file="../theme.jsp"%>
	
	<div class="wrap" id="h-orglist">
		<p class="listTit">— 实体心理机构 —</p>
		<ul id="organlist">
			<li></li>
		</ul>
	</div>


	<script src="../static/js/org/js.js"></script>
	<script src="../static/js/org/org.js"></script>

	<%@ include file="../footer.jsp"%>

	<script>
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "//hm.baidu.com/hm.js?b3ea7cb5fe6857009cefe3f31cc7329a";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
	<script>
		(function() {
			var bp = document.createElement('script');
			var curProtocol = window.location.protocol.split(':')[0];
			if (curProtocol === 'https') {
				bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
			} else {
				bp.src = 'http://push.zhanzhang.baidu.com/push.js';
			}
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(bp, s);
		})();
	</script>
</body>

</html>