<script>
	let { data } = $props();
</script>

<h1>Blog</h1>
<p>Blog posts go here.<br /> Eventually...</p>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={'/' + post.slug}>
					{post.meta.title}
				</a>
			</h2>
		</li>
		Published {post.meta.date}
	{/each}
</ul>
