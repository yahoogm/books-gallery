const CardLoading = () => {
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl animate-pulse">
      <div className="h-56">
        <div className="h-56 bg-slate-400 rounded-xl"></div>
      </div>
      <div className="card-body">
        <div className="h-5 bg-slate-400 rounded"></div>
        <div className="h-3 bg-slate-400 rounded"></div>
        <div className="h-3 bg-slate-400 rounded"></div>
        <div className="h-3 bg-slate-400 rounded"></div>
        <div className="card-actions justify-end">
          <button className="h-3 bg-slate-400 btn w-20 border-none"></button>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
