import React from "react";

const { createContext, useContext, useState } = React;
const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [videoSimulatorScene, setVideoSimulatorScene] = useState(
    "SCENE_SCULPTURE_PARK"
  );

  return (
    <AppContext.Provider
      value={{
        videoSimulatorScene,
        setVideoSimulatorScene,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
