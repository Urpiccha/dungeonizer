import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

const images = [
	{
		url:
			"https://p1.pxfuel.com/preview/959/193/170/dungeons-and-dragons-dungeons-dragons-d-d-dice-game-d20-royalty-free-thumbnail.jpg",
		title: "Roll Initiative!",
		width: "30%",
		name: "initiative"
	},
	{
		url:
			"https://66.media.tumblr.com/9ccdcc0044eab226a5fcaae09a8229b2/tumblr_ochsyyxqzL1qkpz2go1_r1_1280.jpg",
		title: "Roll a Dungeon!",
		width: "35%",
		name: "dungeonizer"
	},
	{
		url: "https://upload.wikimedia.org/wikipedia/commons/6/69/DnD_Hydra.png",
		title: "Roll Some Monsters!",
		width: "35%",
		name: "monsters"
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%"
	},
	image: {
		position: "relative",
		height: 200,
		[theme.breakpoints.down("xs")]: {
			width: "100% !important", // Overrides inline-style
			height: 100
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15
			},
			"& $imageMarked": {
				opacity: 0
			},
			"& $imageTitle": {
				border: "4px solid currentColor"
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: 100,
		color: theme.palette.common.white
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity")
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
			6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity")
	}
}));

export default function ButtonBases() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit">
						Dungeonizer
					</Typography>
				</Toolbar>
			</AppBar>
			{images.map(image => (
				<ButtonBase
					focusRipple
					key={image.title}
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: image.width
					}}
				>
					<Link to={`/${image.name}`}>
						<span
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`
							}}
						/>
						<span className={classes.imageBackdrop} />
						<span className={classes.imageButton} />
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
						>
							{image.title}
							<span className={classes.imageMarked} />
						</Typography>
					</Link>
				</ButtonBase>
			))}
		</div>
	);
}
