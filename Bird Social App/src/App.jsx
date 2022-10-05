import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Screens
import Home from './screens/Home'
import Signup from './screens/Signup'
import Signin from './screens/Signin'
import Wrapper from './screens/Wrapper'
import Dashboard from './screens/Dashboard'

function App() {
	return (
		<>
			<div className="outer-container">

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="register" element={<><Home /><Signup /></>} />
					<Route path="login" element={<><Home /><Signin /></>} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="*" element={<><div>404 Not Found</div></>} />
				</Routes>

			</div>

		</>
	)
}

export default App
