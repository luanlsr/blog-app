import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import {Posts} from '../index'

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img.png'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png'
        }
    ]
}

describe('<Posts/>' , () => {
    it('1 - should render the Posts correctly', () => {
        render(<Posts {...props}/>)

        expect(screen.getAllByRole('heading', {name: /title/i}))
            .toHaveLength(3)

        expect(screen.getAllByRole('img', {name: /title/i}))
            .toHaveLength(3)

        expect(screen.getAllByText(/body/i))
            .toHaveLength(3)
    })

    it('2 - should match snapshot', () => {
        const {container} = render(<Posts {...props}/>)

        expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="posts"
>
  <div
    class="post"
  >
    <img
      alt="title 1"
      src="img/img1.png"
    />
    <div
      class="post-content"
    >
      <h1>
        1
         - 
        title 1
      </h1>
      <p>
        body 1
      </p>
    </div>
  </div>
  <div
    class="post"
  >
    <img
      alt="title 2"
      src="img/img.png"
    />
    <div
      class="post-content"
    >
      <h1>
        2
         - 
        title 2
      </h1>
      <p>
        body 2
      </p>
    </div>
  </div>
  <div
    class="post"
  >
    <img
      alt="title 3"
      src="img/img3.png"
    />
    <div
      class="post-content"
    >
      <h1>
        3
         - 
        title 3
      </h1>
      <p>
        body 3
      </p>
    </div>
  </div>
</div>
`)
    })
})
