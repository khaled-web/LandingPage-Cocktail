import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchItem}=useGlobalContext()
  //useRef
  const searchValue = React.useRef('');
  //toClearTheDataInsideInputBar
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  //searchCocktail-function
  const searchCocktail = ()=>{
    setSearchItem(searchValue.current.value)
  }
  //handleSubmit-function
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            search for your favorite cocktail
          </label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
