import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import {PostCard} from '../index'
import {postCardPropsMock} from './mock'

const props = postCardPropsMock
describe('<PostCard/>' , () => {
    it('1 - should render the PostCard correctly', () => {
        render(<PostCard {...props}/>)

        expect(screen.getByRole('img', {name: /title 1/i}))
            .toHaveAttribute('src', 'img/img.png')
        expect(screen.getByRole('heading', {name: '1 - title 1'})).toBeInTheDocument()
        expect(screen.getByText('body 1')).toBeInTheDocument()
    })

    it('2 - should match snapshot', () => {
        const {container} = render(<PostCard {...props}/>)

        expect(container.firstChild).toMatchSnapshot()
    })
})
