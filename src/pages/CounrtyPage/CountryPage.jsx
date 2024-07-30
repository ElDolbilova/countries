import { useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "../../store/country/country";
import { Country } from "../../components/Country/Country";

export const CountryPage = () => {
	const { countryName } = useParams();
	const { data, error, isLoading } = useGetCountryByNameQuery(countryName);
	return (
		<main>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<Country country={data[0]} />
			) : null}
		</main>
	);
};
