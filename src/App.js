import { useState } from 'react';
import './App.css';
import FooterMain from './components/Main/HeadersFooters/FooterMain';
import BodyMain from './components/Main/Bodys/BodyMain';
import AlertModel from './components/Main/AlertModel';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('restaurants');

  const list = BodyMain;
  const currentItem = list[currentIndex];

  const switchTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <div className="MainPage">
      <BodyMain currentItem={currentItem} activeTab={activeTab}/>
      <FooterMain switchTab={switchTab} activeTab={activeTab} />
      <AlertModel/>
    </div>
    



  );
}

export default App;
