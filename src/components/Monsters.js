import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import GetMonsters from "./GetMonsters";

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

function createData(
	name,
	size,
	type,
	alignment,
	armor_class,
	hitpoints,
	hit_die,
	speed
) {
	return {
		name,
		size,
		type,
		alignment,
		armor_class,
		hitpoints,
		hit_die,
		speed
	};
}

const rows = [
	createData(
		"Bugbear",
		"Medium",
		"humanoid",
		"Chaotic Evil",
		16,
		27,
		"5d8",
		"30 ft"
	),
	createData(
		"Duergar",
		"Medium",
		"Humanoid",
		"Lawful Evil",
		16,
		26,
		"4d8",
		"25 ft"
	),
	createData(
		"Giant Goat",
		"Large",
		"Beast",
		"Unaligned",
		11,
		19,
		"3d10",
		"40 ft"
	),
	createData(
		"Gibbering Mouther",
		"Medium",
		"Aberration",
		"Neutral",
		9,
		67,
		"9d8",
		"10 ft"
	),
	createData(
		"Minotaur Skeleton",
		"Large",
		"Undead",
		"Lawful Evil",
		12,
		67,
		"9d10",
		"40 ft"
	)
];

export default function Monsters() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Monster List</TableCell>
						<TableCell align="right">Size&nbsp;</TableCell>
						<TableCell align="right">Alignment&nbsp;</TableCell>
						<TableCell align="right"> AC </TableCell>
						<TableCell align="right"> HP </TableCell>
						<TableCell align="right">Speed&nbsp;</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.size}</TableCell>
							<TableCell align="right">{row.alignment}</TableCell>
							<TableCell align="right">{row.armor_class}</TableCell>
							<TableCell align="right">{row.hitpoints}</TableCell>
							<TableCell align="right">{row.speed}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<GetMonsters />
			<Button variant="contained" color="primary" href="/">
				Home
			</Button>
			<Button variant="contained" color="primary" href="/dungeonizer">
				Roll a Dungeon!
			</Button>
			<Button variant="contained" color="primary" href="/initiative">
				Roll Initiative!
			</Button>
		</TableContainer>
	);
}
