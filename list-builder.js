$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() => {
            $.ajax({
                type: "POST",
                url: $("#popup-form").attr("action"),
                data: $("#popup-form").serialize(),
                success: (data) => {
                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
                }
            });
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

});
//this is to have popup display
if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {

}
//this is to have a close option
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
   document.getElementById("pop-up-show").style.top = "0";
 } else {
   document.getElementById("pop-up-show").style.top = "-50px";
 }
 prevScrollpos = currentScrollPos;
}
//this is to have a hidden popup
function createSidePopup() {
   if (document.querySelectorAll('.vex').length == 0) {
       vex.defaultOptions.className = 'vex-theme-bottom-right-corner';
       var vexId = vex.dialog.open({
       message: 'Why not subscribe for more! Email Please',
       input: [
           '<input name="email" type="text" placeholder="jhondoe@domain.com" required />',
       ].join(''),
       buttons: [
           $.extend({}, vex.dialog.buttons.YES, { text: 'Subscribe' }),
           $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
       ],
       callback: function (data) {
           if (!data) {
                   }
                   else {
               var email_value = data.email;
                           var form = document.createElement("form");
                           form.setAttribute('method',"post");
                           form.setAttribute('action', "http://formspree.io/classandobjects@gmail.com");

                           var input = document.createElement("input");
                           input.setAttribute('type',"email");
                           input.setAttribute('name',"email");
                           input.value = email_value;

                           form.appendChild(input);
                           form.submit();
           }
                   hide(document.querySelectorAll('.vex'));
       },
       });
   }
}

function onScrollSubscribePopup () {
   {{ if .IsPage }}
   $(document).ready(function() {
       $(window).scroll(function(e){
           var scrollTop = $(window).scrollTop();
           var docHeight = $(document).height();
           var winHeight = $(window).height();
           var scrollPercent = (scrollTop) / (docHeight - winHeight);
           var scrollPercentRounded = Math.round(scrollPercent*100);
           if (scrollPercentRounded > 70 && scrollPercentRounded <     80) {
               createSidePopup();
           }
       });
   });
   {{ end }}
}
