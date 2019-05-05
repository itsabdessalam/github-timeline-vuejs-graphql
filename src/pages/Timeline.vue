<template>
	<div>
		<form class="search" method="get">
			<label class="search-box">
				<input
					name="username"
					type="text"
					autofocus=""
					placeholder="Search..."
					v-model="username"
				/>
				<button
					:disabled="username === null || username.trim() === ''"
					class="search-button"
					@click.prevent="queryRepos(username)"
				>
					Go
				</button>
			</label>
		</form>
		<div v-if="clicked">
			<ul class="timeline" v-if="!isLoading">
				<li
					class="timeline-item"
					v-for="repo in user.repositories.nodes"
					:key="repo.id"
				>
					{{ repo.name }}
				</li>
			</ul>
			<div v-else-if="errors.length > 0">
				<div v-for="(error, index) in errors" :key="index">
					{{ error }}
				</div>
			</div>
			<div v-else>
				Loading...
			</div>
		</div>
	</div>
</template>

<script>
import {USER_REPOSITORIES} from "../graphql/queries";
export default {
	name: "Timeline",
	data() {
		return {
			user: {},
			username: null,
			isLoading: true,
			clicked: false,
			errors: []
		};
	},
	methods: {
		queryRepos(username) {
			this.clicked = true;
			this.$apollo
				.query({
					query: USER_REPOSITORIES,
					variables: {
						login: username
					}
				})
				.then(result => {
					this.user = result.data.user;
					this.isLoading = false;
				})
				.catch(error => {
					this.errors.push(error.message);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.search {
	position: relative;
	height: 55px;
	input {
		font-size: 16px;
		padding: 5px 10px;
		height: 100%;
		background: 0 0;
		border: 0;
		box-shadow: 0 2px 4px rgba(27, 31, 35, 0.15);
		width: 100%;
		border-radius: 2px;
		background: #fff;
		outline: none;
	}
	.search-button {
		position: absolute;
		right: 10px;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		background-color: #176eff;
		border: 1px solid #176eff;
		border-radius: 3px;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		font-weight: 500;
		padding: 10px 25px;
		transition: all ease 0.2s;
		user-select: none;

		&:hover {
			background-color: #0b6cda;
		}

		&:disabled,
		&[disabled] {
			opacity: 0.5;
			pointer-events: none;
			cursor: not-allowed;
		}
	}
}
</style>
