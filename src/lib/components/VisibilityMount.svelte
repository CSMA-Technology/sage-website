<script lang="ts">
	import { onMount } from 'svelte';
	let container: HTMLDivElement;
	let mounted = false;
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						mounted = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(container);
	});
</script>

<div bind:this={container}>
	{#if mounted}
		<slot />
	{:else}
		<!-- Render the slot invisibly to take up the same space -->
		<span class="invisible">
			<slot />
		</span>
	{/if}
</div>
