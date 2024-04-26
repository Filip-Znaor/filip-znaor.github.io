import React, { useState, useEffect } from "react";
import axios from "axios";

// Osnovna funkcija
const ListComponent = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {fetchData();}, []);

  // Dobavljanje podataka iz API-ja. Napomena: url u pitanju katkad ne funkcionira.
  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyapi.online/api/products");
      setData(response.data);
      setFilteredData(response.data);} 
    catch (error) {console.error("Error fetching data:", error);}
  };

  // Selektiranje pojedinih stavki iz prve API liste
  const handleItemClick = (item) => {
    const selectedIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems.splice(selectedIndex, 1);
      setSelectedItems(updatedSelectedItems);
    }
  };

  // Opcija za pretraživanje
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, selectedCategory);
  };

  // Filtriranje pokušaj 9
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterData(searchTerm, event.target.value);
  };

  const filterData = (searchTerm, category) => {
    let filteredResults = data;

    if (category) {
      filteredResults = filteredResults.filter(
        (item) => item.category === category
      );
    }

    setFilteredData(filteredResults);
  };

  // Prikaz
  return (
    <div className="Zad1">
      <h1>Zadatak 1 - liste i filtriranje</h1>

      <p>
        <i>
          Kako biste uvrstili proizvode u kategoriju "Odabrane stavke",
          pritisnite na ime pojedinog proizvoda. Ako isti proizvod želite
          maknuti s liste, pritisnite ga ponovo.
        </i>
      </p>

      <input type="text" placeholder="Pretraži..." value={searchTerm} onChange={handleSearch}/>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Sve kategorije</option>
        <option value="true">Dostupno</option>
      </select>

      <ul>
        {filteredData.map((item) => (
          <li
            key={item.id} onClick={() => handleItemClick(item)} style={{
              color: selectedItems.some((selectedItem) => selectedItem.id === item.id) 
              ? "red" : "black",}}>
            {item.name}
          </li>
        ))}
      </ul>

      <h2>Odabrane stavke:</h2>
      <ul>
        {selectedItems.map((selectedItem) => (
          <li key={selectedItem.id}>{selectedItem.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;

