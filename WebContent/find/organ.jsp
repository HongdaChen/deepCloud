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
<link type="image/x-icon" rel="icon" href="static/images/heart.png">
<meta name="keywords" content="心理咨询,心理网,阳光心理网,心理服务,心理咨询师,阳光" />
<meta name="description"
	content="阳光心理网,您身边的心理咨询专家，提供专业的心理咨询服务，是来访者、心理咨询师、心理机构首选的在线心理咨询平台，值得信赖，百万用户的选择！" />
<!--[if lt IE 9 ]><script src="/res/js/lib/html5shiv.min.js"></script><script src="/res/js/lib/respond.min.js"></script><![endif]-->
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/css.css?v=298126">
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/channel/find.css?v=298126">
<link rel="stylesheet"
	href="https://res.psy525.cn/pc/res/css/module/pagination.css?v=298126">
<link rel="stylesheet" href="../static/css.css">
<link rel="stylesheet" href="../static/home.css">
<link rel="stylesheet" href="../static/citydr.css">
</head>

<body>
	<!-- 导航栏 -->
	<%@ include file="../nav.jsp"%>
	<!-- 主题栏-->
<%@ include file="../theme.jsp" %>
	<div class="wrap ptop">
		<ul class="findtab">
			<li><a href="area.html">按城市找</a></li>
			<li><a href="specialty.html">按专长找</a></li>
			<li><a href="organ.html" class="on">按机构找</a></li>
		</ul>
		<br class="clear" />
		<div id="afind">
			<p class="item">
				<b>猜您可能要找：</b><a href="/ZJ525/hangzhou/organ.html" class="c-city"
					target="_blank">杭州心理机构&nbsp;&nbsp;进入...</a><br class="clear" />
				<br class="clear" />
			</p>
			<p class="item2">
				<b>热门城市机构：</b><span><a href="/CQ525/organ.html"
					class="i-city" target="_blank">重庆心理机构<i>(122家)</i></a><a
					href="/TJ525/organ.html" class="i-city" target="_blank">天津心理机构<i>(77家)</i></a><a
					href="/BJ525/organ.html" class="i-city" target="_blank">北京心理机构<i>(367家)</i></a><a
					href="/SH525/organ.html" class="i-city" target="_blank">上海心理机构<i>(218家)</i></a><a
					href="/GD525/guangzhou/organ.html" class="i-city" target="_blank">广州心理机构<i>(121家)</i></a><a
					href="/GD525/shenzhen/organ.html" class="i-city" target="_blank">深圳心理机构<i>(126家)</i></a><a
					href="/HB525/wuhan/organ.html" class="i-city" target="_blank">武汉心理机构<i>(102家)</i></a><a
					href="/HN525/changsha/organ.html" class="i-city" target="_blank">长沙心理机构<i>(84家)</i></a><a
					href="/JS525/nanjing/organ.html" class="i-city" target="_blank">南京心理机构<i>(52家)</i></a><a
					href="/LL525/dalian/organ.html" class="i-city" target="_blank">大连心理机构<i>(97家)</i></a><a
					href="/LL525/shenyang/organ.html" class="i-city" target="_blank">沈阳心理机构<i>(86家)</i></a><a
					href="/ZJ525/hangzhou/organ.html" class="i-city" target="_blank">杭州心理机构<i>(59家)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item2" style="border-bottom: none">
				<b>全国分站机构：</b><span><a href="/GD525/organ.html"
					class="i-city" target="_blank">广东心理机构<i>(403家)</i></a><a
					href="/JS525/organ.html" class="i-city" target="_blank">江苏心理机构<i>(309家)</i></a><a
					href="/SD525/organ.html" class="i-city" target="_blank">山东心理机构<i>(572家)</i></a><a
					href="/ZJ525/organ.html" class="i-city" target="_blank">浙江心理机构<i>(207家)</i></a><a
					href="/HENAN525/organ.html" class="i-city" target="_blank">河南心理机构<i>(299家)</i></a><a
					href="/HEBEI525/organ.html" class="i-city" target="_blank">河北心理机构<i>(308家)</i></a><a
					href="/HN525/organ.html" class="i-city" target="_blank">湖南心理机构<i>(185家)</i></a><a
					href="/HB525/organ.html" class="i-city" target="_blank">湖北心理机构<i>(213家)</i></a><a
					href="/SC525/organ.html" class="i-city" target="_blank">四川心理机构<i>(148家)</i></a><a
					href="/LL525/organ.html" class="i-city" target="_blank">辽宁心理机构<i>(303家)</i></a><a
					href="/FJ525/organ.html" class="i-city" target="_blank">福建心理机构<i>(107家)</i></a><a
					href="/SHANXI525/organ.html" class="i-city" target="_blank">陕西心理机构<i>(182家)</i></a><a
					href="/AH525/organ.html" class="i-city" target="_blank">安徽心理机构<i>(167家)</i></a><a
					href="/SX525/organ.html" class="i-city" target="_blank">山西心理机构<i>(180家)</i></a><a
					href="/JX525/organ.html" class="i-city" target="_blank">江西心理机构<i>(112家)</i></a><a
					href="/GX525/organ.html" class="i-city" target="_blank">广西心理机构<i>(86家)</i></a><a
					href="/HLJ525/organ.html" class="i-city" target="_blank">黑龙江心理机构<i>(159家)</i></a><a
					href="/JL525/organ.html" class="i-city" target="_blank">吉林心理机构<i>(97家)</i></a><a
					href="/YN525/organ.html" class="i-city" target="_blank">云南心理机构<i>(74家)</i></a><a
					href="/NMG525/organ.html" class="i-city" target="_blank">内蒙古心理机构<i>(96家)</i></a><a
					href="/XJ525/organ.html" class="i-city" target="_blank">新疆心理机构<i>(69家)</i></a><a
					href="/GS525/organ.html" class="i-city" target="_blank">甘肃心理机构<i>(74家)</i></a><a
					href="/GZ525/organ.html" class="i-city" target="_blank">贵州心理机构<i>(42家)</i></a><a
					href="/HAINAN525/organ.html" class="i-city" target="_blank">海南心理机构<i>(25家)</i></a><a
					href="/NX525/organ.html" class="i-city" target="_blank">宁夏心理机构<i>(6家)</i></a><a
					href="/QH525/organ.html" class="i-city" target="_blank">青海心理机构<i>(12家)</i></a><a
					href="/XZ525/organ.html" class="i-city" target="_blank">西藏心理机构<i>(1家)</i></a><a
					href="/TW525/organ.html" class="i-city" target="_blank">台湾心理机构<i>(6家)</i></a><a
					href="/XG525/organ.html" class="i-city" target="_blank">香港心理机构<i>(4家)</i></a><a
					href="/HW525/organ.html" class="i-city" target="_blank">海外心理机构<i>(12家)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
		</div>
	</div>
	<script src="https://res.psy525.cn/pc/res/js/js.js?v=298126"></script>
	<script src="https://res.psy525.cn/pc/res/js/channel/find.js?v=298126"></script>
	<script src="static/js/js.js"></script>
	<script src="static/js/exptg.js"></script>
	<script src="static/js/arttg.js?"></script>
	<script src="static/js/home.js"></script>

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