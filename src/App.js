// import logo from './logo.svg';
// import './App.css';
// // import HeaderMain from './components/Main/HeadersFooters/HeaderMain';
// import FooterMain from './components/Main/HeadersFooters/FooterMain';
// import BodyMain from './components/Main/Bodys/BodyMain';
// function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('restaurants');

//   const list = data[activeTab];
//   const currentItem = list[currentIndex];

//   const switchTab = (tab) => {
//     setActiveTab(tab);
//     setCurrentIndex(0); // نبدأ من أول عنصر في كل تبويب
//   };
//   return (
//       <div className={"MainPage"}>
//         {/* <HeaderMain/> */}
//         <BodyMain/>
//         <FooterMain switchTab={switchTab}/>
//       </div>

//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import FooterMain from './components/Main/HeadersFooters/FooterMain';
import BodyMain from './components/Main/Bodys/BodyMain';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('restaurants');

  const list = BodyMain;
  const currentItem = list[currentIndex];

  const switchTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0); // نبدأ من أول عنصر في كل تبويب
  };

  return (
    <div className="MainPage">
      <BodyMain currentItem={currentItem} activeTab={activeTab}/>
      <FooterMain switchTab={switchTab} activeTab={activeTab} />
    </div>
  );
}

export default App;
