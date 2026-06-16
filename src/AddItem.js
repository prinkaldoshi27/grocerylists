import './AddItem.css';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input type="text" placeholder="Enter Item to Add" value={newItem} onChange={
        (e) => setNewItem(e.target.value)} required className="add-item-input"></input>
      <button type="submit" className="add-item-button">Add Item</button>
    </form>
  )
}
export default AddItem