import { FC } from "react";

import InputBase from "../../../components/forms/inputs/InputBase";
import * as SS from "../styled";

const InputBaseComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>InputBase</h1>
		<SS.ComponentsListWrapper>
			<h3>Button</h3>
			<SS.ComponentsRowWrapper>
				<InputBase
					label="test-label"
					type="button"
					name="test-name"
					onClick={console.info}
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="button"
					name="test-name"
					onClick={console.info}
				/>
				<InputBase
					label="test-label"
					type="button"
					name="test-name"
					onClick={console.info}
					hasError
				/>
			</SS.ComponentsRowWrapper>
			<h3>Checkbox</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="checkbox" name="test-name" />
				<InputBase
					label="test-label"
					defaultChecked
					type="checkbox"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					type="checkbox"
					name="test-name"
					hasError
				/>
			</SS.ComponentsRowWrapper>
			<h3>Color</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="color" name="test-name" />
				<InputBase
					label="test-label"
					defaultValue="#ffffff"
					type="color"
					name="test-name"
				/>
				<InputBase label="test-label" type="color" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Date</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="date" name="test-name" />
				<InputBase
					label="test-label"
					defaultValue="1997-01-02"
					type="date"
					name="test-name"
				/>
				<InputBase label="test-label" type="date" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>DateTime Local</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="datetime-local" name="test-name" />
				<InputBase
					label="test-label"
					defaultValue="10"
					type="datetime-local"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					type="datetime-local"
					name="test-name"
					hasError
				/>
			</SS.ComponentsRowWrapper>
			<h3>Email</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="email" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="email"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test@test.test"
					type="email"
					name="test-name"
				/>
				<InputBase label="test-label" type="email" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Month</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="month" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="month"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="month"
					name="test-name"
				/>
				<InputBase label="test-label" type="month" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Number</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="number" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="number"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="10"
					type="number"
					name="test-name"
				/>
				<InputBase label="test-label" type="number" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Password</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="password" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="password"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="password"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					type="password"
					name="test-name"
					hasError
				/>
			</SS.ComponentsRowWrapper>
			<h3>Radio</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="radio" name="test-name" />
				<InputBase
					label="test-label"
					defaultChecked
					type="radio"
					name="test-name"
				/>
				<InputBase label="test-label" type="radio" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Range</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="range" name="test-name" />
				<InputBase
					label="test-label"
					defaultChecked
					type="range"
					name="test-name"
				/>
				<InputBase label="test-label" type="range" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Search</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="search" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="search"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="search"
					name="test-name"
				/>
				<InputBase label="test-label" type="search" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Tel</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="tel" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="tel"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="666666666"
					type="tel"
					name="test-name"
				/>
				<InputBase label="test-label" type="tel" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Text</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="text" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="text"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="text"
					name="test-name"
				/>
				<InputBase label="test-label" type="text" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Time</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="time" name="test-name" />
				<InputBase
					label="test-label"
					defaultValue="666666666"
					type="time"
					name="test-name"
				/>
				<InputBase label="test-label" type="time" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Url</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="url" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="url"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="http://www.test.test"
					type="url"
					name="test-name"
				/>
				<InputBase label="test-label" type="url" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
			<h3>Week</h3>
			<SS.ComponentsRowWrapper>
				<InputBase label="test-label" type="week" name="test-name" />
				<InputBase
					label="test-label"
					placeholder="test-placeholder"
					type="week"
					name="test-name"
				/>
				<InputBase
					label="test-label"
					defaultValue="test-default-value"
					type="week"
					name="test-name"
				/>
				<InputBase label="test-label" type="week" name="test-name" hasError />
			</SS.ComponentsRowWrapper>
		</SS.ComponentsListWrapper>
	</SS.ComponentsListWrapper>
);

export default InputBaseComponenstPage;
