import styles from "./styles.module.css";

export const Country = ({ country }) => {
	return (
		<>
			<h1>{country.name.common}</h1>
			<div className={styles.root}>
				<img
					src={country.flags?.png}
					alt={country.flags?.alt}
				/>
				<div className={styles.info}>
					<span>
						<strong>Capital: </strong>
						<span>{country.capital.join(", ")}</span>
					</span>
					<span>
						<strong>Region: </strong>
						<span>{country.region}</span>
					</span>
					<span>
						<strong>Population: </strong>
						<span>{country.population}</span>
					</span>
					<span>
						<strong>Time Zones: </strong>
						<span>{country.timezones.join(", ")}</span>
					</span>
				</div>
			</div>
		</>
	);
};
