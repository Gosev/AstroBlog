
<script lang="ts">
	$: counter = 0;
</script>



<section>
	<h2>Svelte Component</h2>
	<div class="video-container">
		<iframe
			title="Trying Svelte for the Third Time"
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/xgER1OutVvU"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
	<button
		on:click={() => {
			counter = counter + 1;
		}}><span class="screen-reader-text">Counter {counter} </span>
  </button
	>
</section>
