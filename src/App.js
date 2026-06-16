import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Search from "./Search";
import './App.css';
import AddItem from "./AddItem";
import apiRequests from "./apiRequests";

function App() {

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

 

  const addItemm = async (newItem) => {
    const new_id = items.length ? items[items.length - 1].id + 1 : 1;
    
    const listItems = {
        id: new_id,
        label: newItem,
        checked: false,
    }
    setItems([...items, listItems]);

    const postReq = {
      method: "POST",
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listItems),
    }

    const result = await apiRequests(API_URL, postReq);
    if (result) setFetchError(result);
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    addItemm(newItem);
    setNewItem("");
  }

  const handleDelete = async (id) => {
      const new_items = items.filter(
        (item) => 
          item.id !== id
      );
    setItems(new_items);  

    const deleteReq = {
      method: 'DELETE'
    };

    const myURL = `${API_URL}/${id}`;
    const res = await apiRequests(myURL, deleteReq);
    if (res) setFetchError(res);
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);

    const patchReq = {
      method: "PATCH",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const myURL = `${API_URL}/${id}`;
    const res = await apiRequests(myURL, patchReq);
    if (res) setFetchError(res);
  }

  const [searchItem, setSearchItem] = useState("");

  const API_URL = "http://localhost:3500/items";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error('Did not receive expected data');
        const data = await res.json();
        setItems(data);
      } catch (err) {
        setFetchError(err.message);
    } finally{
      setIsLoading(false);
    }
    }
    setTimeout(() => {
      
      fetchItems();
    }, 2000)
  }, []);

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Header title="Grocery Lists"></Header>
      <div className="content-container">
        <div className="add-search-container">
          <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
          <Search searchItem={searchItem} setSearchItem={setSearchItem} />
        </div>
       <main>
        {isLoading && <p className="loading-text">Loading Items</p>}
          {fetchError && <p className="error-text">{fetchError}</p>}
          {!fetchError && !isLoading && <Content  
          items={
            items.filter((item) => 
              item.label.toLowerCase().includes(searchItem.toLowerCase())
            )
          }
          handleCheck={handleCheck} 
          handleDelete={handleDelete} 
          />}
        </main>
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
