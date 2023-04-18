<script>
	import OpenWalletButton from "./OpenWalletButton.svelte";

</script>

<div class="navbar bg-base-100 flex justify-between">
	<div class="flex gap-2">
		<label for="my-drawer" class="btn btn-square drawer-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</label>
		<a class="btn btn-ghost normal-case text-xl" href="/">
			<div class="h-10">
				<img src="/nutstash.svg" alt="logo" class="h-10" />
			</div>
		</a>
	</div>
    <OpenWalletButton></OpenWalletButton>
	
</div>
