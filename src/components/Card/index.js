import React, { useState } from "react";
import "./styles.css";

function Card({ card }) {
	const [isOpened, setIsOpened] = useState(card.isOpened);
	// console.log(card);
	const handleClick = () => {
		console.log(card);
		console.log(isOpened);
		setIsOpened(!isOpened);
	};
	return (
		<div
			className={`border border-zinc-800 rounded p-3 relative hover:bg-slate-800 hover:opacity-20 cursor-pointer`}
		>
			<div
				className={` flex justify-center items-center flip h-24 w-24 ${
					isOpened && "flip-opened"
				}`}
				onClick={handleClick}
			>
				<div className="flip-back">
					<img src={require(`./../../assets/${card.img}`)} alt={card.id} />
				</div>

				<h1 className={`text-5xl text-gray-400 flip-front`}>?</h1>
			</div>
		</div>
	);
}

export default Card;
