import { useEffect, useState } from "react";

import { ENDPOINT } from "../../api/endpoints";
import { GetList } from "../../api/types";
import useDataProvider from "./useDataProvider";

const useFetchGetList = <T = unknown>(endpoint: ENDPOINT) => {
	const dataProvider = useDataProvider();
	const [data, setData] = useState<GetList<T>>();
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
	}, [dataProvider, endpoint]);

	return { data, loading, error };
};

export default useFetchGetList;
