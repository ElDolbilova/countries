import { Link } from "react-router-dom";

export const CountryLink = ({ countryName }) => {
	return <Link to={countryName.toLowerCase()}>{countryName}</Link>;
};
