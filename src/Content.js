import './Content.css';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="content-container">
      {items.length > 0 ? (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
                className="item-checkbox"
              />
              <label
                className="item-label"
                style={{
                  textDecoration: item.checked ? 'line-through' : 'none',
                }}
              >
                {item.label}
              </label>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="item-delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-items">No items</p>
      )}
    </div>
  );
};

export default Content;