import { useEffect, useState } from "react";
import { calculateTotal } from "../../util";

export default function GridTotal({ working }) {
	const [total, setTotal] = useState('');

	useEffect(() => {
		setTotal(calculateTotal(working[0]))
	}, [working])

	return (
		<header className={'grid-header grid-flex'}>
			<div className={'grid-title'}/>
			<div className={'grid-title'}/>
			<div className={'grid-title'}>{total}</div>
			<div className={'grid-title'}/>
		</header>
	)
}