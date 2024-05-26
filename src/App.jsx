import { useState } from "react";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmClearList = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmClearList) setItems([]);
  }

  return (
    <div className="app">
      <h1>🌴 far Away 💼</h1>
      <Form onAddItems={handleAddNewItems} />
      <PackagingList
        items={items}
        onDelete={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
