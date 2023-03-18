import DataProvider from "../../dataProvider";
import { ENDPOINT } from "../../endpoints";

export const postAuthLogin = <Res = unknown>({
  username,
  password,
}: {
  username: string;
  password: string;
}) => DataProvider.post<Res>(ENDPOINT.AUTH_LOGIN, { username, password });
