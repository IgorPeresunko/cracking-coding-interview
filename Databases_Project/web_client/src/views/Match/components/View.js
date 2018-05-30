import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Game from './Game'
import Button from '../../../components/Button'
import CreateModal from './CreateModal'
import UpdateModal from './UpdateModal'
import DeleteModal from './DeleteModal'

const propTypes = {
	match: PropTypes.object.isRequired,
	controls: PropTypes.shape({
		create: PropTypes.func,
		update: PropTypes.update,
		delete: PropTypes.delete
	}).isRequired,
	loading: PropTypes.bool.isRequired
}

const View = ({
	match,
	loading,
	controls,
	modals,
	inputs
}) => loading ? <div>loading</div> : (
	<Wrapper>
		<Game match={match} />

		<Buttons>
			<Button onClick={controls.changeModal('create')}>Create</Button>
			<Button onClick={controls.changeModal('update')}>Update</Button>
			<Button onClick={controls.changeModal('delete')}>Delete</Button>
		</Buttons>

		<CreateModal
			open={modals.create}
			inputs={inputs}
			handleChange={controls.onInputChange}
			onChangeState={controls.changeModal('create')}
			handleCreate={controls.create}
		/>

		<UpdateModal
			open={modals.update}
			inputs={inputs}
			handleChange={controls.onInputChange}
			onChangeState={controls.changeModal('update')}
			handleUpdate={controls.update}
		/>

		<DeleteModal
			open={modals.delete}
			onChangeState={controls.changeModal('delete')}
			handleDelete={controls.delete}
		/>

	</Wrapper>
)

const Wrapper = styled.div`
	width: 100%;
	padding: 40px 0;
`

const Buttons = styled.div`
	display: flex;
	margin-top: 20px;
	margin-left: -8px;
`

View.propTypes = propTypes

export default View