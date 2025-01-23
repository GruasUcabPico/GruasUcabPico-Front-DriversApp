import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from "react-auth-kit";

import Menu from "./Menu";
import OrderSelected from "./OrderSelected";
import OrderInProgress from "./orderInProgress";
import OrderFinished from "./OrderFinished";
import OrderCanceled from "./OrderCanceled";
import Login from "./Login";

//create your first component
const Home = () => {

	const store = createStore({
	  authName:'_auth',
	  authType:'cookie',
	  cookieDomain: window.location.hostname,
	  cookieSecure: false,
	});

	const orders = [
		{
			id: 1,
			contract: "Contract A",
			driverAssigned: "Driver 1",
			operator: "Operator 1",
			incidentLocationLat: 10.4627,
			incidentLocationLng: -66.9759,
			destinationLocationLat: 10.4527,
			destinationLocationLng: -66.9659,
			incidentDateTime: "2023-10-01T10:00:00Z",
			totalCost: 1000,
			extraCostApplied: 50,
			ratesPerKm: 5,
			orderStatus: "Pending"
		},
		{
			id: 2,
			contract: "Contract B",
			driverAssigned: "Driver 2",
			operator: "Operator 2",
			incidentLocationLat: 53.54992,
			incidentLocationLng: 10.00678,
			destinationLocationLat: 54.54992,
			destinationLocationLng: 10.10678,
			incidentDateTime: "2023-10-02T11:00:00Z",
			totalCost: 1500,
			extraCostApplied: 75,
			ratesPerKm: 6,
			orderStatus: "Completed"
		},
		{
			id: 3,
			contract: "Contract C",
			driverAssigned: "Driver 3",
			operator: "Operator 3",
			incidentLocationLat: 53.54992,
			incidentLocationLng: 10.00678,
			destinationLocationLat: 54.54992,
			destinationLocationLng: 10.10678,
			incidentDateTime: "2023-10-03T12:00:00Z",
			totalCost: 2000,
			extraCostApplied: 100,
			ratesPerKm: 7,
			orderStatus: "In Progress"
		}
	];
	return (
		<AuthProvider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/menu" element={ <Menu orders={orders}/>} />
					<Route path="/orderSelected/:orderId" element={<OrderSelected />} />
					<Route path="/orderInProgress/:orderId" element={<OrderInProgress />} />
					<Route path="/orderFinished/:orderID" element={<OrderFinished />} />
					<Route path="/orderCanceled/:orderID" element={<OrderCanceled />} />
					<Route index element={<Login />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default Home;