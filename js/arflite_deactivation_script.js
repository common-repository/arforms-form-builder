"use strict";jQuery(document).on("change","#arflite-risk-confirm",function(t){jQuery(this).is(":checked")?(jQuery("#arflite-deactivate-submit-btn").removeAttr("disabled"),jQuery("#arflite-deactivate-submit-btn").removeClass("arf-disable-btn")):(jQuery("#arflite-deactivate-submit-btn").attr("disabled","disabled"),jQuery("#arflite-deactivate-submit-btn").addClass("arf-disable-btn"))}),jQuery(document).ready(function(e){var i=e("#arflite-deactivate-link-"+pluginName),n=e("#arflite-deactivate-form-"+pluginName),l=!0;jQuery(i).attr("onclick","javascript:event.preventDefault();"),jQuery(i).on("click",function(){function r(t,e){t.action="arflite_deactivate_plugin",t.security=pluginSecurity,t.dataType="json",e.addClass("process-response"),e.find(".deactivating-spinner").show(),jQuery.post(ajaxurl,t,function(t){window.location.href=a})}var a=i.attr("href"),t=(jQuery("body").toggleClass("arflite-deactivate-form-active"),n.show({complete:function(){var t=n.offset();t.top<50&&e(this).parent().css("top",50-t.top+"px"),jQuery("html,body").animate({scrollTop:Math.max(0,t.top-50)})}}),jQuery("#arflite-deactivate-form-skeleton").html());n.html(t),jQuery("#rflite-deactivate-submit-form").html(arflite_detailsStrings.deactivate_btn),n.on("change","input[type=radio]",function(){var t=n.find("#arflite-deactivate-details-label strong"),e=n.find('label[for="arflite_anonymous"]')[0],a=n.find("#arflite-deactivate-submit-form span")[0],i=n.find('input[name="arflite-deactivate-reason"]:checked').val();t.text(arflite_detailsStrings[i]),e.style.visibility="visible",a.style.display="inline-block",l&&(l=!1,jQuery("#arflite-deactivate-submit-form").removeAttr("disabled"),jQuery("#rflite-deactivate-submit-form").html(arflite_detailsStrings.deactivate_submit_btn),n.off("click","#arflite-deactivate-submit-form"),n.on("click","#arflite-deactivate-submit-form",function(t){t.preventDefault(),r({arflite_reason:n.find('input[name="arflite-deactivate-reason"]:checked').val(),arflite_details:n.find("#arflite-deactivate-details").val(),arflite_anonymous:n.find("#arflite_anonymous:checked").length},n)}))}),n.on("click","#arflite-deactivate-submit-form",function(t){t.preventDefault(),r({},n)}),n.on("click","#arflite-deactivate-submit-btn",function(){return window.location.href=a,!1}),e(".arflite-deactivate-form-bg").on("click",function(){n.fadeOut(),e("body").removeClass("arflite-deactivate-form-active")})})});