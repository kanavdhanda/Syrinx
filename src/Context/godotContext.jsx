import React, { createContext, useContext, useState } from 'react';

const GodotEngineContext = createContext();

export const useGodotEngine = () => useContext(GodotEngineContext);

export const GodotEngineProvider = ({ children }) => {
  const [engine, setEngine] = useState(null);

  const saveEngine = (engineInstance) => {
    setEngine(engineInstance);
  };

  const deleteEngine = () => {
    if (engine) {
      engine.quit();
      setEngine(null);
    }
  };

  return (
    <GodotEngineContext.Provider value={{ engine, saveEngine, deleteEngine }}>
      {children}
    </GodotEngineContext.Provider>
  );
};
