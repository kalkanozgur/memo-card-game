import React, { useState } from "react";

function Card({ card }) {
	const [isOpened, setIsOpened] = useState(card.isOpened);
	// console.log(card);
	const handleClick = () => {
		console.log(card);
		setIsOpened(!isOpened);
	};
	return (
		<div className="border rounded p-3 relative hover:bg-slate-800 hover:opacity-20 cursor-pointer">
			<div
				className="h-24 w-20 flex justify-center items-center "
				onClick={handleClick}
			>
				{!isOpened ? (
					<img src={require(`./../../assets/${card.img}`)} alt={card.id} />
				) : (
					<h1 className="text-5xl text-gray-400">?</h1>
				)}
			</div>
		</div>
	);
}

export default Card;
