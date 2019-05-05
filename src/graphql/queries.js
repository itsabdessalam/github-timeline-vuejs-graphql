import gql from "graphql-tag";

export const USER_REPOSITORIES = gql`
	query user($login: String!) {
		user(login: $login) {
			repositories(
				first: 10
				privacy: PUBLIC
				orderBy: {direction: DESC, field: CREATED_AT}
			) {
				nodes {
					id
					name
					url
					description
					descriptionHTML
					shortDescriptionHTML
					forkCount
					stargazers {
						totalCount
					}
					languages(
						first: 1
						orderBy: {field: SIZE, direction: DESC}
					) {
						nodes {
							name
							color
						}
					}
					createdAt
					updatedAt
				}
			}
		}
	}
`;
