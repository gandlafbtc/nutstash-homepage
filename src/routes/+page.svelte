<script>
	import WhatIsCashu from "../comp/main/WhatIsCashu.svelte";
import Nutstash from "../comp/main/Nutstash.svelte";
	import Opensource from "../comp/main/Opensource.svelte";
	import Run from "../comp/main/Run.svelte";
import { message } from "../stores/message";
	import Features from "../comp/main/Features.svelte";

const deleteMessage = ()=>{
    message.set('')
}
</script>
<div class="flex items-start justify-start bg-primary">
    <div class="w-full grid grid-cols-3 gap-1 m-1">
    {#if $message}
    <div class="rounded-sm bg-warning col-span-3 p-1 flex justify-between items-center">
        <p class="text-warning-content">{$message}</p>
        <button class="w-4 h-4 rounded-full bg-warning-content flex items-center justify-center" on:click={deleteMessage}>
            <p class="text-warning text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </p>
            </button>
    </div>
    {/if}
    
    <Nutstash></Nutstash>
    <WhatIsCashu></WhatIsCashu>
    <Opensource></Opensource>
    <Run></Run>
    <div class="divider col-span-3">Features</div>
    <Features></Features>
    </div>
</div>

