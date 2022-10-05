import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOpenedCards, flipCard } from "../../context/CardSlice";
import "./styles.css";

//TODO
/*
açılan cardlar flipCard ile openedCardList'e push edilecek
openedCardList eleman sayısı 2 olduğunda açılan cardları check edecek, eğer cardlar aynıysa completedCardlist'e push edilecek.
completedCard elemanları disable olacak

*/
function Card({ card }) {
	const openedList = useSelector((state) => state.card.openedList);
	const dispatch = useDispatch();
	// console.log(card);
	const handleClick = () => {
		// console.log(card);
		dispatch(flipCard(card));
	};
	if (openedList.length === 2) {
		setTimeout(() => {
			dispatch(checkOpenedCards());
		}, 500);
	}
	return (
		<div
			className={`border border-zinc-800 rounded p-3 relative hover:opacity-30 cursor-pointer ${
				card.isCompleted && "bg-green-700 "
			}`}
		>
			<div
				className={` flex justify-center items-center flip h-24 w-24  ${
					card.isOpened && "flip-opened"
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
