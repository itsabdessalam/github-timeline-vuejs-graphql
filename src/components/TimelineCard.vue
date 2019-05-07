<template>
	<div class="timeline-card">
		<div class="date">
			<p>{{ currentRepo.createdAt | formatDate }}</p>
		</div>
		<div class="content">
			<div class="header">
				<h3>
					<a
						:href="currentRepo.url"
						target="_blank"
						rel="noopener noreferrer"
						>{{ currentRepo.name }}</a
					>
				</h3>
			</div>
			<div class="infos">
				<p class="description">{{ currentRepo.description }}</p>
			</div>
			<div class="footer">
				<ul>
					<li class="language">
						<span
							class="icon color"
							:style="{
								backgroundColor:
									currentRepo.languages.nodes[0].color
							}"
						></span
						>{{ currentRepo.languages.nodes[0].name }}
					</li>
					<li class="stars">
						<svg
							class="icon octicon octicon-star mr-1"
							viewBox="0 0 14 16"
							version="1.1"
							width="14"
							height="16"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
							></path>
						</svg>
						{{ currentRepo.stargazers.totalCount }}
					</li>
					<li class="forks">
						<svg
							class="icon octicon octicon-git-branch mr-1"
							viewBox="0 0 10 16"
							version="1.1"
							width="10"
							height="16"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
							></path>
						</svg>

						{{ currentRepo.forkCount }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script>
import {formatDate} from "@/utils";
export default {
	name: "TimelineCard",
	props: {
		repo: Object
	},
	data() {
		return {
			currentRepo: this.repo
		};
	},
	filters: {
		formatDate: date => {
			return formatDate(date);
		}
	}
};
</script>

<style lang="scss" scoped>
.timeline-card {
	padding-left: 45px;
	position: relative;
	&::before {
		position: absolute;
		top: 18px;
		left: 15px;
		display: block;
		content: "";
		width: 3px;
		height: 100%;
		background-color: #e6ebf1;
	}

	.date {
		position: relative;
		color: #495057;
		&::before {
			position: absolute;
			top: -5px;
			left: -45px;
			display: block;
			content: "";
			width: 30px;
			height: 30px;
			background: #586069
				url("data:image/svg+xml;charset=utf8,<svg aria-hidden='true' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='14' height='16'><path fill='white' d='M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z'></path></svg>")
				center no-repeat;
			border-radius: 50%;
		}
	}
	.content {
		background: #ffffff;
		border-radius: 3px;
		padding: 15px;
		box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.05);
		max-width: 520px;
		white-space: pre-wrap;
		word-wrap: break-word;
		white-space: normal;
		.header {
			h3 {
				margin: 0;
				a {
					text-decoration: none;
					color: #176eff;
				}
			}
		}
		.infos {
			.description {
				color: #495057;
				font-size: 14px;
			}
		}
		.footer {
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				li {
					display: flex;
					align-items: center;
					font-size: 12px;
					margin-right: 10px;
					color: #4b525a;

					svg {
						fill: #4b525a;
					}

					&.language {
						.color {
							display: inline-block;
							width: 12px;
							height: 12px;
							border-radius: 50%;
							margin-right: 4px;
						}
					}
					.icon {
						margin-right: 4px;
					}
				}
			}
		}
	}
}
</style>
