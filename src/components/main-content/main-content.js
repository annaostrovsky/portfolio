import React from "react";
import PortfolioElement from "./portfolio-element";
import _ from "lodash";

const MainContent = props => {
  return (
    <div className="main-content">
      {_.sortBy(props.generatedData, i => +i.key).map((element) => {
        return (
          <PortfolioElement
            moveToCart={props.moveToCart}
            onFullScreen={props.onFullScreen}
            {...element}
            index={element.key}
          />
        );
      })}
    </div>
  );
};

export default MainContent;
