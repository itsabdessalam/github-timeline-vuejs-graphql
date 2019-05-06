<template>
	<div class="content">
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
		<div class="results" v-if="clicked">
			<ul class="timeline" v-if="!isLoading">
				<li
					class="timeline-item"
					v-for="repo in user.repositories.nodes"
					:key="repo.id"
				>
					<TimelineCard :repo="repo"></TimelineCard>
				</li>
			</ul>
			<div class="response error" v-else-if="errors.length > 0">
				<div v-for="(error, index) in errors" :key="index">
					{{ error }}
				</div>
			</div>
			<div class="response" v-else>
				<Loader></Loader>
			</div>
		</div>
	</div>
</template>

<script>
import {USER_REPOSITORIES} from "../graphql/queries";
import Loader from "@/components/Loader.vue";
import TimelineCard from "@/components/TimelineCard.vue";
export default {
	name: "Timeline",
	data() {
		return {
			user: null,
			username: null,
			isLoading: true,
			clicked: false,
			errors: []
		};
	},
	components: {
		Loader,
		TimelineCard
	},
	methods: {
		queryRepos(username) {
			this.reset();
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
		},
		reset() {
			this.user = {};
			this.isLoading = true;
			this.clicked = true;
			this.errors = [];
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	position: fixed;
	height: 100%;
	width: 100%;
	padding: 130px 15px 80px 15px;
	max-width: 520px;

	.search {
		position: relative;
		height: 55px;
		input {
			font-size: 16px;
			padding: 5px 10px;
			padding-right: 90px;
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
			transition: all 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
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
	.results {
		height: 100%;
		.timeline {
			height: calc(100% - 45px);
			overflow: scroll;
			padding: 20px 0;
			list-style: none;
			padding: 0;
			margin: 0;
		}
		.response {
			margin: 20px 0;
			max-width: 520px;
			white-space: pre-wrap;
			word-wrap: break-word;
			white-space: normal;

			&.error {
				background: #fef4f6;
				color: #f0506e;
				font-size: 14px;
				padding: 15px;
			}
		}
	}
}
</style>
