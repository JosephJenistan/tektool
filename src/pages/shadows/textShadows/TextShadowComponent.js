import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "../LoadingScreen";
import TextShadowBox from "./TextShadowBox";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "5rem 0",
	},
	subHeading: {
		fontSize: "1.5rem",
		fontWeight: "500",
		textTransform: "uppercase",
		textDecoration: "underline",
		color: theme.palette.accent.black,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	errorMessage: {
		color: theme.palette.spacial.error,
	},
}));

const initialDataState = {
	loading: true,
	error: "",
	data: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				data: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				data: action.payload,
				error: "Something went Wrong!",
			};
		default:
			return state;
	}
};

const TextShadowComponent = () => {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialDataState);

	useEffect(() => {
		fetch("text-shadows.json")
			.then((responce) => responce.json())
			.then((result) => {
				dispatch({
					type: "FETCH_SUCCESS",
					payload: result,
				});
			})
			.catch(() => dispatch({ type: "FETCH_ERROR" }));
	}, []);

	return (
		<>
			<section className={classes.root}>
				<Grid container gap={8} justifyContent='center' py={4}>
					{state.loading && <LoadingScreen />}
					{state.data &&
						state.data.map((data) => (
							<Grid item key={data.id}>
								<TextShadowBox
									styles={data.styles}
									by={data.by}
									link={data.link}
								/>
							</Grid>
						))}
					{state.error && (
						<Paragraph className={classes.errorMessage}>
							{state.error}
						</Paragraph>
					)}
				</Grid>
			</section>
		</>
	);
};

export default TextShadowComponent;
