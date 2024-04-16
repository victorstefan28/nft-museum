import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the context type
type FrameContextType = {
  activeFrame: number;
  changeFrame: (index: number) => void;
};

// Create a context with a default undefined state (will be set in the provider)
const FrameContext = createContext<FrameContextType | undefined>(undefined);

// Provider component props type
type FrameProviderProps = {
  children: ReactNode;
};

// Provider component
export const FrameProvider: React.FC<FrameProviderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return (
    <FrameContext.Provider
      value={{ activeFrame: activeIndex, changeFrame: setActiveIndex }}
    >
      {children}
    </FrameContext.Provider>
  );
};

// Custom hook to use the language context
export const useFrame = (): FrameContextType => {
  const context = useContext(FrameContext);
  if (!context) {
    throw new Error("useFrameContext must be used within a FrameProvider");
  }
  return context;
};
