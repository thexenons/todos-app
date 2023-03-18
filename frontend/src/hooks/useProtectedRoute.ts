import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { PageKey } from "../pages";
import router from "../router";
import { getPagePath } from "../router/utils";
import { accessTokenAtom } from "../state/user";

const useProtectedRoute = (): boolean => {
  const accessToken = useAtomValue(accessTokenAtom);

  useEffect(() => {
    if (!accessToken) {
      router.navigate(getPagePath(PageKey.login));
    }
  }, [accessToken]);

  return !!accessToken;
};

export default useProtectedRoute;
