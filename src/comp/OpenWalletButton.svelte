<script>
    export let id = ''
    let isOpenDialog = false;
	const openWalletDialog = () => {
		isOpenDialog = true;
	};
</script>

<button class="btn btn-primary flex items-center gap-1" on:click={openWalletDialog}>
    <p>Wallet</p>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 pb-1"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
    </svg>
</button>


<input type="checkbox" id="open-wallet-dialog-{id}" class="modal-toggle" bind:checked={isOpenDialog} />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">We moved the nutstash wallet to wallet.nutstash.app!</h3>

		<p class="py-4">
			Make sure to send your tokens to the new wallet if you've been using the
			cashu-wallet.vercel.app
		</p>
		<a
			class="btn btn-primary flex items-center gap-1"
			target="_blank"
			rel="noreferrer"
			href="https://wallet.nutstash.app"
		>
			<p>Wallet</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 pb-1"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/>
			</svg>
		</a>
		<div class="modal-action">
			<label for="open-wallet-dialog-{id}" class="btn">close</label>
		</div>
	</div>
</div>
