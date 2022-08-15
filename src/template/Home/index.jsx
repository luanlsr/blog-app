import React, { useState, useEffect, useCallback } from 'react'
import '../../styles/global-styles.css'
import './style.css'

import {fetchPosts} from '../../utils/loadPosts'
import { Posts } from '../../Components/Posts'
import { Button } from '../../Components/Button'
import { SearchBar } from '../../Components/SearchBar'

function Home() {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(18)
  const [searchValue, setSearchValue] = useState('')

  const labels = {
    textButton: 'Load More Posts'
  }
  

  
  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await fetchPosts()
    setPosts(postAndPhotos.slice(page, postsPerPage))
    setAllPosts(postAndPhotos)
  },[])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  useEffect(() => {
    page + postsPerPage >= allPosts.length 
    ? setIsDisabled(true) 
    : setIsDisabled(false)
  },[allPosts.length, page, postsPerPage])

  const filteredPosts = !!searchValue 
    ? allPosts.filter(post => post.title.toLowerCase()
      .includes(searchValue.toLowerCase()))
    : posts

  const handleChange = (e) => {
    const {value} = e.target
    setSearchValue(value)
  }

  return (
    <section className='container'>
      {!!searchValue && (
        <>
          <h1>Search value: {searchValue}</h1><br/>
        </>
      )}
      <SearchBar type={'search'} placeholder={'Pesquisar...'} value={searchValue} onChange={handleChange}/>
      {filteredPosts.length > 0 
        ? <Posts posts={filteredPosts}/>
        : <p>Não existem posts =(</p>
      }
      {!searchValue && (
        <div className='button-container'>
          <Button disabled={isDisabled} onClick={loadMorePosts} text={labels.textButton}/>
        </div>
      )}
    </section>
  );
}

export default Home;
