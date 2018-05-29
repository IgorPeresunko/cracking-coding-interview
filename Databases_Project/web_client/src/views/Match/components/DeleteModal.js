import React from 'react'
import {
	Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText,
	Slide,
	Button
} from '@material-ui/core'


const Transition = props => (
	<Slide direction="up" {...props} />
)

const DeleteModal = ({ open, onChangeState, handleDelete }) => (
	<Dialog
		open={open}
		TransitionComponent={Transition}
		keepMounted
		onClose={onChangeState}
		aria-labelledby="alert-dialog-slide-title"
		aria-describedby="alert-dialog-slide-description"
	>
		<DialogTitle id="alert-dialog-slide-title">
			Are you sure you want to delete this game?
		</DialogTitle>
		<DialogContent>
			<DialogContentText>
				The operation could not be discarded.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onChangeState} color="primary" variant="raised">
				Close
			</Button>
			<Button onClick={handleDelete} color="secondary" variant="raised">
				Delete
			</Button>
		</DialogActions>
	</Dialog>
)

export default DeleteModal