!function($,t,e,i){var n={init:function(t){var e=$.extend({image:null,width:50,height:50,disabled:!1},t);return this.each(function(t){var i=$(this),n=e.image,r=i.data("sdb-image");r&&(n=r),n||$.error("There is no image assigned for ScrewDefaultButtons"),i.wrap("<div >").css({display:"none"});var a=i.attr("class"),c=i.attr("onclick"),o=i.parent("div"),s=i.attr("id"),d=s&&$('label[for="'+s+'"]');d&&o.attr("title",d.text()),o.addClass(a),o.attr("onclick",c),o.css({"background-image":n,width:e.width,height:e.height,cursor:"pointer"});var h=0,u=-e.height;if(i.is(":disabled")&&(h=-(2*e.height),u=-(3*e.height)),i.on("disableBtn",function(){i.attr("disabled","disabled"),h=-(2*e.height),u=-(3*e.height),i.trigger("resetBackground")}),i.on("enableBtn",function(){i.removeAttr("disabled"),h=0,u=-e.height,i.trigger("resetBackground")}),i.on("resetBackground",function(){o.css(i.is(":checked")?{backgroundPosition:"0 "+u+"px"}:{backgroundPosition:"0 "+h+"px"})}),i.trigger("resetBackground"),i.is(":checkbox"))o.on("click",function(){i.is(":disabled")||i.change()}),o.on("keydown",function(t){32===t.which&&(t.preventDefault(),o.trigger("click"))}),o.addClass("styledCheckbox"),o.attr("tabindex","0"),o.attr("role","checkbox"),i.on("change",function(){i.prop("checked")?(i.prop("checked",!1),o.css({backgroundPosition:"0 "+h+"px"}),o.attr("aria-checked","false")):(i.prop("checked",!0),o.css({backgroundPosition:"0 "+u+"px"}),o.attr("aria-checked","true"))});else if(i.is(":radio")){o.addClass("styledRadio");var g=i.attr("name"),l=$('input[name="'+g+'"]:checked');o.attr("tabindex","-1"),l.length>0?$(l[0].parentNode).attr("tabindex","0"):0===t&&o.attr("tabindex","0"),o.attr("role","radio"),o.on("click",function(){i.prop("checked")||i.is(":disabled")||i.change(),$('input[name="'+g+'"]').each(function(){$(this).parent().attr("tabindex","-1").attr("aria-checked","false")}),o.attr("tabindex","0").attr("aria-checked","true"),o[0].focus()});var p=$('input[name="'+g+'"]');o.on("keydown",function(t){var e,n=$.inArray(i[0],p),r=t.which;13==r||32===r?(t.preventDefault(),o.trigger("click")):37===r||38===r?n>-1&&p[n-1]&&(e=p[n-1].parentNode,t.preventDefault(),$(e).trigger("click")):(39===r||40===r)&&n>-1&&p[n+1]&&(e=p[n+1].parentNode,t.preventDefault(),$(e).trigger("click"))}),i.on("change",function(){if(i.prop("checked"))i.prop("checked",!1),o.css({backgroundPosition:"0 "+h+"px"});else{i.prop("checked",!0),o.css({backgroundPosition:"0 "+u+"px"});var t=$('input[name="'+g+'"]').not(i);t.trigger("radioSwitch")}}),i.on("radioSwitch",function(){o.css({backgroundPosition:"0 "+h+"px"})});var f=$(this).attr("id"),k=$('label[for="'+f+'"]');k.on("click",function(){o.trigger("click")})}if(!$.support.leadingWhitespace){var f=$(this).attr("id"),k=$('label[for="'+f+'"]');k.on("click",function(){o.trigger("click")})}})},check:function(){return this.each(function(){var t=$(this);n.isChecked(t)||t.change()})},uncheck:function(){return this.each(function(){var t=$(this);n.isChecked(t)&&t.change()})},toggle:function(){return this.each(function(){var t=$(this);t.change()})},disable:function(){return this.each(function(){var t=$(this);t.trigger("disableBtn")})},enable:function(){return this.each(function(){var t=$(this);t.trigger("enableBtn")})},isChecked:function(t){return t.prop("checked")?!0:!1}};return $.fn.screwDefaultButtons=function(t,e){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Method "+t+" does not exist on jQuery.screwDefaultButtons"):n.init.apply(this,arguments)},this}(jQuery);