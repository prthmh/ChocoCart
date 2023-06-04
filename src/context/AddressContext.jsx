import { createContext, useContext, useReducer } from "react";
import AddressReducer, { initialAddressState } from "../reducer/AddressReducer";

export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    AddressReducer,
    initialAddressState
  );
  return <AddressContext.Provider value={{addressState, addressDispatch}} >{children}</AddressContext.Provider>;
};

export const useAddress = () => useContext(AddressContext);
