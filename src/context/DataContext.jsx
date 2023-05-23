import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer, { initialState } from "../reducer/FilterReducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  // const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      const { status, data } = await axios.get("/api/products");
      if (status === 200) {
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: data.products,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
console.log("context",state.chocolates)
  return (
    <DataContext.Provider value={{products: state.chocolates , state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
