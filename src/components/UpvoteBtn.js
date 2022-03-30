import React, { useContext } from 'react';
import { ProdReqContext } from '../context/ProdReqContext';
import '../styles/upvote-btn.css';

export default function UpvoteBtn({ suggestion, className, direction }) {
  const [prodReqs, setProdReqs] = useContext(ProdReqContext);

  const updateData = (updatedProdReq) => {
    return setProdReqs(
      prodReqs.map((prodReq) => {
        return prodReq.id === updatedProdReq.id ? updatedProdReq : prodReq;
      })
    );
  };

  const updateSuggestionHandler = () => {
    if (suggestion.upvoted) {
      return updateData({ ...suggestion, upvoted: false, upvotes: suggestion.upvotes - 1 });
    }

    return updateData({ ...suggestion, upvoted: true, upvotes: suggestion.upvotes + 1 });
  };

  return (
    <button
      className={`upvote-btn ${suggestion.upvoted ? 'upvoted' : ''} ${className ? className : ''} ${
        direction ? 'horizontal' : ''
      }`}
      onClick={updateSuggestionHandler}
    >
      <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 6l4-4 4 4' stroke='#4661E6' strokeWidth='2' fill='none' fillRule='evenodd' />
      </svg>
      <b className='body-xs'>{suggestion.upvotes}</b>
    </button>
  );
}
