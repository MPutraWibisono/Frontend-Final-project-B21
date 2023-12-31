export const saveProfile = (profile) => {
  localStorage.setItem("userProfile", JSON.stringify(profile));
};

export const getProfile = () => {
  const defaultProfile = {
    name: "Default Name",
    email: "default@example.com",
    phone: "08123456789",
    nationality: "Indonesia",
    city: "Bandung",
    profile_picture: null,
  };

  const storedProfile = localStorage.getItem("userProfile");
  return storedProfile ? JSON.parse(storedProfile) : defaultProfile;
};
