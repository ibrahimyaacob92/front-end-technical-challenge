import { capitalize, startCase } from "lodash";
import { Link } from "react-router-dom";

type Props = {
  redirectPath?: string;
};

const ListIsEmptyScreen = ({ redirectPath }: Props) => {
  return (
    <div>
      Oh No, nothing is here
      {redirectPath && (
        <Link to={redirectPath} className="text-blue-700">
          return
        </Link>
      )}
    </div>
  );
};

export default ListIsEmptyScreen;
