function arf_render_captcha_on_form_submission(r,c,t){var i=jQuery(r).find('input[name="form_data_id"]').val(),e=jQuery("#arf_recaptcha_v3_public_key").val();jQuery("#arf_recaptcha_v3_theme").val();void 0!==window.arf_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(e).then(function(e){for(var a in window.arf_recaptcha_v3)a.split("_")[2]==i&&(jQuery("#"+a).val(e).trigger("change"),arfformsubmission(r,c,t))})})}function arflite_render_captcha_on_form_submission(r,c,t){var e=jQuery("#arflite_recaptcha_v3_public_key").val();jQuery("#arflite_recaptcha_v3_theme").val();void 0!==window.arflite_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(e).then(function(e){for(var a in window.arflite_recaptcha_v3){window.arflite_recaptcha_v3[a].size;jQuery("#"+a).val(e).trigger("change"),arfliteformsubmission(r,c,t)}})})}var render_arf_captcha_v3=function(){var c=jQuery("#arf_recaptcha_v3_public_key").val(),t=jQuery("#arf_recaptcha_v3_theme").val();void 0!==window.arf_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(c).then(function(e){for(var a in window.arf_recaptcha_v3){var r=window.arf_recaptcha_v3[a].size;grecaptcha.render(a,{sitekey:c,theme:t,size:r});jQuery("#"+a).val(e).trigger("change")}})})},render_arflite_captcha_v3=function(){var c=jQuery("#arflite_recaptcha_v3_public_key").val(),t=jQuery("#arflite_recaptcha_v3_theme").val();void 0!==window.arflite_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(c).then(function(e){for(var a in window.arflite_recaptcha_v3){var r=window.arflite_recaptcha_v3[a].size;grecaptcha.render(a,{sitekey:c,theme:t,size:r});jQuery("#"+a).val(e).trigger("change")}})})},arf_reset_captcha=function(){var e=jQuery("#arf_recaptcha_v3_public_key").val();void 0!==window.arf_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(e).then(function(e){for(var a in window.arf_recaptcha_v3)jQuery("#"+a).val(e).trigger("change")})})},arflite_reset_captcha=function(){var e=jQuery("#arflite_recaptcha_v3_public_key").val();void 0!==window.arflite_recaptcha_v3&&"undefined"!=typeof grecaptcha&&grecaptcha.ready(function(){grecaptcha.execute(e).then(function(e){for(var a in window.arflite_recaptcha_v3)jQuery("#"+a).val(e).trigger("change")})})};