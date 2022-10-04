import { useSelector, useDispatch } from "react-redux";
import { createCard } from "./context/CardSlice";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
// TODO
/*
6x5 Card componenti sırayla yerleştirilecek keyler index olacak.
Card: {id: nanoid, imgUrl= string} olacak
15 adet card objesi iki ayrı listede birleştirilip 30 elemanlı bu liste shuffle edilecek
30 adet card shulledList.map((card, index) => (Card<key=index card=card>)) şeklinde ekrana dağıtılacak
aynı anda max 2 card açılabilecek,
oyun 200 puanla başlayacak
doğru kart 50 puan verip açık kalacak,
yanlış eşleşen kartlar 20 puan götürüp kapanacak
*/
function App() {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.card.items);
	const cardList = useSelector((state) => state.card.list);
	const concArray = items.concat(items);
	const [shuffle, setShuffle] = useState(
		[...concArray].sort((a, b) => 0.5 - Math.random())
	);

	useEffect(() => {
		if (cardList.length < 16) {
			setShuffle([...concArray].sort((a, b) => 0.5 - Math.random()));
			shuffle.map((card) => dispatch(createCard(card.id, card.img)));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [concArray]);
	// console.log(cardList);
	return (
		cardList && (
			<div className="container w-9/12 h-full self-center">
				<Header />
				<div className="grid grid-cols-6 grid-rows-5 gap-3 justify-items-center items-center">
					{cardList.map((card, index) => (
						<Card card={card} key={index} />
					))}
				</div>
			</div>
		)
	);
	// : (
	// 	`cardList: ${cardList}`
	// );
}

export default App;
