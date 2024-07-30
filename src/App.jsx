import { HashRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { CountryPage } from "./pages/CounrtyPage/CountryPage";

export const App = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='?/:countryName'
						element={<CountryPage />}
					/>
				</Routes>
			</HashRouter>
		</>
	);
};
