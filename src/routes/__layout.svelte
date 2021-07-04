<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="layout w-full">
	<Header />

	<slot />

	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
