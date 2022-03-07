import './index.css';
import { useEffect, useState } from "react";

import GridContents from "./GridContents";
import GridTotal from "./GridTotal";

export default function Grid() {
	const ws1 = useState('');
	const ws2 = useState('');
	const ws3 = useState('');
	const ws4 = useState('');
	const ws5 = useState('');

	const workArray = useState([]);

	useEffect(() => {
		workArray[1]([ws1[0], ws2[0], ws3[0], ws4[0], ws5[0]])
	}, [ws1[0], ws2[0], ws3[0], ws4[0], ws5[0]])

	return (
		<div className={'grid-section'}>
			<GridHeader />
			{
				[ws1, ws2, ws3, ws4, ws5].map(
					(v, idx) => <GridContents workState={v} key={idx} />
				)
			}
			<GridTotal working={workArray} />
		</div>
	)
}

function GridHeader() {
	return (
		<header className={'grid-header grid-flex'}>
			<div className={'grid-title'}>Arrive</div>
			<div className={'grid-title'}>Leave</div>
			<div className={'grid-title'}>Working</div>
			<div className={'grid-title'}>Break</div>
		</header>
	)
}

