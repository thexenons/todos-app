import { useEffect, useState } from "react";

import dataProvider from "../../api/dataProvider";
import { ENDPOINT } from "../../api/endpoints";
import { GetList } from "../../api/types";

const useFetchGetList = <T = unknown>(endpoint: ENDPOINT) => {
	const [data, setData] = useState<GetList<T> | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await dataProvider.getList<T>(endpoint);
				setData(data);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [endpoint]);

	return { data, loading, error };
};

export default useFetchGetList;
