<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Bar -->
<nav
	class="mt-[6px] flex w-full flex-row justify-center border-b-[9px] border-tertiary-500 bg-white"
>
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
