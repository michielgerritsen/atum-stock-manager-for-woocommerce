/* =======================================
   ENHANCED SELECT
   ======================================= */

export let EnhancedSelect = {
	
	/**
	 * Restore the enhanced select filters (if any)
	 */
	maybeRestoreEnhancedSelect() {
		
		$('.select2-container--open').remove();
		$('body').trigger('wc-enhanced-select-init');
		
	}
	
}