import { useGetAllCountriesQuery } from "../../store/country/country";
import { CountryLink } from "../../components/CounrtyLink/CountryLink";
import styles from "./styles.module.css";

export const HomePage = () => {
	const { data, error, isLoading } = useGetAllCountriesQuery();
	return (
		<main>
			{error ? (
				<span>Oh no, there was an error</span>
			) : isLoading ? (
				<span>Loading...</span>
			) : data ? (
				<>
					<ul className={styles.country_list}>
						{data.map((country) => (
							<li>
								<CountryLink countryName={country.name.common} />
							</li>
						))}
					</ul>
				</>
			) : null}
		</main>
	);
};
