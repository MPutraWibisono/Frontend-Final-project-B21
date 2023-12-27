const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-3">
      <span className="text-8xl font-black">404</span>
      <span className="font-medium">DemyU Page Not Found</span>
      <button onClick={() => history.back()} className="btn">
        Kembali
      </button>
    </div>
  );
};

export default NotFound;
