import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Quiz from "./pages/Quiz/Quiz";

const queryClient = new QueryClient();
function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/quiz/:quizType" element={<Quiz />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
