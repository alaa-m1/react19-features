import React, { useMemo, useState } from "react";
import { useFeaturesList } from "../hooks";
import features from "../React19Features/features";

const React19Features = () => {
  const featuresList = useFeaturesList(features);
  const [activeFeature, setActiveFeature] = useState(-1);
  const selectedFeature = useMemo(
    () => featuresList.find((item) => item.id === activeFeature),
    [activeFeature, featuresList]
  )?.component;
  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            flexWrap: "wrap",
          }}
        >
          {featuresList.map((feature) => (
            <li role="listitem"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
            >
              {feature.label}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ padding: "10px" }}>{selectedFeature}</div>
    </>
  );
};

export default React19Features;
