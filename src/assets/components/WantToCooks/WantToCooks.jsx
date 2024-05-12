const WantToCooks = () => {
  return (
    <div className="mt-12 rounded-2xl  border">
      <h1 className="my-6 text-xl font-bold text-center font-lexend">Want to Cook: 01 </h1>
      <hr className="mx-6" />
      {
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="font-fira">
              <tr >
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="text-customGray font-fira">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <button className="btn btn-sm rounded-full bg-customGreen border-0 font-bold text-lg px-6 pb-1">
                  Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default WantToCooks;
