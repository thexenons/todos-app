import { FC, PropsWithChildren } from "react";

import Form from "../components/forms/Form";
import BaseTestComponent from "./BaseTestComponent";

const InputTestComponent: FC<PropsWithChildren> = ({ children }) => (
	<BaseTestComponent>
		<Form onSubmit={() => null}>{children}</Form>
	</BaseTestComponent>
);

export default InputTestComponent;
