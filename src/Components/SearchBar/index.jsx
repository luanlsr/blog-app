import './style.css'

export const SearchBar = ({type, placeholder, onChange}) => {
    return(
        <>
            <input
                className='search-bar' 
                type={type} 
                placeholder={placeholder} 
                onChange={onChange}
            />
        </>
    )
}
