import React, { useState } from "react";
import items from "../../StaticData/data.jsx";
import Categories from "../Categories/Categories.jsx";
import Menu from "../Menu/Menu.jsx";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Home() {
  const [meuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return ( 
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Mess Appk</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={meuItems} />
      </section>
    </main>
  );
}

export default Home;
