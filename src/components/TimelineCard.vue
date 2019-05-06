<template>
	<div>
		<p>{{ currentRepo.name }}</p>
	</div>
</template>

<style scoped></style>

<script>
export default {
	name: "TimelineCard",
	props: {
		repo: Object
	},
	data() {
		return {
			currentRepo: this.repo
		};
	}
};
</script>
