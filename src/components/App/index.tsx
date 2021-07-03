import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from 'styles/global'

const App = (): ReactElement => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<h1>App is working</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	</>
)

export default App
