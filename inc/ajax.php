<?php

/*

@package TheSpectrum_Experience

=================================
     AJAX FUNCTIONS
=================================

*/ 

add_action( 'wp_ajax_nopriv_ts_load_more', 'ts_load_more');
add_action( 'wp_ajax_ts_load_more', 'ts_load_more' );

function ts_load_more(){

	$paged = $_POST["page"] + 1;
	

	global $query;
	
	$post_count = 0;
	$dir_class = null;
	$post_per_page = 2;

	$args = array(
		'post_type' 			=> 'post',
		'paged' 					=> $paged,
		'order'						=> 'DESC',
		'posts_per_page' 	=> $post_per_page,
	);

	$the_query = new WP_Query($args);
	$post_count_total = $the_query -> found_posts;
	$post_count_page = $the_query -> post_count;
	$n = $post_count_total - ($paged - 1)*$post_per_page;
	$dir_class = null;

	if( $the_query -> have_posts() ):
		while( $the_query -> have_posts() ): $the_query -> the_post();

			if($post_per_page == -1):
				$post_per_page = 0;
			endif;

			echo $n;

			if( $n%2 == 0 ){
				$dir_class = 'right';
			} else{
				$dir_class = 'left';
			}

			$n--;

			require(locate_template('template-parts/content-timeline.php'));

		endwhile;
	endif;

	wp_reset_postdata();


}

