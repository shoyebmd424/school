import React from "react";
import { Link } from "react-router-dom";

const Path = ({ path, page }) => {
  return (
    <div className="py-5 bg-light px-4">
      <h4>
        {path?.map((data) => (
          <>
            <Link className="text-decoration-none" to={data?.path}>
              {data?.name}
            </Link>
            {">"}{" "}
          </>
        ))}{" "}
        {page}
      </h4>
    </div>
  );
};

export default Path;
