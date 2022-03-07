import { useCallback, useEffect, useState } from "react";
import { timeCalculate } from "../../util";

export default function GridContents({ workState }) {
	const [arrive, setArrive] = useState('');
	const [leave, setLeave] = useState('');
	const [working, setWorking] = workState;
	const [breaking, setBreaking] = useState('0100');

	useEffect(() => {
		setWorking(timeCalculate(arrive, leave, breaking));
	}, [arrive, leave, breaking, setWorking])

	return (
		<section className={'grid-contents grid-flex'}>
			<Input setState={setArrive} />
			<Input setState={setLeave} />
			<div className={'grid-title'}>{working}</div>
			<Input setState={setBreaking} defaultValue={'0100'} />
		</section>
	)
}

function Input ({ setState, defaultValue }) {
	const onChange = useCallback((e) => {
		setState(e.target.value);
	}, [setState]);

	return (
		<div className={'grid-input'}>
			<input onChange={onChange} type="text" maxLength={4} placeholder={'0900'} defaultValue={defaultValue}/>
		</div>
	)
}