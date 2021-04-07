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
    <meta name="description" content="阳光心理网,您身边的心理咨询专家，提供专业的心理咨询服务，是来访者、心理咨询师、心理机构首选的在线心理咨询平台，值得信赖，百万用户的选择！" />

    <!--[if lt IE 9 ]><script src="/res/js/lib/html5shiv.min.js"></script><script src="/res/js/lib/respond.min.js"></script><![endif]-->
    <link rel="stylesheet" href="https://res.psy525.cn/pc/res/css/css.css?v=298126">
    <link rel="stylesheet" href="https://res.psy525.cn/pc/res/css/uc/pmglobal.css?v=298126">
    <link rel="stylesheet" href="https://res.psy525.cn/pc/res/css/bz/yuyueserver.css?v=298126">
    <link rel="stylesheet" href="static/free20171017.css">
    <link rel="stylesheet" href="https://res.psy525.cn/pc/res/css/module/pagination.css?v=298126">
    <link rel="stylesheet" href="https://res.psy525.cn/pc/res/css/module/visiting.css?v=298126">
    <link rel="stylesheet" href="../static/css.css">
    <link rel="stylesheet" href="../static/home.css">
    <link rel="stylesheet" href="../static/citydr.css">


    <style type="text/css">
        #clistpublic {
            display: block;
            width: 300px;
            height: auto;
            overflow: hidden;
            padding-bottom: 10px
        }
        
        #clistpublic li {
            display: block;
            padding: 5px 0px 10px 0px;
        }
        
        #clistpublic li span {
            display: block;
            float: left;
            color: #a7a7a7;
            font-size: 12px;
            font-family: 宋体;
            line-height: 23px
        }
        
        #clistpublic li span a.tit {
            display: block;
            width: 210px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            color: #737373;
            font-family: 微软雅黑;
            float: left;
        }
        
        #clistpublic li span a.tit:hover {
            display: block;
            width: 210px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            color: #279F32;
            font-family: 微软雅黑;
            float: left;
        }
        
        #clistpublic li span i {
            color: #a7a7a7;
            font-style: normal;
            font-family: 宋体;
            font-size: 12px;
            float: left;
            padding-left: 5px;
        }
        
        #clistpublic li em {
            display: block;
            color: #a7a7a7;
            font-style: normal;
            font-family: 宋体;
            font-size: 12px;
            padding-top: 5px;
            width: 300px;
            height: 20px;
            overflow: hidden
        }
        
        #clistpublic li em a {
            padding: 3px;
            color: #737373
        }
    </style>
</head>

<body>
    <!-- 导航栏 -->
	<%@ include file="../nav.jsp" %>
    <!-- 主题栏-->
 <%@ include file="../theme.jsp" %>

    <p class="pd"></p>
    <p class="pd"></p>
    <div id="fbg" title="点击提问">
        <div id="fask">
            <p><i>9</i><i>9</i><i>6</i><i>8</i><i>4</i><i>4</i><i>6</i><em>个心理问题得到专业解答</em></p><a href="javascript:void(0);">我要提问</a>
        </div><br class="clear" />
    </div>
    <p class="pd"></p>
    <div class="ibox">
        <div class="il">
            <p class="itit"><a href="/case/" class="tit" target="_blank">最新解答</a></p>
            <ul id="clist-prive" class="clist">
                <li><span><a href="/case/28698-3166239.html" target="_blank"class="tit">如何长久的坚持一个目标和一件事</a><i>40分钟前</i><br
                     class="clear" /></span>
                    <p>本案例由心理咨询师<a href="/d28698.html" target="_blank">钟广宇</a>提供解答</p>
                </li>
                <li><span><a href="/case/3720-3168124.html" target="_blank" class="tit">心情抑郁暴躁</a><i>1小时前</i><br
                            class="clear" /></span>
                    <p>本案例由心理咨询师<a href="/d3720.html" target="_blank">杨立新</a>提供解答</p>
                </li>
                <li><span><a href="/case/11111-3167988.html" target="_blank" class="tit">18岁，女，高三</a><i>1小时前</i><br
                            class="clear" /></span>
                    <p>本案例由心理咨询师<a href="/d11111.html" target="_blank">陶桃</a>提供解答</p>
                </li>
                <li><span><a href="/case/33467-3166260.html" target="_blank" class="tit">我的母亲是个扶弟魔</a><i>1小时前</i><br
                            class="clear" /></span>
                    <p>本案例由心理咨询师<a href="/d33467.html" target="_blank">徐洪彦</a>提供解答</p>
                </li>
                <li><span><a href="/case/3769-3167929.html" target="_blank" class="tit">有疑心病 老是发呆老是喜欢幻想</a><i>1小时前</i><br
                            class="clear" /></span>
                    <p>本案例由心理咨询师<a href="/d3769.html" target="_blank">王民泉</a>提供解答</p>
                </li>
                <li class="more"><a href="/case/index.html" title="更多留言咨询案例" target="_blank">>&nbsp;更多案例...</a></li>
            </ul><br class="clear" />
        </div>

        <div class="ir hot-pd">
            <p class="itit-r"><b class="tit">求助贴</b></p>
            <ul id="caseopenpublic">
                <li><span><a href="/ask/247028.html" target="_blank" class="tit">我和老公情感破裂</a><i>8小时前</i><br
                            class="clear" /></span><em>我今年36岁,老公25岁，年龄差距太大，...</em></li>
                <li><span><a href="/ask/247044.html" target="_blank" class="tit">怎样脱离心里阴影</a><i>9小时前</i><br
                            class="clear" /></span><em>希望得到帮助谢谢谢谢谢谢...</em></li>
                <li><span><a href="/ask/247043.html" target="_blank" class="tit">开心不起来</a><i>9小时前</i><br
                            class="clear" /></span><em>我觉得我有抑郁症但我不敢和我家长说，我每...</em></li>
                <li><span><a href="/ask/247039.html" target="_blank" class="tit">宿舍人际关系不太明白，我该怎么做</a><i>9小时前</i><br
                            class="clear" /></span><em>其他两个室友关系很好，干什么都在一起，我...</em></li>
                <li><span><a href="/ask/247045.html" target="_blank" class="tit">我该怎么办呀</a><i>10小时前</i><br
                            class="clear" /></span><em>我把弟弟惹生气了…………????????...</em></li>
            </ul>
            <a href="/casezt/index.html" target=_blank id="zt-case"><em>【专题】汇总恋爱,婚姻,职场,亲子,家庭等案例</em></a>
        </div><br class="clear" />
    </div>
    <p class="pd"></p>

    <div class="ibox">
        <p class="tit2">按咨询类型找咨询师</p>
        <ul id="roomlist">
            <li>
                <a href="#" title="青春物语"><img src="static/images/youth.gif" alt="青春物语" />青春物语</a>
            </li>
            <li>
                <a href="#" title="婚恋情感"><img src="static/images/reins.gif" alt="婚恋情感" />婚恋情感</a>
            </li>
            <li>
                <a href="#" title="亲子桥梁"><img src="static/images/parenthood.gif" alt="亲子桥梁" />亲子桥梁</a>
            </li>
            <li>
                <a href="#" title="人际关系"><img src="static/images/relation.gif" alt="人际关系" />人际关系</a>
            </li>
            <li>
                <a href="#" title="自我认识"><img src="static/images/self.gif" alt="自我认识" />自我认识</a>
            </li>
            <li>
                <a href="#" title="其它问题"><img src="static/images/other.gif" alt="其它问题" />其它问题</a>
            </li>
        </ul><br class="clear" /><br class="clear" />
    </div>
    <p class="pd"></p>

    <div class="ibox">
        <div class="il">
            <p class="itit"><a href="/case/caseopen1_0.html" class="tit" target="_blank">待解答求助贴</a><i class="more">（仅专业咨询师解答）</i></p>
            <ul id="qlist">
                <li><em><b>3</b>解答</em><span><a href="/ask/247046.html"
                            target="_blank">抑郁症心律不齐</a><i>10小时前</i></span><br class="clear" /></li>
                <li><em><b>3</b>解答</em><span><a href="/ask/247045.html" target="_blank">我该怎么办呀</a><i>10小时前</i></span><br class="clear" /></li>
                <li><em><b>6</b>解答</em><span><a href="/ask/247044.html"
                            target="_blank">怎样脱离心里阴影</a><i>10小时前</i></span><br class="clear" /></li>
                <li><em><b>6</b>解答</em><span><a href="/ask/247043.html" target="_blank">开心不起来</a><i>10小时前</i></span><br class="clear" /></li>
                <li><em><b>6</b>解答</em><span><a href="/ask/247042.html"
                            target="_blank">测SDS测出了重度抑郁症</a><i>10小时前</i></span><br class="clear" /></li>
                <li><em><b>7</b>解答</em><span><a href="/ask/247041.html" target="_blank">如何缓解焦虑</a><i>11小时前</i></span><br class="clear" /></li>
                <li><em><b>1</b>解答</em><span><a href="/ask/247040.html"
                            target="_blank">我现在有很多心理问题</a><i>11小时前</i></span><br class="clear" /></li>
                <li><em><b>7</b>解答</em><span><a href="/ask/247039.html"
                            target="_blank">宿舍人际关系不太明白，我该怎么做</a><i>11小时前</i></span><br class="clear" /></li>
                <li><em><b>6</b>解答</em><span><a href="/ask/247038.html"
                            target="_blank">我不相信他不喜欢我</a><i>11小时前</i></span><br class="clear" /></li>
                <li><em><b>5</b>解答</em><span><a href="/ask/247035.html"
                            target="_blank">这中度是什么意思</a><i>12小时前</i></span><br class="clear" /></li>
                <li class="more"><a href="/case/caseopen1_0.html" title="更多抢答" target="_blank">>&nbsp;更多抢答...</a></li>
            </ul><br class="clear" />
        </div>

        <div class="ir hot-pd">
            <p class="itit-r"><b class="tit">杭州解答达人</b><i>（最近24小时）</i></p>
            <ul id="qtop">
                <li>
                    <a href="/d23221.html" target="_blank" class="avatar"><img src="https://img.psy525.cn/upload/avatar/20171014/539448edf7464de4a38c093053d94444.jpg!120" alt="姜裁军" /></a><span><a href="/d23221.html" target="_blank"
                            class="un">姜裁军</a><br />国家二级心理咨询师<i>已解答29个问题<em>(24小时内)</em></i></span><br class="clear" />
                </li>
                <li>
                    <a href="/d1584.html" target="_blank" class="avatar"><img src="https://img.psy525.cn/upload/avatar/20190514/689ec130609c4b65a8fe269f2a4562d6.jpg!120" alt="张小飞" /></a><span><a href="/d1584.html" target="_blank"
                            class="un">张小飞</a><br />国家二级心理咨询师<i>已解答5个问题<em>(24小时内)</em></i></span><br class="clear" />
                </li>
                <li>
                    <a href="/d29873.html" target="_blank" class="avatar"><img src="https://img.psy525.cn/upload/avatar/20200809/0c3271eec8624d83bba464d8cbcd326e.jpg!120" alt="张鹤军" /></a><span><a href="/d29873.html" target="_blank"
                            class="un">张鹤军</a><br />国家二级心理咨询师<i>已解答4个问题<em>(24小时内)</em></i></span><br class="clear" />
                </li>
            </ul>
        </div><br class="clear" />
    </div>
    <p class="pd"></p>
    <p class="pd"></p>
    <p class="pd"></p>
    <script src="https://res.psy525.cn/pc/res/js/js.js?v=298126"></script>
    <script src="https://res.psy525.cn/pc/res/js/uc/pmform.js?v=298126"></script>
    <script src="../static/js/js.js"></script>
    <script src="../static/js/exptg.js"></script>
    <script src="../static/js/arttg.js?"></script>
    <script src="../static/js/home.js"></script>

    <%@ include file="../footer.jsp" %>
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