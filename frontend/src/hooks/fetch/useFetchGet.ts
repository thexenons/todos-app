import { useEffect, useState } from "react";

import { ENDPOINT } from "../../api/endpoints";
import useDataProvider from "./useDataProvider";

const useFetchGet = <T = unknown>(endpoint: ENDPOINT, id: number) => {
	const dataProvider = useDataProvider();
	const [data, setData] = useState<T>();
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
	}, [dataProvider, endpoint, id]);

	return { data, loading, error };
};

export default useFetchGet;
