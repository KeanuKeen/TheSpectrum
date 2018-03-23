jQuery(document).ready( function($){

	/* Ajax Functions */
	$(document).on('click', '.btn-load_more:not(.btn-loading)', function(){

		var that = $(this),
			page = that.data('page'),
			ajaxUrl = that.data('url');

		that.removeClass('btn-error');
		that.addClass('btn-loading');

		console.log(page);

		$.ajax({

			url: ajaxUrl,
			type: 'post',
			data: { // Container for custom data

				page: page,
				action: 'ts_load_more'

			},
			error: function( response ){
				console.log(response);
				that.removeClass('btn-loading');
				that.addClass('btn-error');
			},
			success: function( response ){
				$('#cntr-timeline').append( response );
				that.data('page', page+1);
				console.log(page);
				that.removeClass('btn-loading');
			}

		});


	});

});

var table_cat = document.getElementsByClassName("table--category")[0];
var elem_cat = table_cat.getElementsByClassName("o-custom-cat");

console.log(table_cat.offsetWidth);

table_cat.onresize = () => {
	console.log(table_cat.offsetWidth);
}

new ResizeSensor(table_cat, function() {
    console.log('Changed to ' + table_cat.clientWidth);
});


// console.log(elem_cat);
