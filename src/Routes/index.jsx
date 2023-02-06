import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import storage from "../services/storage";

// const PrivateRoutes = ({children, redirectTo}) => {
//   const autenticado = storage.get("TOKEN") != null;
//   {
//    <Route exact path="/catalogo/vitrine-leo/:id" element={<PrivateRoutes redirectTo={"/deslogado"}> <Produto /></PrivateRoutes>} />
//   }
//   return autenticado ? (
//     <>
//       <HeaderLogado /> {children} <FooterLogado />
//     </>
//   ) : (
//     <Navigate to={redirectTo} />
//   );
// };

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route exact path="/barbara" element={<Home />} />
      </Routes>
 
    </>
  );
}
