import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import {SearchBar} from '../index'
import userEvent from '@testing-library/user-event'

describe('<SearchBar/>' , () => {
    it('1 - should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<SearchBar handleChange={fn} searchValue={'testando'} placeholder={'type your search'}/>)

        const input = screen.getByPlaceholderText(/type your search/i)

        expect(input.value).toBe('testando')
    })

    it('2 - should call handleChange function on each key pressed', () => {
        const fn = jest.fn()
        render(<SearchBar handleChange={fn} placeholder={'type your search'}/>)

        const input = screen.getByPlaceholderText(/type your search/i)

        const value = 'o valor'
        userEvent.type(input, value)

        expect(input.value).toBe(value)
    })

})
