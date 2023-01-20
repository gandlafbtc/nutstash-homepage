<script lang="ts">
	import CollapseListElement from "../../comp/CollapseListElement.svelte";
import { risks } from "../../data/risks";


	

</script>

<div class="grid w-full h-full bg-primary p-1">
    <div class="w-full h-full flex flex-col items-center justify-start gap-2 bg-base-100 p-2">
        <p class="text-xl font-bold">
            Risks when using nutstash
        </p>
        {#each risks as risk}
             <CollapseListElement listElement={risk} ></CollapseListElement>
        {/each}
    </div>
    
    </div>
    