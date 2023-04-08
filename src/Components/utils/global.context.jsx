import { createContext, useReducer} from "react";


const getFavsFromLocaltorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [] ; 

}


const saveFavsFromStorage= (fav) =>{

  localStorage.setItem("favs", JSON.stringify(fav));
}


const reducer = (state, action) => {
  switch(action.type){
    case "addFav":
      saveFavsFromStorage([...state, action.payload]);
      return [...state, action.payload];
      default: 
      return ;
  }


};


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, [], getFavsFromLocaltorage)

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider