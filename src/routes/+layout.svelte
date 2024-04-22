<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Bar -->
<div class="flex min-h-screen flex-col">
	<nav class="relative z-10 mt-[6px] flex w-full flex-row justify-center bg-white shadow-md">
		<div class="flex flex-row items-center gap-10 font-serif text-xl">
			<a href="/">
				<img src="/sage-logo.webp" alt="Logo" width="182" height="182" />
			</a>
			<a href="/">Home</a>
			<a href="/tutorbird">Tutorbird Login</a>
			<a href="/services">Services</a>
			<a href="/faq">Frequently Asked Questions</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>
	<slot />
	<!-- Spacer -->
	<div class="grow" />
	<div class="h-10 w-full bg-tertiary-500" />
</div>
