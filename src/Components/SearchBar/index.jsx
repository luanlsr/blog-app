import './style.css'

export const SearchBar = ({type, placeholder, onChange, searchValue}) => {
    return(
        <>
            <input
                className='search-bar' 
                type={type} 
                placeholder={placeholder} 
                onChange={onChange}
                value={searchValue}
            />
        </>
    )
}
