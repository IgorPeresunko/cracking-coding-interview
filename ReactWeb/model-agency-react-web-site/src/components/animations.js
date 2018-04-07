import { keyframes } from 'styled-components'

export const slideIn = keyframes`
	0% { transform: translateY(-50px); opacity: 0; }
	100% { transform: translateY(0px); opacity: 1; }
`
export const slideOut = keyframes`
	0% { transform: translateY(0px); opacity: 1; }
	100% { transform: translateY(-50px); opacity: 0; }
`
export const fadeIn = keyframes`
	0% { background-color: rgba(255, 255, 255, 1); }
	100% { background-color: rgba(0, 0, 0, .5); }
`
export const fadeOut = keyframes`
	0% { background-color: rgba(0, 0, 0, .5); }
	100% { background-color: rgba(255, 255, 255, 1); }
`
export const slideInDown = keyframes`
	0% { transform: translateY(50px); opacity: 0; }
	100% { transform: translateY(0px); opacity: 1; }
`
export const slideOutDown = keyframes`
	0% { transform: translateY(0px); opacity: 1; }
	100% { transform: translateY(50px); opacity: 0; }
`
export const zoomIn = keyframes`
	0% { transform: scale(1.1); }
	100% { transform: scale(1); }
`
export const zoomOut = keyframes`
	0% { transform: scale(1); }
	100% { transform: scale(1.1); }
`
