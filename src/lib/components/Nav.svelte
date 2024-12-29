<script>
	import { Menu, X } from "lucide-svelte";
	import { slide } from "svelte/transition";

	let { isMobileMenuOpen = $bindable(false) } = $props();

	// Navigation items
	const navItems = [
		{ href: "#home", label: "Home" },
		{ href: "#projects", label: "Projects" },
		{ href: "#blog", label: "Blog" },
		{ href: "#contact", label: "Contact" },
	];
</script>

<header class="sticky top-0 w-full bg-neutral-one backdrop-blur-sm border-b border-primary-two z-10 relative overflow-hidden">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo/Initials -->
      
      <a href="#home" class="text-2xl font-bold text-neutral-900">VR</a>
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
        <a href={item.href} class="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
          {item.label}
        </a>
				{/each}
			</div>
			<!-- Mobile menu button -->
			<button class="md:hidden p-2" onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)} aria-label="Toggle menu">
				{#if isMobileMenuOpen}
				<X size={24} />
				{:else}
				<Menu size={24} />
				{/if}
			</button>
		</div>
	</nav>
	<!-- walking corgi animation-->
	<div class="corgi absolute left[-100px] pt-12 bottom-0 w-16 h-16">
		<img class="w-5 h-auto" src="/corgi-walk.gif" alt="">
	</div>
	
	<!-- Mobile Navigation -->
	{#if isMobileMenuOpen}
	<div class="md:hidden" transition:slide>
		<div class="px-2 pt-2 pb-3 space-y-1 bg-neutral-50 border-b border-neutral-200">
			{#each navItems as item}
			<a href={item.href} class="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md" onclick={() => (isMobileMenuOpen = false)}>
				{item.label}
			</a>
			{/each}
		</div>
	</div>
	{/if}
</header>

<style>
	.corgi {
		animation: walk 20s linear infinite;

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
