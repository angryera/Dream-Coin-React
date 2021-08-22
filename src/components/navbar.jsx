import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-brand">
				<i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
				<span className="btn btn-primary" style={{ width: 50 }}>
					{totalCounters}
				</span>
				Items
			</div>
		</nav>
	);
};

export default NavBar;
