import { FC } from "react";

import Form from "../../../components/forms/Form";
import CheckboxInput from "../../../components/forms/inputs/CheckboxInput";
import DateInput from "../../../components/forms/inputs/DateInput";
import EmailInput from "../../../components/forms/inputs/EmailInput";
import NumberInput from "../../../components/forms/inputs/NumberInput";
import PasswordInput from "../../../components/forms/inputs/PasswordInput";
import SelectInput from "../../../components/forms/inputs/SelectInput";
import TextInput from "../../../components/forms/inputs/TextInput";
import * as SS from "../styled";

const InputsComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>Inputs</h1>
		<Form onSubmit={console.info}>
			<SS.ComponentsListWrapper>
				<h3>CheckboxInput</h3>
				<SS.ComponentsRowWrapper>
					<CheckboxInput label="test-label" name="checkbox-input-1" />
					<CheckboxInput
						label="test-label"
						defaultChecked
						name="checkbox-input-2"
					/>
					<CheckboxInput label="test-label" name="checkbox-input-3" hasError />
				</SS.ComponentsRowWrapper>
				<h3>DateInput</h3>
				<SS.ComponentsRowWrapper>
					<DateInput label="test-label" name="date-input-1" />
					<DateInput
						label="test-label"
						defaultValue="1997-01-02"
						name="date-input-2"
					/>
					<DateInput label="test-label" name="date-input-3" hasError />
					<DateInput label="test-label" name="date-input-4" enableTime />
					<DateInput
						label="test-label"
						defaultValue="1997-01-02T10:00"
						name="date-input-5"
						enableTime
					/>
					<DateInput
						label="test-label"
						name="date-input-6"
						enableTime
						hasError
					/>
				</SS.ComponentsRowWrapper>
				<h3>EmailInput</h3>
				<SS.ComponentsRowWrapper>
					<EmailInput label="test-label" name="email-input-1" />
					<EmailInput
						label="test-label"
						defaultValue="test@test.test"
						name="email-input-2"
					/>
					<EmailInput label="test-label" name="email-input-3" hasError />
				</SS.ComponentsRowWrapper>
				<h3>NumberInput</h3>
				<SS.ComponentsRowWrapper>
					<NumberInput label="test-label" name="number-input-1" />
					<NumberInput
						label="test-label"
						defaultValue={10}
						name="number-input-2"
					/>
					<NumberInput label="test-label" name="number-input-3" hasError />
				</SS.ComponentsRowWrapper>
				<h3>PasswordInput</h3>
				<SS.ComponentsRowWrapper>
					<PasswordInput label="test-label" name="password-input-1" />
					<PasswordInput
						label="test-label"
						defaultValue="test-default-value"
						name="password-input-2"
					/>
					<PasswordInput label="test-label" name="password-input-3" hasError />
				</SS.ComponentsRowWrapper>
				<h3>TextInput</h3>
				<SS.ComponentsRowWrapper>
					<TextInput label="test-label" name="text-input-1" />
					<TextInput
						label="test-label"
						defaultValue="test-default-value"
						name="text-input-2"
					/>
					<TextInput label="test-label" name="text-input-3" hasError />
				</SS.ComponentsRowWrapper>
				<h3>SelectInput</h3>
				<SS.ComponentsRowWrapper>
					<SelectInput
						label="test-label"
						name="select-input-1"
						choices={[
							{
								value: 1,
								label: "Opción 1",
							},
							{
								value: 2,
								label: "Opción 2",
							},
						]}
					/>
					{/* <SelectInput
						label="test-label"
						defaultValue="test-default-value"
						name="select-input-2"
						choices={[
							{
								value: 1,
								label: "Opción 1",
							},
							{
								value: 2,
								label: "Opción 2",
							},
						]}
					/>
					<SelectInput
						label="test-label"
						name="select-input-3"
						choices={[
							{
								value: 1,
								label: "Opción 1",
							},
							{
								value: 2,
								label: "Opción 2",
							},
						]}
						hasError
					/> */}
				</SS.ComponentsRowWrapper>
			</SS.ComponentsListWrapper>
		</Form>
	</SS.ComponentsListWrapper>
);

export default InputsComponenstPage;
