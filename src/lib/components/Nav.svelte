<script>
	import { Menu, X, MoonStarIcon, SunMedium } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let { isMobileMenuOpen = $bindable(false), toggleDarkMode, isDarkMode } = $props();

	// Navigation items
	const navItems = [
		{ href: '#home', label: 'Home' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<header
	class="relative sticky top-0 z-10 w-full overflow-hidden border-b border-primary-two bg-neutral-one text-neutral-600 backdrop-blur-sm dark:bg-slate-800 dark:text-white"
>
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo/Initials -->

			<a href="#home" class="text-2xl font-bold">VR</a>
			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="transition-colors duration-200 hover:scale-x-105 hover:text-neutral-900 dark:hover:text-neutral-two"
					>
						{item.label}
					</a>
				{/each}
				<button onclick={toggleDarkMode}>
					{#if !isDarkMode}
						<MoonStarIcon />
					{:else}
						<SunMedium size={30} />
					{/if}
				</button>
			</div>
			<!-- Mobile menu button -->
			<button
				class="p-2 md:hidden"
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if isMobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</nav>
	<!-- walking corgi animation-->
	<div class="corgi left[-100px] pointer-events-none absolute bottom-0 h-16 w-16 pt-12">
		<img class="h-auto w-5" src="/corgi-walk.gif" alt="" />
	</div>

	<!-- Mobile Navigation -->
	{#if isMobileMenuOpen}
		<div class="md:hidden" transition:slide>
			<div
				class="space-y-1 border-b border-neutral-200 bg-neutral-50 px-2 pb-3 pt-2 dark:bg-slate-800"
			>
				{#each navItems as item}
					<a
						href={item.href}
						class="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-white"
						onclick={() => (isMobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<style>
	.corgi {
		animation: walk 25s linear infinite;
	}
	.corgi:hover {
		animation-play-state: paused;
	}
	@keyframes walk {
		0% {
			transform: translateX(0vw) scaleX(-1);
		}
		49% {
			transform: translateX(99vw) scaleX(-1);
		}
		50% {
			transform: translateX(100vw) scaleX(1);
		}
		100% {
			transform: translateX(0vw) scaleX(1);
		}
	}
</style>
