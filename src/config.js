if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

module.exports = {
	github_api: process.env.VUE_APP_GITHUB_API,
	github_access_token: process.env.VUE_APP_ACCESS_TOKEN
};
