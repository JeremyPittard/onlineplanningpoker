import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>home</h1>}></Route>
        <Route path="table/:tableId"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
