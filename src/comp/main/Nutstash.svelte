<script>
	import OpenWalletButton from '../OpenWalletButton.svelte';
</script>

<div class="hero bg-base-200 col-span-3">
	<div class="hero-content text-center">
		<div class="flex flex-col gap-10 p-4 items-center">
			<h1 class="text-5xl font-bold">Hide your Nuts!</h1>
			<div>
				<img src="/nutstash.svg" alt="logo" class="w-72" />
			</div>
			<p class="text-xl">
				Nutstash is a Cashu wallet for your browser, that lets you connect to multiple Cashu mints.
			</p>
			<div class="flex gap-2">
				<OpenWalletButton id={'2'} />
				<a class="btn btn-primary btn-outline flex items-center gap-1" href="#run-yourself">
					<p>Run it yourself</p>
				</a>
			</div>
		</div>
	</div>
</div>
