import './BodyMain.css';
import MainCard from './Cards/MainCard';

function BodyMain({ currentItem, activeTab }) {
  return (
    <div className="MainBox">
      <MainCard type={activeTab} />
      {activeTab === 'restaurants'}
      {currentItem && <div>{currentItem}</div>}
    </div>
  );
}

export default BodyMain;
