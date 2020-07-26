import React, {} from 'react';
import {NewsState} from "./src/context/news/NewsState";
import {MainLayout} from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/screenState";

export default function App() {

  return (
      <ScreenState>
          <NewsState>
              <MainLayout />
          </NewsState>
      </ScreenState>

  );
}



