import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const {
			onConnect,
			onIncrement,
			onDelete,
			onDecrement,
			counters,
			onClaim,
			allIncrease
		} = this.props;
		return (
			<div>
				<button
					className="btn btn-success m-2"
					onClick={onConnect}
				>

					Connnect Wallet
				</button>
				<button
					className="btn btn-success m-2"
					onClick={allIncrease}
				>test</button>
				<button
					className="btn btn-primary m-2"
					onClick={onClaim}

				>
					Claim
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
