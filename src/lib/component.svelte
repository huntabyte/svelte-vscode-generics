<script lang="ts" module>
	type T = unknown;
	type U = unknown;
</script>

<script lang="ts" generics="T extends Record<string, unknown>[], U extends keyof T[number]">
	import type { SomeType } from '$lib';

	let {
		someProp
	}: {
		someProp: SomeType<T, U>;
	} = $props();
</script>
