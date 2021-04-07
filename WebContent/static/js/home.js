function home() {
    var A = this;
    this.init = function() {
        A.ad3();
        A.loadCityOrg();
        A.loadArtTab();
        A.loadCityDr();
        A.subsiteLink();
        A.loadBzOrg();
        return A
    };
    this.loadArtTab = function() {
        var C = $(".arttype>li>a");
        var B = $(".artlist");
        C.hover(function() {
            var D = $(this);
            C.removeClass("on");
            var E = $(this).attr("class").replace("arttype_", "");
            D.addClass("on");
            B.hide();
            $("#arttype_" + E).show()
        })
    };
    this.ad3 = function() {
        var H = $("#ad3").width();
        var F = $("#ad3 ul li").length;
        var G = 0;
        var E;
        var C = "<div class='btn'>";
        for (var B = 0; B < F; B++) { C += "<span></span>" }
        C += "</div>";
        $("#ad3").append(C);
        $("#ad3 .btn span").css("opacity", 0.4).mouseover(function() {
            G = $("#ad3 .btn span").index(this);
            D(G)
        }).eq(0).trigger("mouseover");
        $("#ad3 .preNext").css("opacity", 0.2).hover(function() { $(this).stop(true, false).animate({ "opacity": "0.5" }, 300) }, function() { $(this).stop(true, false).animate({ "opacity": "0.2" }, 300) });
        $("#ad3 .pre").click(function() {
            G -= 1;
            if (G == -1) { G = F - 1 }
            D(G)
        });
        $("#ad3 .next").click(function() {
            G += 1;
            if (G == F) { G = 0 }
            D(G)
        });
        $("#ad3 ul").css("width", H * (F));
        $("#ad3").hover(function() { clearInterval(E) }, function() {
            E = setInterval(function() {
                D(G);
                G++;
                if (G == F) { G = 0 }
            }, 5000)
        }).trigger("mouseleave");

        function D(J) {
            var I = -J * H;
            $("#ad3 ul").stop(true, false).animate({ "left": I }, 300);
            $("#ad3 .btn span").stop(true, false).animate({ "opacity": "0.3" }, 300).eq(J).stop(true, false).animate({ "opacity": "1" }, 300)
        }
    };
    this.subsiteLink = function() {
        var B = $("#links>.lbox>.ll>.tab>.item");
        B.click(function() {
            B.removeClass("on");
            $(this).addClass("on");
            $(".link").hide();
            $(".link").eq(B.index($(this))).show()
        })
    };
    this.loadCityDr = function() { glb.ajaxLoad(glb.ajaxUrl + "loadhomecitydr", "html", null, function(B) { $("#icitydr").html(B) }, null) };
    this.loadCityOrg = function() { glb.ajax(glb.ajaxUrl + "loadhomeorg", "html", "types=1", null, function(B) { $("#dr-list").after(B) }, null) };
    this.exptg = function(B) { new exptg().wirte(B) };
    this.arttg = function(B) { new arttg().wirte(B) };
    this.loadBzOrg = function() {
        var B = $("#BzOrgLoad");
        glb.ajax(glb.ajaxUrl + "LoadCityOrgTop", "html", "types=1&isMobile=0&location=allsite", null, function(C) { B.after(C); if ($(".BzOrgTopBox").length > 0) { $(".BzOrgTopBox").navbarscroll() } }, function() { B.after('<div class="ibox ig"><i></i><a href="javascript:void(0);" onclick="_h.loadBzOrg()"></a></div>') })
    };
    this.curl = function(C) {
        var B = "";
        switch (C) {
            case 1:
                B = "http://si.trustutn.org/info?sn=170150122011551056723";
                break;
            case 2:
                B = "http://www.wenming.cn/";
                break;
            case 3:
                B = "http://webscan.360.cn/index/checkwebsite/url/www.psy525.cn";
                break;
            case 4:
                B = "http://www.anquan.org/authenticate/cert/?site=www.psy525.cn&at=business";
                break;
            case 5:
                B = "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44040202000105";
                break
        }
        window.open(B)
    }
}
var _h = null;
$(function() { _h = new home().init() });