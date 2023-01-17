<script lang="ts">
	import type { Icon as IconType } from "../../model/Icon";
	import Icon from "./Icon.svelte";


export let title: string
export let imgUrl: string
export let text: string
export let icon: IconType

</script>

<div class="bg-base-200 items-start col-span-3 lg:col-span-1 flex flex-col justify-between">
    <div class="">
        <div class="flex flex-col gap-3 items-center text-center mt-3 mx-6 mb-5">
            <h2 class="text-3xl font-bold">
                {title}
            </h2>
            <div>
                <button class="btn rounded-full">
                    <Icon icon={icon}></Icon>
                </button>
            </div>
            <p class="text-lg">
                {text}
            </p>
        </div>
    </div>
    <div class="w-full overflow-clip max-h-72 opacity-75 hover:opacity-100 transition-opacity">
        <img src="{imgUrl}" alt="logo" class="rounded-t-2xl">
    </div>
</div>