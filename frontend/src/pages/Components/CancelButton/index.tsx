import { FC } from "react";

import CancelButton from "../../../components/molecules/CancelButton";
import * as SS from "../styled";

const CancelButtonComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>CancelButton</h1>
		<SS.ComponentsRowWrapper>
			<CancelButton />
			<CancelButton disabled />
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default CancelButtonComponenstPage;
