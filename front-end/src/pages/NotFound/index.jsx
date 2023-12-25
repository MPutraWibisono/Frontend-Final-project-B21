const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-3">
      404 Not Found
      <button onClick={() => history.back()} className="btn">
        Kembali ke Halaman sebelumnya
      </button>
    </div>
  );
};

export default NotFound;
