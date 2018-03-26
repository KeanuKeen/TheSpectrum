<?php 

/*

@package TheSpectrum_Experience

*/ 

?>

<div class="o--equalized">
	<div class="o-entry_post--compact series-col">
		<?php if( has_post_thumbnail($the_query->ID) ): ?>
		<div class="u-cover_bg --cat">
			<img id="<?php the_ID() ?>" class="c-entry_post-thumb" src="<?php the_post_thumbnail_url() ?>">
		</div>
		<?php	endif; ?>
		<div class="o-entry_post-info series-col">
			<div class="c-entry_post-head">
				<div class="c-entry_post-head-title v-head">
					<?php the_title() ?>
				</div>
			</div>
			<div class="c-entry_post-desc">
				<?php the_excerpt() ?>
			</div>
			<div class="c-entry_post-footer">
				<div class="c-entry_post-datepub">
					<?php echo ts_entry_posted_meta() ?>
				</div>
			</div>
		</div>
	</div>
</div>