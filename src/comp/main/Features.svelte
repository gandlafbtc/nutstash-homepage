<script>
import { features } from "../../data/features";
	import Feature from "./Feature.svelte";
</script>


{#each features as feature}
     <Feature imgUrl={feature.imageUrl} text={feature.text} title={feature.title} icon={feature.icon}></Feature>
{/each}