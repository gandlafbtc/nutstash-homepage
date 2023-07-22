<script>
	import Pwa from '../comp/PWA.svelte';
	import Umbrel from '../comp/Umbrel.svelte';
	import WebWallet from '../comp/WebWallet.svelte';
	import Features from '../comp/main/Features.svelte';
	import WhatIsCashu from '../comp/main/WhatIsCashu.svelte';
</script>

<div class="flex flex-col items-start justify-start bg-white">
	<div
		class="from-[#5616f7] bg-gradient-to-b to-secondary flex flex-col items-center text-center w-full"
	>
		<WhatIsCashu />
		<div class="h-40" />
		<Features />
		<div class="h-40" />
		<Pwa />
		<div class="h-40" />
		<WebWallet />
		<div class="h-40" />
	</div>
    <div
		class="to-[#5616f7] bg-gradient-to-b from-secondary flex flex-col items-center text-center w-full"
	>
        <Umbrel></Umbrel>
    </div>
</div>
