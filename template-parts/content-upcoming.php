<?php 

/*

@package TheSpectrum_Experience

*/ 

?>

<?php 

	if($n != 0): ?>
		
		<div class="series-row u-parent-width o-row--timeline u-timeline-entry--<?php echo $dir_class ?>">
			<div class="u-parent-width series-row u-timeline-entry-head--<?php echo $dir_class ?>">
				<div class="v-timeline-entry-head">
					<div class="u-timeline-entry-head-text"><?php the_title() ?></div>
					<div class="c-entry-tag">
						<div class="relative-cntr series-row --equalize-margin">
							<div class="c-tag">Campus Activity</div>
							<div class=" c-tag">Investigative</div>
						</div>
					</div>
				</div>
			</div>
			<div class="u-divider--inner v-date-inactive series-col c-timeline--ts_date v-dark">
				<span>
				<?php echo $event_month ?>.<?php echo $event_day ?>
				</span>
			</div>
			<div class="test_box-custom-inv u-parent-width"></div>
		</div>

		<div class="series-col v-dark c-timeline-node--line u-upcoming-timeline-node u-center">
			<div class="u-divider--outer"></div>
			<div class="u-divider--inner"></div>
			<div class="u-divider--outer"></div>
		</div>

	<?php 
	else: ?>
		<div class="series-col u-upcoming-active u-center o-upcoming-feat">
			<div class="v-date-active series-col c-timeline--ts_date v-dark">
				<span><?php echo $event_month ?>.<?php echo $event_day ?></span>
			</div>
			<div class="v-timeline-entry-head series-col u-center">
				<div class="c-entry-tag">
					<div class="relative-cntr series-row --equalize-margin">
						<div class="c-tag">Tag 1</div>
						<div class="c-tag">Campus Announcement</div>
					</div>
				</div>
				<div class="u-timeline-entry-head-text"><?php the_title() ?></div>
			</div>
			<div class="c-upcoming-feat-desc"><?php the_excerpt() ?></div>
			<?php if(has_post_thumbnail() ): ?>
			<div class="c-timeline--ts_thumb v-timeline-thumb u-cover_bg series-row u-start_<?php $dir_class ?>">
				<div class="v-timeline-thumb u-timeline--ts_thumb c-entry_post-thumb" style="background-image: url(<?php the_post_thumbnail_url() ?>)"></div>
			</div>
			<?php endif; ?>
		</div>
	<?php
	endif;

?>



