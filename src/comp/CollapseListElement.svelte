<script lang="ts">
	import type { QnA } from "../model/QnA";
export let listElement : QnA
</script>



<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0" class="collapse w-full"> 
    <div class="collapse-title text-xl font-bold bg-base-300 rounded-t-md flex justify-between">
      {listElement.title}
      <div class="flex items-center gap-2">
            {#each listElement?.tags as tag}
            <div class="badge badge-outline">{tag}</div>
            {/each}
      </div>
    </div>
    <div class="collapse-content bg-base-200 pt-3 rounded-b-md"> 
      <p>{listElement.text}</p>
    </div>
  </div>