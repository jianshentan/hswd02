$(document).ready(function() {

    // sticky nav bar
    var navHeight = $(".nav").position().top;
    window.onscroll =  function() {
        if ($(window).scrollTop() > navHeight) {
            $(".nav").css("position", "fixed");
            $(".nav").css("top", "0");
        } else 
            $(".nav").css("position", "relative");
    };

    // selected candidates
    $(".owl_carousel").owlCarousel({
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,4],
        itemsTablet: [768,4],
        itemsTabletSmall: false,
        itemsMobile: [479,4],
        pagination: true
    });

    var setActiveCandidate = function(activeElement) {
        $(".owl_carousel .item").each(function() {
            $(this).removeClass("active");
            $(".highlight").remove();
        });
        var activeDiv = $(".owl_carousel #"+activeElement);
        activeDiv.addClass("active");
        var div = $("<div>"+candidates[activeElement].name+"</div>");
        div.addClass("highlight");
        activeDiv.prepend(div);
    };

    // start with c1's data
    setActiveCandidate("c1");
    var candidateData = candidates["c1"];
    $("#candidate_image").attr("src", candidateData.img);
    $("#candidate_name").html(candidateData.name);
    $("#candidate_desc").html(candidateData.desc);

    // click on img for more data
    $(".owl_carousel .item").each(function(m) {
        $(this).click(function(e) {
            var candidateId = $(this).attr("id");
            setActiveCandidate(candidateId);
            var candidateData = candidates[candidateId];
            $("#candidate_image").attr("src", candidateData.img);
            $("#candidate_name").html(candidateData.name);
            $("#candidate_desc").html(candidateData.desc);
        });
    });

    // check tweet length + tag length is < 140
    var l = 140 - 12;
    $(".tweet_content").bind('input propertychange', function() {
        var tagLength = $(".tweet_tag").val().length;
        if (this.value.length + tagLength > l)
            this.value = this.value.substring(0, l - tagLength); 
    });
    $(".tweet_tag").bind('input propertychange', function() {
        var tweetLength = $(".tweet_content").val().length;
        if (this.value.length + tweetLength > l)
            this.value = this.value.substring(0, l - tweetLength); 
        if (!this.value[this.value.length-1].match(/^[0-9a-z]+$/))
            this.value = this.value.substring(0, this.value.length - 1);
    });

    // activate tweet builder
    $(".tweet_button").click(function() {
        var text = $(".tweet_content").val();
        var tag = $(".tweet_tag").val();
        createTweetPopup(text, tag);
    }); 
});

function createTweetPopup(text, twitterHandle) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    var twitterMessage = ""; 
    var words = text.split(" ");
    for (var i=0; i<words.length; i++) 
        twitterMessage += words[i]+"%20";
    console.log(twitterMessage);

    window.open("http://twitter.com/share?text="+twitterMessage+"@"+twitterHandle+"%20@genecoin", 'twitter', opts);
};

var candidates = {
    c1: {
        name: "hello kitty 1"
      , img: "media/owl1.png"
      , desc: "1 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
  , c2: {     
        name: "hello kitty 2"
      , img: "media/owl1.png"
      , desc: "2 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
  , c3: {     
        name: "hello kitty 3"
      , img: "media/owl1.png"
      , desc: "3 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
  , c4: {     
        name: "hello kitty 4"
      , img: "media/owl1.png"
      , desc: "4 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
  , c5: {     
        name: "hello kitty 5"
      , img: "media/owl1.png"
      , desc: "5 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
  , c6: {     
        name: "hello kitty 6"
      , img: "media/owl1.png"
      , desc: "6 lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi.<br><br>lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam a euismod justo, sed aliquam nisl. integer sit amet mattis lacus. nulla facilisi."
    }
}
