(()=>{"use strict";var t={5311:t=>{t.exports=jQuery}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(5311),e=function(){return e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},e.apply(this,arguments)};const i=function(){function n(t,e,n){void 0===n&&(n=!1),this.$buttons=t,this.options=e,this.preview=n,this.defaultOptions={frame:"select",multiple:!1},this.wpHooks=window.wp.hooks,this.doFileUploaders()}return n.prototype.doFileUploaders=function(){var n=this;window.wp.hasOwnProperty("media")&&this.$buttons.click((function(i){var a=t(i.currentTarget),o=e(e({},n.defaultOptions),n.options);a.data("modal-title")&&(o.title=a.data("modal-title")),a.data("modal-button")&&(o.button={text:a.data("modal-button")});var s=window.wp.media(o).on("select",(function(){var t=s.state().get("selection"),e=o.multiple?t.toJSON():t.first().toJSON(),i=a.siblings("input:hidden");if(o.multiple){var c=[];e.forEach((function(t){c.push(t.id)})),i.val(JSON.stringify(n.wpHooks.applyFilters("atum_fileUploader_inputVal",c,i)))}else i.val(n.wpHooks.applyFilters("atum_fileUploader_inputVal",e.id,i));n.preview&&(!o.library.type||o.library.type.indexOf("image")>-1)&&(a.siblings("img").remove(),o.multiple?e.forEach((function(t){a.after('<img class="atum-file-uploader__preview" src="'.concat(t.url,'">'))})):a.after('<img class="atum-file-uploader__preview" src="'.concat(e.url,'">'))),n.wpHooks.doAction("atum_fileUploader_selected",s,a)})).open()}))},n}();var a=n(5311);const o=function(){function t(t){var e=this;this.settings=t,this.$emailSelector=a("<select>",{class:"attach-to-email"}),this.wpHooks=window.wp.hooks,this.$attachmentsList=a(".atum-attachments-list"),this.$input=a("#atum-attachments"),a.each(this.settings.get("emailNotifications"),(function(t,n){e.$emailSelector.append('\n\t\t\t\t<option value="'.concat(t,'">').concat(n,"</option>\n\t\t\t"))})),this.addHooks(),this.bindEvents();new i(a("#atum_files").find(".atum-file-uploader"),{multiple:!0})}return t.prototype.addHooks=function(){var t=this;this.wpHooks.addAction("atum_fileUploader_selected","atum",(function(e){e.state().get("selection").toJSON().forEach((function(e){var n=a("<li>").data("id",e.id),i=e.hasOwnProperty("url")?e.url:e.sizes.full.url;n.append("<label>".concat(t.settings.get("attachToEmail"),"</label>")).append(t.$emailSelector.clone());var o="";o=["jpg","jpeg","jpe","gif","png","webp","svg"].includes(e.subtype)&&e.sizes.medium.url?'<img src="'.concat(e.sizes.medium.url,'" alt="').concat(e.title,'">'):'<div class="atum-attachment-icon"><i class="atum-icon atmi-file-empty" title="'.concat(e.title,'"></i></div>'),n.append('\n\t\t\t\t\t<a href="'.concat(i,'" target="_blank" title="').concat(e.title,'">\n\t\t\t\t\t\t').concat(o,'\n\t\t\t\t\t</a>\n\t\t\t\t\t<i class="delete-attachment dashicons dashicons-dismiss atum-tooltip" title="').concat(t.settings.get("deleteAttachment"),'"></i>\n\t\t\t\t')),t.$attachmentsList.append(n)})),t.updateInput()}))},t.prototype.bindEvents=function(){var t=this;this.$attachmentsList.on("change",".attach-to-email",(function(){return t.updateInput()})).on("click",".delete-attachment",(function(e){var n=a(e.currentTarget),i=n.attr("aria-describedby");n.closest("li").remove(),a("#".concat(i)).remove(),t.updateInput()}))},t.prototype.updateInput=function(){var t=[];this.$attachmentsList.find("li").each((function(e,n){var i=a(n);t.push({id:i.data("id"),email:i.find(".attach-to-email").val()})})),this.$input.val(JSON.stringify(t))},t}();var s=n(5311);const c={doButtonGroups:function(t){var e=this;t.on("click",".btn-group .btn",(function(t){var n=s(t.currentTarget);return n.find(":checkbox").length?n.toggleClass("active"):(n.siblings(".active").removeClass("active"),n.addClass("active")),e.updateChecked(n.closest(".btn-group")),n.find("input").change(),!1}))},updateChecked:function(t){t.find(".btn").each((function(t,e){var n=s(e);n.find("input").prop("checked",n.hasClass("active"))}))}};var r=n(5311),l=function(){return l=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},l.apply(this,arguments)};const u=function(){function t(t){var e=this;void 0===t&&(t=null),this.addAtumClasses(t),r("body").on("wc-enhanced-select-init",(function(){return e.addAtumClasses(t)}))}return t.prototype.maybeRestoreEnhancedSelect=function(){r(".select2-container--open").remove(),r("body").trigger("wc-enhanced-select-init")},t.prototype.doSelect2=function(t,e,n){var i=this;void 0===e&&(e={}),void 0===n&&(n=!1),"function"==typeof r.fn.select2&&(e=Object.assign({minimumResultsForSearch:10},e),t.each((function(t,a){var o=r(a),s=l({},e);o.hasClass("atum-select-multiple")&&!1===o.prop("multiple")&&o.prop("multiple",!0),o.hasClass("atum-select2")||(o.addClass("atum-select2"),i.addAtumClasses(o)),n&&o.on("select2:selecting",(function(t){var e=r(t.currentTarget),n=e.val();Array.isArray(n)&&(r.inArray("",n)>-1||r.inArray("-1",n)>-1)&&(r.each(n,(function(t,e){""!==e&&"-1"!==e||n.splice(t,1)})),e.val(n))})),o.select2(s),o.siblings(".select2-container").addClass("atum-select2"),i.maybeAddTooltip(o)})))},t.prototype.addAtumClasses=function(t){var e=this;void 0===t&&(t=null),(t=t||r("select").filter(".atum-select2, .atum-enhanced-select")).length&&t.each((function(t,n){var i=r(n),a=i.siblings(".select2-container").not(".atum-select2, .atum-enhanced-select");a.length&&(a.addClass(i.hasClass("atum-select2")?"atum-select2":"atum-enhanced-select"),e.maybeAddTooltip(i))})).on("select2:opening",(function(t){var e=r(t.currentTarget).data();if(e.hasOwnProperty("select2")){var n=e.select2.dropdown.$dropdown;n.length&&n.addClass("atum-select2-dropdown")}}))},t.prototype.maybeAddTooltip=function(t){t.hasClass("atum-tooltip")&&t.siblings(".select2-container").find(".select2-selection__rendered").addClass("atum-tooltip")},t}(),d=Swal;var p=n.n(d),f=n(5311);const m=function(){function t(t){var e=this;this.settings=t,this.$productDataMetaBox=f("#woocommerce-product-data"),new u,c.doButtonGroups(this.$productDataMetaBox),this.$productDataMetaBox.on("woocommerce_variations_loaded woocommerce_variations_added",(function(){c.doButtonGroups(e.$productDataMetaBox.find(".woocommerce_variations")),e.maybeBlockFields()})),f("#_manage_stock").change((function(t){return f("#_out_stock_threshold").closest(".options_group").css("display",f(t.currentTarget).is(":checked")?"block":"none")})).change(),f(".product-tab-runner").find(".run-script").click((function(t){var n=f(t.currentTarget),i=n.siblings("select").val();p().fire({title:e.settings.get("areYouSure"),text:n.data("confirm").replace("%s",'"'.concat(i,'"')),icon:"warning",showCancelButton:!0,confirmButtonText:e.settings.get("continue"),cancelButtonText:e.settings.get("cancel"),reverseButtons:!0,showLoaderOnConfirm:!0,preConfirm:function(){return new Promise((function(t,a){f.ajax({url:window.ajaxurl,data:{action:n.data("action"),security:e.settings.get("nonce"),parent_id:f("#post_ID").val(),value:i},method:"POST",dataType:"json",success:function(e){"object"==typeof e&&!0===e.success||p().showValidationMessage(e.data),t(e.data)}})}))},allowOutsideClick:function(){return!p().isLoading()}}).then((function(t){t.isConfirmed&&p().fire({icon:"success",title:e.settings.get("success"),text:t.value}).then((function(){return location.reload()}))}))})),this.$productDataMetaBox.on("focus select2:opening",".atum-field :input",(function(t){return f(t.target).siblings(".input-group-prepend").addClass("focus")})).on("blur select2:close",".atum-field :input",(function(t){return f(t.target).siblings(".input-group-prepend").removeClass("focus")})),this.maybeBlockFields()}return t.prototype.maybeBlockFields=function(){void 0!==this.settings.get("lockFields")&&"yes"===this.settings.get("lockFields")&&(f(".atum-field input").each((function(t,e){f(e).prop("readonly",!0).next().after(f(".wcml_lock_img").clone().removeClass("wcml_lock_img").show())})),f(".atum-field select").each((function(t,e){f(e).prop("disabled",!0).next().next().after(f(".wcml_lock_img").clone().removeClass("wcml_lock_img").show())})))},t}();const h=function(){function t(t,e){void 0===e&&(e={}),this.varName=t,this.defaults=e,this.settings={};var n=void 0!==window[t]?window[t]:{};Object.assign(this.settings,e,n)}return t.prototype.get=function(t){if(void 0!==this.settings[t])return this.settings[t]},t.prototype.getAll=function(){return this.settings},t.prototype.delete=function(t){this.settings.hasOwnProperty(t)&&delete this.settings[t]},t}();n(5311)((function(t){var e=new h("atumProductData");new m(e),new o(e)}))})()})();