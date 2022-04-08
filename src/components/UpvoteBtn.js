import React, { useState, useContext } from 'react';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/upvote-btn.css';

export default function UpvoteBtn({ suggestion, className, direction }) {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);
  const [active, setActive] = useState(suggestion.upvoted);

  const updateData = (updatedProdReq) => {
    return setProdReqs(
      prodReqs.map((prodReq) => {
        return prodReq.id === updatedProdReq.id ? updatedProdReq : prodReq;
      })
    );
  };

  const updateSuggestionHandler = () => {
    setActive(!active);

    if (suggestion.upvoted) {
      return updateData({ ...suggestion, upvoted: false, upvotes: suggestion.upvotes - 1 });
    }

    return updateData({ ...suggestion, upvoted: true, upvotes: suggestion.upvotes + 1 });
  };

  return (
    <button
      className={`upvote-btn ${active ? 'upvoted' : ''} ${className ? className : ''} ${
        direction ? 'horizontal' : ''
      }`}
      onClick={updateSuggestionHandler}
    >
      <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 6l4-4 4 4' stroke='#4661E6' strokeWidth='2' fill='none' fillRule='evenodd' />
      </svg>
      <b className='body-xs'>{active ? suggestion.upvotes + 1 : suggestion.upvotes}</b>
    </button>
  );
}
