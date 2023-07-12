"use client";
import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';

import CardLayout from './components/layouts/CardLayout';


export default function Home() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards');
        const data = await response.json();
        setCards(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {cards?.cards.map((card, index) => (
          <CardLayout key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
