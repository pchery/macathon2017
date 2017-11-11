$(document).ready(function(){

    var strings = ["naut1", "naut2", "naut3","naut4", "naut5", "naut6", "naut7", "naut8"];
    var nauts = ["aut1", "aut2", "aut3","aut4", "aut5", "aut6", "aut7", "aut8"];
    var active_posts = [
        new Post("Wear Black!", "I'm getting sick of wearing boring colors everyday. I want to start wearing more red or pink.#colors #unique", [1], ["colors","unique"], "Los Angeles  - 73,231 - 11/11/17", "thread1", 1, true),
        new Post("Nailpolish","I'm a guy and I want to be confident wearing nail polish.", [2], ["confidence","breaksocialnorms"], "Tokyo", "thread2", 2, true),
        new Post("Random Chats", "Greet everyone who passes me on the street.", [3], ["mnnice","friendlyaf"], "St. Paul", "thread3", 3, true),
        new Post("No phone subways", "I don't want to use my phone on the subway on my commute.", [4], ["mindfulness","offthegrid"], "Amsterdam", "thread4", 4, true),
    ]

    var past_posts = [
        new Post("Happier Thoughts", "I want to start thinking happier thoughts #goodvibes", [1], ["hello1","hey1"], "Seoul, South Korea - 08/23/17", "thread1", 1, false),
        new Post("Wear yoga pants to work", "Casual Friday is everyday. I want to be comfortable at work. #comfy", [2], ["New York, New York - 09/23/17","hey2"], "New York, New York - 09/14/17", "thread2", 2, false),
        new Post("Stand Up", "I want to speak up when the professor makes a racist remark, even by accident. #standup", [3], ["Colleges, Everywhere","hey3"], "Colleges, Everywhere - TODAY", "thread3", 3, false),
        new Post("yo 4", "askjdkasdj",[4], ["hello4","hey4"], "PHX", "thread4", 4, false),
    ]
    var j = 0;
    $(".naut-item").each(function() {
        $(this).find(".naut-title").text(active_posts[j].titl);
        $(this).find(".naut-location").text(active_posts[j].loc);
        $(this).find(".naut-body").text(active_posts[j].txt);
        j+=1;
    });

    var i = 0;
    var inc = 1;
    $(".trending").mouseenter(function(){
        console.log("hello");
        $(".trending_arrow").show();
        $(".trending_arrow").css("display", "block");

            })
    $(".trending").mouseleave(function(){
        $(".trending_arrow").hide();
            })
    $(".b2").click(function(){
        if(i < 0){
            i = 0;
        }else if (i > active_posts.length - 2){
            i = active_posts.length - 2;
        }
        i += inc;
        if(i + 1 < active_posts.length){
            //$(".trending1").text(active_posts[i].titl);
            $(".trending1").find(".naut-title").text(active_posts[i].titl);
            $(".trending1").find(".naut-location").text(active_posts[i].loc);
            $(".trending1").find(".naut-body").text(active_posts[i].txt);
            //$(".trending2").text(active_posts[i+1].titl);
            $(".trending2").find(".naut-title").text(active_posts[i+1].titl);
            $(".trending2").find(".naut-location").text(active_posts[i+1].loc);
            $(".trending2").find(".naut-body").text(active_posts[i+1].txt);

        }
    })
    $(".b1").click(function(){
        if(i < 0){
            i = 0;
        }else if (i > active_posts.length - 2){
            i = active_posts.length - 2;
        }
        i -= inc;
        if(i + 1 < active_posts.length && i >= 0){
          $(".trending1").find(".naut-title").text(active_posts[i].titl);
          $(".trending1").find(".naut-location").text(active_posts[i].loc);
          $(".trending1").find(".naut-body").text(active_posts[i].txt);
          //$(".trending2").text(active_posts[i+1].titl);
          $(".trending2").find(".naut-title").text(active_posts[i+1].titl);
          $(".trending2").find(".naut-location").text(active_posts[i+1].loc);
          $(".trending2").find(".naut-body").text(active_posts[i+1].txt);
        }
    })

    $(".my-nauts").click(function(){
        var j = 0;
        $(".naut-item").each(function() {
            $(this).find(".naut-title").text(active_posts[j].titl);
            $(this).find(".naut-location").text(active_posts[j].loc);
            $(this).find(".naut-body").text(active_posts[j].txt);
            j+=1;
        })
    })

    $(".past-nauts").click(function(){
        var j = 0;
        $(".naut-item").each(function() {
            $(this).find(".naut-title").text(past_posts[j].titl);
            $(this).find(".naut-location").text(past_posts[j].loc);
            $(this).find(".naut-body").text(active_posts[j].txt);
            j+=1;
        })
    })

    $(".my-nauts").mouseenter(function(){
        $(".my-nauts").css("opacity", "0.70");


    })
    $(".past-nauts").mouseenter(function(){
        $(".past-nauts").css("opacity", "0.70");
    })

    $(".my-nauts").mouseleave(function(){
        $(".my-nauts").css("opacity", "1");


    })
    $(".past-nauts").mouseleave(function(){
        $(".past-nauts").css("opacity", "1");
    })

    // $(".pledge").click(function(){
    //     $(this).hide();
    //     $(this).next().show();
    // })
    // $(".mission_pop").click(function(){
    //     $(this).hide();
    //     $(this).prev().show();
    // })



function User(username, password, posted_ids, partic_ids){
    //create user id
    this.username = username;
    this.password = password;
    this.posted_ids = posted_ids;
    this.partic_ids = partic_ids;
    this.posts = [];
    this.loc = loc; //get location somehow
    this.post = function (text){
        posts.push(text, new Post([id], [], loc, new Thread(), id, true));

    }
    this.join = function(post){
        post.add_partic(id);
    }
    this.delete_post = function(post_id){
        posts.splice(post_id,1);
    }

}

function Post(titl, text, participants, hashtags, loc, thread, creator, active) {
    this.titl = titl;
    this.txt = text;
    this.participants = participants;
    this.hashtags = hashtags;
    this.loc = loc;
    this.thread = thread;
    this.creator = creator;
    //this.id = id;
    this.flags;
    this.active;
    this.flags = [];
    this.date = 1; //get
    this.add_partic = function(user_id){
        participants.push(user_id);

    }
}

function Thread(){

}

function Comment(){

}

});
