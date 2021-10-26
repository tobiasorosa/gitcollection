import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from '../Pages/Dashboard';
// import { Repo } from '../Pages/Repo';

const Dashboard = React.lazy(() =>
	import(
		/*webpackPrefetch: true */
		/* webpackChunkName: "dashboard" */ '../Pages/Dashboard'
	)
);
const Repo = React.lazy(() =>
	import(
		/*webpackPrefetch: true */
		/* webpackChunkName: "repo" */ '../Pages/Repo'
	)
);

export const Routes: React.FC = () => {
	return (
		<React.Suspense fallback={'Loading...'}>
			<Switch>
				<Route component={Dashboard} path='/' exact />
				<Route component={Repo} path='/repositories/:repository+' />
			</Switch>
		</React.Suspense>
	);
};
