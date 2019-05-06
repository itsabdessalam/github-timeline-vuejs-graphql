<template>
	<div id="app">
		<Header></Header>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
	name: "app",
	components: {
		Header,
		Footer
	}
};
</script>
<style src="@/assets/fonts/index.scss" lang="scss"></style>
<style src="@/assets/stylesheets/scss/index.scss" lang="scss"></style>
