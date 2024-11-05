<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/tutorbird', text: 'Tutorbird Login' },
		{ href: '/services', text: 'Services' },
		{ href: '/faq', text: 'Frequently Asked Questions' },
		{ href: '/contact', text: 'Contact' }
	];
	let isMenuOpen = false;

	if (browser) {
		window.onclick = () => {
			if (isMenuOpen) {
				isMenuOpen = false;
			}
		};
	}
</script>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<!-- Desktop App Bar -->
	<nav
		class="relative z-10 mt-[6px] hidden w-full flex-row justify-center bg-white shadow-md md:flex"
	>
		<div class="flex flex-row items-center gap-10 font-serif text-xl">
			<a href="/">
				<img src="/sage-logo.webp" alt="Logo" width="182" height="182" />
			</a>
			{#each links as link}
				<a href={link.href}>{link.text}</a>
			{/each}
		</div>
	</nav>
	<!-- Mobile App Bar -->
	<nav
		class="relative z-10 mt-[6px] h-20 w-full flex-row justify-center bg-white shadow-md md:hidden"
	>
		<a href="/" class="absolute left-1/2 top-0 w-20 -translate-x-1/2">
			<img src="/sage-logo.webp" alt="Logo" width="182" height="182" />
		</a>
		<button
			role="menu"
			class="absolute right-0 top-0 mr-4"
			on:click|stopPropagation={() => (isMenuOpen = !isMenuOpen)}
		>
			{#if !isMenuOpen}
				<div class="flex h-20 w-6 flex-col items-center justify-center gap-2">
					<span class="h-0.5 w-full bg-tertiary-500"></span>
					<span class="h-0.5 w-full bg-tertiary-500"></span>
					<span class="h-0.5 w-full bg-tertiary-500"></span>
				</div>
			{:else}
				<div class="flex h-20 w-6 flex-col items-center justify-center gap-2">
					<img src="/close-icon.svg" alt="" />
				</div>
			{/if}
		</button>
		<div class="mt-20 flex flex-col">
			{#if isMenuOpen}
				{#each links as link}
					<div
						transition:slide|global={{ duration: 500 }}
						class="w-full bg-white py-2 text-center font-serif text-xl"
					>
						<a href={link.href}>{link.text}</a>
					</div>
				{/each}
			{/if}
		</div>
	</nav>
	<slot />
	<!-- Spacer -->
	<div class="grow" />
	<div class="h-10 w-full bg-tertiary-500" />
</div>
