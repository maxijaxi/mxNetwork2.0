import React, { createContext, useState } from "react";

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [click, setClick] = useState(false);

  return (
    <DropdownContext.Provider value={{ click, setClick }}>
      {children}
    </DropdownContext.Provider>
  );
};
