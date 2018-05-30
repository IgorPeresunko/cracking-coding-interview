import React from 'react'
import styled from 'styled-components'
import {
	Dialog,
	DialogActions, DialogContent, DialogContentText, DialogTitle,
	Slide,
	Button
} from '@material-ui/core'


const Transition = props => (
	<Slide direction="up" {...props} />
)

const HeroesDialog = ({ open, onChangeState, hero }) => (
	<Dialog
		open={open}
		TransitionComponent={Transition}
		keepMounted
		onClose={onChangeState}
		aria-labelledby="alert-dialog-slide-title"
		aria-describedby="alert-dialog-slide-description"
	>
		<DialogTitle id="alert-dialog-slide-title">
			{ hero.hero_name || "loading" }
		</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-slide-description">
				<Span>Primary attribute: { hero.primary_attr }</Span>
				<Span>Attack type: { hero.attack_type }</Span>
				<Span>Hero roles: { hero.roles ? hero.roles.split(',').join(', ') : '' }</Span>
				<Span>How many legs hero has? { hero.legs }</Span>
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onChangeState} color="primary" variant="raised">
				Close
			</Button>
		</DialogActions>
	</Dialog>
)

const Span = styled.span`
	display: block;
`

export default HeroesDialog