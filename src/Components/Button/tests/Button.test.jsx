import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Button} from '../index.jsx'
import userEvent from '@testing-library/user-event'

describe('<Button/>' , () => {
    it('1 - should render the button with the text', () => {
        render(<Button text="Load More"/>)

        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })
        expect(button).toBeInTheDocument()
    })

    it('2 - should render the button with the class "button"', () => {
        render(<Button text="Load More"/>)

        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })
        expect(button).toHaveAttribute('class', 'button')
    })

    it('3 - should call function on button click', () => {
        const fn = jest.fn()
        render(<Button text="Load More" onClick={fn}/>)

        const button = screen.getByRole('button', { name: /load more/i })

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
        
    })

    it('4 - should button is disabled when disabled is true', () => {
        render(<Button text="Load More" disabled={true}/>)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeDisabled()
    })

    it('5 -  should button is enabled when disabled is false', () => {
        render(<Button text="Load More" disabled={false}/>)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeEnabled()
        expect(button).not.toBeDisabled()
    })
})
