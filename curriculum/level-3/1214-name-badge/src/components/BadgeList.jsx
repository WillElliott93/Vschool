import React from "react";
import Badge from "./Badge";

const BadgeList = ({ badges }) => {
    return (
      <div>
        {badges.map((badge, index) => (
          <Badge key={index} badge={badge} index={index} />
        ))}
      </div>
    );
  };
  
  export default BadgeList;