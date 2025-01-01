<script>
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
	let { children } = $props();
	let isMobileMenuOpen = $state(false);
	let isDarkMode = $state(false);

	const checkDarkModeStorageAndPreference = () => {
		// Check and apply the user's stored preference or the system preference on load
		isDarkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
	};

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}

	onMount(() => {
		checkDarkModeStorageAndPreference();
	});
</script>

<div class={isDarkMode ? 'dark' : 'light'}>
	<main
		class="min-h-screen w-full bg-neutral-one text-primary-three dark:bg-slate-800 dark:text-neutral-one"
	>
		<Nav bind:isMobileMenuOpen {toggleDarkMode} {isDarkMode} />
		{@render children()}
		<Footer />
	</main>
</div>
