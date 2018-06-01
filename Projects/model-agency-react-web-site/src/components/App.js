import React from 'react'
import Slide from './Slide'

const slides = [
    {
        name: 'Cara Delevingne',
        city: 'London, Great Britain',
        desc: 'Cara Delevingne is the most prolific supermodel to emerge from the U.K. since Kate Moss. She has been the face of advertising campaigns for brands including Chanel, Burberry and Puma.',
        img: 'cara.jpg',
    }, {
        name: 'Bridget Satterlee',
        city: 'USA, New York',
        desc: 'Bridget is an international model signed by Nous Models LA who worked for magazines like Vogue, Harper\'s Bazaar. She has also been singed to agencies such as The Hive, Why Not Milan and UNO.',
        img: 'bridget.jpg',
    },
]

class App extends React.Component {

    state = {
        slides: slides,
        index: 0,
        anim: { in: true, out: false }
    }

    onNext = () => {
        this.setState(state => ({
            index: state.index + 1 >= state.slides.length ? 0 : state.index + 1,
        }))
    }

    onPrev = () => {
        this.setState(state => ({
            index: state.index - 1 < 0 ? state.slides.length - 1 : state.index - 1
        }))
    }

    onChange = () => way => {
        this.setState({ anim: { in: false, out: true } })

        setTimeout(() => {
            if (way === 'next')
                this.onNext()
            else
                this.onPrev()

            this.setState({ anim: { in: true, out: false } })
        }, 500)
    }

    onPress = e => {
        if (e.keyCode === 37)
            this.onChange()('prev')
        if (e.keyCode === 39)
            this.onChange()('next')
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onPress)
    }

    render() {
        const { slides, index, anim } = this.state

        return (
            <Slide
                slide={slides[index]}
                onSlideChange={this.onChange}
                indexes={{ current: index, count: slides.length }}
                anim={anim}
            />
        )
    }

}

export default App
