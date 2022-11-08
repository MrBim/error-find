import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";

const queryClient = new QueryClient();
function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          this is the app
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/quiz/:quizType' element={<Quiz />} />
            <Route path='/results' element={<Results />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
