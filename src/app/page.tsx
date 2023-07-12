"use client";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardLayout from './components/layouts/CardLayout';
import './pagination.css'


export default function Home() {
  const [cards, setCards] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 12;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="py-4 px-6">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-2xl font-bold">Trading Cards</h1>
        </div>
      </div>
      {cards?.success === false ? (
        <div className="error-message">Failed to fetch card data.</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cards?.cards.slice(startIndex, endIndex).map((card, index) => (
            <CardLayout key={index} {...card} />
          ))}
        </div>
      )}

      <div className="pagination-container">
        {cards && (
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={cards.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        )}
      </div>
    </div>
  );
}
