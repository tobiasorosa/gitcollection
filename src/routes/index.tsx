import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboard';
import { Repo } from '../Pages/Repo';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route component={Dashboard} path='/' exact />
			<Route component={Repo} path='/repositories' />
		</Switch>
	);
};
