<template>
	<div>
		<h2>GitHub Timeline</h2>
		<p v-if="loading > 0">
			Loading...
		</p>
		<div v-else>
			<ul class="timeline">
				<li
					class="timeline-item"
					v-for="repo in user.repositories.nodes"
					:key="repo.id"
				>
					{{ repo.name }}
				</li>
			</ul>
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
			loading: 0
		};
	},
	apollo: {
		user: {
			query: USER_REPOSITORIES,
			variables() {
				return {
					login: "abdessalam98"
				};
			}
		}
	}
};
</script>
