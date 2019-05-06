<template>
	<div class="footer">
		<p>
			© 2019. All rights reserved
		</p>
		<p>
			Made with <span class="heart">♥</span> by
			<a href="https://abdessalam.dev/">Abdessalam Benharira</a>
		</p>
	</div>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style scoped lang="scss">
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.heart {
		color: #fd184d;
	}
	p {
		margin: 0;
	}
	a {
		text-decoration: none;
		color: #678;
		transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
		&:hover {
			color: inherit;
		}
	}
}
</style>
