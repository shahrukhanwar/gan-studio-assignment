import React, { createContext, useState } from 'react';

import { productsData, inventoryMapping } from 'utils';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [cartData, setCartData] = useState([]);
  const [inventory, setInventory] = useState(inventoryMapping);

  const addToCart = (data) => {
    let isPresent = false;
    cartData.forEach((item) => {
      if (item.id === data.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setCartData((prev) =>
        prev.map((item) => {
          if (item.id === data.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartData((prev) => [...prev, { ...data, quantity: 1 }]);
    }

    setInventory((prev) => ({ ...prev, [data.id]: prev[data.id] - 1 }));
  };

  const removeItem = (id) => {
    setCartData((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity)
    );
    setInventory((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const addItem = (id) => {
    setCartData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
    setInventory((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        cartData,
        setCartData,
        addToCart,
        removeItem,
        addItem,
        inventory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
