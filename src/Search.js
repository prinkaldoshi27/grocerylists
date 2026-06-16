const Search = ({searchItem, setSearchItem}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="add-item-form">
      <input type="search" placeholder="Enter Item to search" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className="add-item-input"></input>
      {/* <button type="submit" className="add-item-button">Search</button> */}
    </form>
  )
}
export default Search