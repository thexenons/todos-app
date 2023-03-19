import { useEffect, useState } from "react";

import dataProvider from "../../api/dataProvider";
import { ENDPOINT } from "../../api/endpoints";

const useFetchGet = <T = unknown>(endpoint: ENDPOINT, id: number) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await dataProvider.get<T>(endpoint, id);
				setData(data);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [endpoint, id]);

	return { data, loading, error };
};

export default useFetchGet;
