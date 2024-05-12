const CurrentlyCookings = () => {
  return (
    <div className="">
      <h1 className="my-6 text-xl font-bold text-center font-lexend">
      Currently cooking: {}
      </h1>
      <hr className="mx-6" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="font-fira">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic <tr></tr> */}
            {

            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentlyCookings;
