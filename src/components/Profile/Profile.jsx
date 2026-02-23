import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleOpenAddGarmentModal,
  handleOpenItemModal,
  weatherData,
  clothingItems,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <SideBar handleSignOut={handleSignOut} />
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
