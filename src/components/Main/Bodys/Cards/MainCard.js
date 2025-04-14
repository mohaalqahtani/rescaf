import './MainCard.css';
import RestaurantSlider from './MainTest';
function MainCard ({ type }){
return(
<div className={"w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-100 dark:border-gray-700"}>
<RestaurantSlider type={type} />
</div>
)
}
export default MainCard;