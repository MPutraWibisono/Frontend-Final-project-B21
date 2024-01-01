const formatUang = (angka) => {
  const formattedAngka = Math.round(angka); // Membulatkan ke angka bulat
  return `Rp ${formattedAngka
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};
export default formatUang;
