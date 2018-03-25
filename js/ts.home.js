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
	$("*").each(function() {
		if ($(this).width() > document.body.clientWidth) {
			// console.log(this.tagName + "#" + this.id);
			console.log(this);
			// this.remove();
		}
	});
});

document.querySelector('[style="position: absolute; top: -1236px; overflow: auto; width:1241px;"]').remove();

var table_cat = document.getElementsByClassName("table--category")[0],
	 elem_cat = table_cat.getElementsByClassName("o-custom-cat"),
	 table_col_num,
	 elem_cat_remaining_num,
	 elem_cat_remaining = [],
	 elem_cat_total = elem_cat.length,
	 last_col;

table_col_num = get_cat_col(table_cat.offsetWidth);
get_remaining_cat_elems();


for(let i = 0; i < elem_cat_remaining.length; i++){
	elem_cat_remaining[i].classList.add("last_elem");
	elem_cat_remaining[i].setAttribute("style", "min-width: calc("+ 250*table_col_num +"px/"+ elem_cat_remaining_num +")");
}

table_cat.setAttribute("style", "visibility: visible");


new ResizeSensor(table_cat, function() {
	
	console.log("changed");
	table_col_num = get_cat_col(table_cat.offsetWidth);

	if(table_col_num != last_col){

		console.log(elem_cat_remaining);

		for(let i = 0; i < elem_cat_remaining.length; i++){
			elem_cat_remaining[i].classList.remove("last_elem");
			elem_cat_remaining[i].removeAttribute("style", "min-width");
			
			console.log(elem_cat_remaining[i]);
		}

		elem_cat_remaining = [];
		get_remaining_cat_elems();

		for(let i = 0; i < elem_cat_remaining.length; i++){
			elem_cat_remaining[i].classList.add("last_elem");
			elem_cat_remaining[i].setAttribute("style", "min-width: calc("+ 250*table_col_num +"px/"+ elem_cat_remaining_num +")");
		}

		for(let i = 0; i < elem_cat_total; i++){
			if(elem_cat[i].classList.contains("last_elem")){
				console.log("Elem["+ i +"] is a last elem");
			}
		}
	}

	last_col = table_col_num;

	
});

function get_cat_col(width){
	if(width == 1000){
		return 4;
	}
	else if(width > 750 && width < 1000){
		return 3;
	}
	else if(width > 500 && width < 750){
		return 2;
	} 
	else if(width > 250 && width < 500){
		return 1;
	}
}

function slice_html_collection(range_last){
	for(var i = 0; i < range_last; i++){
		elem_cat_remaining[i] = elem_cat[elem_cat.length-range_last+i];
	}
}

function get_remaining_cat_elems(){
	elem_cat_remaining_num = elem_cat_total % table_col_num;
	if(elem_cat_remaining_num == 0){
		elem_cat_remaining_num = table_col_num;
	}
	slice_html_collection(elem_cat_remaining_num);
}
