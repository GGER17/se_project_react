import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleOpenAddGarmentModal,
  handleOpenItemModal,
  weatherData,
  clothingItems,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleOpenItemModal={handleOpenItemModal}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        weatherData={weatherData}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
