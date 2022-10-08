import React from "react";
import "./MetaDataTag.css";
import Helmet from "react-helmet";

const MetaDataTag = (Title, Description) => {
  return (
    <div className="MetaDataTag">
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
      </Helmet>
    </div>
  );
};

export default MetaDataTag;
