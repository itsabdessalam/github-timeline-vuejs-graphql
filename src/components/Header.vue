<template>
	<div class="header">
		<h1>GitHub Timeline</h1>
		<small
			>A GitHub timeline with user's repos annotated with name,
			date,...</small
		>
	</div>
</template>

<style scoped lang="scss">
.header {
	text-align: center;
	margin-bottom: 30px;
	h1 {
		font-size: 38px;
		font-weight: 400 !important;
		margin-top: 0;
		margin-bottom: 15px;
		text-align: center;
	}
	small {
		color: #678;
		text-align: center;
	}
}
</style>

<script>
export default {
	name: "Header"
};
</script>
