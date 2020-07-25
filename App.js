import React, {} from 'react';
import {NewsState} from "./src/context/news/NewsState";
import {MainLayout} from "./src/MainLayout";

export default function App() {

  return (
      <NewsState>
        <MainLayout />
      </NewsState>
  );
}



