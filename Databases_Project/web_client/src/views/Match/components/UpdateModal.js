import React from 'react'
import {
	Dialog, DialogActions, DialogTitle, DialogContent,
	TextField,
	Slide,
	Button
} from '@material-ui/core'


const Transition = props => (
	<Slide direction="up" {...props} />
)

const UpdateModal = ({
	open,
	onChangeState,
	handleUpdate,
	inputs,
	handleChange
}) => (
	<Dialog
		open={open}
		TransitionComponent={Transition}
		keepMounted
		onClose={onChangeState}
		aria-labelledby="alert-dialog-slide-title"
		aria-describedby="alert-dialog-slide-description"
	>
		<DialogTitle id="alert-dialog-slide-title">
			Update Modal
		</DialogTitle>
		<DialogContent>{
			Object.keys(inputs).map(key =>
				<TextField
					key={key}
					id={key}
					label={key}
					value={inputs[key]}
					onChange={handleChange(key)}
					margin="normal"
					style={{ width: '300px' }}
				/>)
		}</DialogContent>
		<DialogActions>
			<Button onClick={onChangeState} color="primary" variant="raised">
				Close
			</Button>
			<Button onClick={handleUpdate} color="secondary" variant="raised">
				Update
			</Button>
		</DialogActions>
	</Dialog>
)

export default UpdateModal