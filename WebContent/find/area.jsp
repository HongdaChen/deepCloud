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
			<li><a href="area.html" class="on">按城市找</a></li>
			<li><a href="specialty.html">按专长找</a></li>
			<li><a href="organ.html">按机构找</a></li>
		</ul>
		<br class="clear" />
		<div id="afind">
			<p class="item">
				<b>猜您可能在：</b><a href="/ZJ525/hangzhou.html" class="c-city"
					target="_blank">杭州市&nbsp;&nbsp;进入分站...</a><br class="clear" />
				<br class="clear" />
			</p>
			<p class="item">
				<b>热门城市分站：</b><span><a href="/CQ525.html" class="i-city"
					target="_blank">重庆市<i>(625位)</i></a><a href="/TJ525.html"
					class="i-city" target="_blank">天津市<i>(335位)</i></a><a
					href="/BJ525.html" class="i-city" target="_blank">北京市<i>(2005位)</i></a><a
					href="/SH525.html" class="i-city" target="_blank">上海市<i>(1234位)</i></a><a
					href="/GD525/guangzhou.html" class="i-city" target="_blank">广州市<i>(752位)</i></a><a
					href="/GD525/shenzhen.html" class="i-city" target="_blank">深圳市<i>(736位)</i></a><a
					href="/HB525/wuhan.html" class="i-city" target="_blank">武汉市<i>(627位)</i></a><a
					href="/HN525/changsha.html" class="i-city" target="_blank">长沙市<i>(462位)</i></a><a
					href="/JS525/nanjing.html" class="i-city" target="_blank">南京市<i>(337位)</i></a><a
					href="/LL525/dalian.html" class="i-city" target="_blank">大连市<i>(490位)</i></a><a
					href="/LL525/shenyang.html" class="i-city" target="_blank">沈阳市<i>(471位)</i></a><a
					href="/ZJ525/hangzhou.html" class="i-city" target="_blank">杭州市<i>(404位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
			<p class="item" style="border-bottom: none">
				<b>全国分站：</b><span><a href="/GD525.html" class="i-city"
					target="_blank">广东省<i>(2362位)</i></a><a href="/JS525.html"
					class="i-city" target="_blank">江苏省<i>(1667位)</i></a><a
					href="/SD525.html" class="i-city" target="_blank">山东省<i>(2961位)</i></a><a
					href="/ZJ525.html" class="i-city" target="_blank">浙江省<i>(1162位)</i></a><a
					href="/HENAN525.html" class="i-city" target="_blank">河南省<i>(1694位)</i></a><a
					href="/HEBEI525.html" class="i-city" target="_blank">河北省<i>(1654位)</i></a><a
					href="/HN525.html" class="i-city" target="_blank">湖南省<i>(995位)</i></a><a
					href="/HB525.html" class="i-city" target="_blank">湖北省<i>(1177位)</i></a><a
					href="/SC525.html" class="i-city" target="_blank">四川省<i>(1088位)</i></a><a
					href="/LL525.html" class="i-city" target="_blank">辽宁省<i>(1523位)</i></a><a
					href="/FJ525.html" class="i-city" target="_blank">福建省<i>(800位)</i></a><a
					href="/SHANXI525.html" class="i-city" target="_blank">陕西省<i>(858位)</i></a><a
					href="/AH525.html" class="i-city" target="_blank">安徽省<i>(841位)</i></a><a
					href="/SX525.html" class="i-city" target="_blank">山西省<i>(908位)</i></a><a
					href="/JX525.html" class="i-city" target="_blank">江西省<i>(757位)</i></a><a
					href="/GX525.html" class="i-city" target="_blank">广西<i>(432位)</i></a><a
					href="/HLJ525.html" class="i-city" target="_blank">黑龙江省<i>(786位)</i></a><a
					href="/JL525.html" class="i-city" target="_blank">吉林省<i>(461位)</i></a><a
					href="/YN525.html" class="i-city" target="_blank">云南省<i>(405位)</i></a><a
					href="/NMG525.html" class="i-city" target="_blank">内蒙古<i>(506位)</i></a><a
					href="/XJ525.html" class="i-city" target="_blank">新疆<i>(422位)</i></a><a
					href="/GS525.html" class="i-city" target="_blank">甘肃省<i>(370位)</i></a><a
					href="/GZ525.html" class="i-city" target="_blank">贵州省<i>(264位)</i></a><a
					href="/HAINAN525.html" class="i-city" target="_blank">海南省<i>(157位)</i></a><a
					href="/NX525.html" class="i-city" target="_blank">宁夏<i>(70位)</i></a><a
					href="/QH525.html" class="i-city" target="_blank">青海省<i>(53位)</i></a><a
					href="/XZ525.html" class="i-city" target="_blank">西藏<i>(17位)</i></a><a
					href="/TW525.html" class="i-city" target="_blank">台湾省<i>(24位)</i></a><a
					href="/XG525.html" class="i-city" target="_blank">香港<i>(12位)</i></a><a
					href="/AM525.html" class="i-city" target="_blank">澳门<i>(1位)</i></a><a
					href="/HW525.html" class="i-city" target="_blank">海外<i>(38位)</i></a></span><br
					class="clear" />
				<br class="clear" />
			</p>
		</div>
	</div>
	<script src="https://res.psy525.cn/pc/res/js/js.js?v=298126"></script>
	<script src="https://res.psy525.cn/pc/res/js/channel/find.js?v=298126"></script>
	<script src="../static/js/js.js"></script>
	<script src="../static/js/exptg.js"></script>
	<script src="../static/js/arttg.js?"></script>
	<script src="../static/js/home.js"></script>

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