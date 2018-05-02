import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		userById: (_, { userid }) =>
			generalRequest(`${URL}${userid}`, 'GET'),
		userByUsername: (_, { username }) =>
			generalRequest(`${URL}u/${username}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}register`, 'POST', user),
		deleteUser: (_, { username }) =>
			generalRequest(`${URL}u/${username}`, 'DELETE'),
		login: (_, {username, password}) =>
			generalRequest(`${URL}login`, 'POST', {username, password})
	}
};

export default resolvers;