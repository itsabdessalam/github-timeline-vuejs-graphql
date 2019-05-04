import Vue from "vue";
import App from "./App.vue";

import {ApolloClient} from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import {setContext} from "apollo-link-context";
import {InMemoryCache} from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import * as config from "./config";

const httpLink = createHttpLink({uri: config.github_api});
const authLink = setContext((_, {headers}) => {
	const token = config.github_access_token;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ""
		}
	};
});
const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});
const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
	defaultOptions: {
		$loadingKey: "loading"
	}
});

Vue.use(VueApollo);
Vue.config.productionTip = false;

new Vue({
	el: "#app",
	apolloProvider,
	render: h => {
		return h(App);
	}
});
