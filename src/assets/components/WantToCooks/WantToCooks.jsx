import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";

const WantToCooks = ({ wantToCooks }) => {
  return (
    <div className="">
      <div>
        <h1 className="my-6 text-xl font-bold text-center font-lexend">
          Want to Cook: {wantToCooks.length}{" "}
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
              {wantToCooks.map((wantToCook, index) => (
                <WantToCook
                  key={index}
                  wantToCook={wantToCook}
                  index={index + 1}
                ></WantToCook>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

WantToCooks.propTypes = {
  wantToCooks: PropTypes.object.isRequired,
};

export default WantToCooks;
