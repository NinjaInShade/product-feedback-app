import React, { createContext, useState } from 'react';
import localData from '../data.json';

export const ProdReqContext = createContext();

export function ProdReqProvider({ children }) {
  const [prodReqs, setProdReqs] = useState(localData.productRequests);

  return (
    <ProdReqContext.Provider value={[prodReqs, setProdReqs]}>{children}</ProdReqContext.Provider>
  );
}
