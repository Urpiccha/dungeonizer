import React, { Component } from "react";

class MonsterBook extends Component {
	state = {
		monsterCount: 0,
		monsterList: []
	};

	onChange = event => {
		const target = event.target;
		const name = target.name;
		let value = undefined;

		if (target.type === "checkbox") {
			value = target.checked;
		} else if (target.type === "radio") {
			value = target.id;
		} else {
			value = target.value;
		}

		this.setState({
			[name]: value
		});
	};

	getMonsters = () => {
		fetch(`/dndApi/monsters`)
			.then(res => res.json())
			.then(data => {
				if (data.results.length === 0) {
					this.setState({
						spellsList: [
							{
								index: "null",
								name: "Sorry no results found"
							}
						]
					});
				} else {
					this.setState({
						monsterCount: data.count,
						monsterList: data.results
					});
				}
			})
			.catch(error => console.log(error));
	};

	componentDidMount() {
		this.getMonsters();
	}

	render() {
		return (
			<div className="page-handbook">
				<section className="frame gutter">
					<div className="wrapper">
						<h2 className="heading">Monsters</h2>
						<h6>Count - {this.state.monsterCount}</h6>
					</div>
				</section>

				<hr />

				<section className="frame gutter">
					<div className="wrapper">
						<table className="w-100">
							<thead>
								<tr>
									<td>Index</td>
									<td>Name</td>
								</tr>
							</thead>
							<tbody>
								{this.state.monsterList.map((monster, index) => (
									<tr key={index}>
										<td>{monster.index}</td>
										<td>{monster.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		);
	}
}

export default MonsterBook;
