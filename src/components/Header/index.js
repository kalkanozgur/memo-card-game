import React from "react";

function Header({ score }) {
	return (
		<div className="my-2">
			<h1 className="text-xl font-semibold ">
				React-Redux-Tailwindcss Memo Card Game
			</h1>
			<div>Score: {score}</div>
		</div>
	);
}

export default Header;
