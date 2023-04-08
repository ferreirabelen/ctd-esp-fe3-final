import { createContext, useReducer} from "react";


const getFavs = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [] ; 
}


const saveFavs= (fav) =>{
  localStorage.setItem("favs", JSON.stringify(fav));
}


const reducer = (state, action) => {
  switch(action.type){
    case "addFav":
      saveFavs([...state, action.payload]);
      return [...state, action.payload];
      default: 
      return ;
  }


};


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], getFavs)

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider