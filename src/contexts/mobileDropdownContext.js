import React, { createContext, useState } from "react";

export const MobileDropdownContext = createContext();

export const MobileDropdownProvider = ({ children }) => {
  const [Mclick, MsetClick] = useState(false);

  return (
    <MobileDropdownContext.Provider value={{ Mclick, MsetClick }}>
      {children}
    </MobileDropdownContext.Provider>
  );
};
