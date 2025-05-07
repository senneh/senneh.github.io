<script>
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<ul>
			<li>
				<a href="{base}/blog">Blog</a>
			</li>
			<li></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	header {
		padding: 1rem;
		background-color: rgb(226, 226, 226);
		border-radius: 6px;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-between; */
	}

	ul {
		margin: 0;
		list-style: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
