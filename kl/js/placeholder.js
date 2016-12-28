// placeholder
var textPlaceHolderInit = function(){

    var havePlaceholder = false;
    var input = document.createElement("input");
    havePlaceholder = ("placeholder" in input);

    if(!havePlaceholder){
        $("input[type=text], input[type=password], textarea").each(function(idx, obj){
            var _this = $(this);
            var placeholderAttr = "placeholder";

            var placeholderText = _this.attr(placeholderAttr);
            /*
            if(_this.val() == ""){
                _this.val(placeholderText);
            }
            */

            _this.before("<span class=\"placeholder_guidetext\"></span>");
            var prevGuideText = _this.prev(".placeholder_guidetext");
            prevGuideText.css({position:"absolute"}).text(placeholderText);
            prevGuideText.hide();
            if(_this.val() == ""){
                prevGuideText.show();
            }

            prevGuideText.addClass("placeholder_text");

            _this.bind("mousedown focus", function(e){
                prevGuideText.hide();
            }).bind("blur", function(e){
                if($(this).val() == ""){
                    prevGuideText.show();
                }
            });

            prevGuideText.bind("mousedown", function(e){
                $(this).hide();
                setTimeout(function(){
                    _this.focus();
                }, 100);
            });
        });
    }

};
$(function(){textPlaceHolderInit();});