import React from "react";

const AssetLoading = () => {
  return (
    <div>
      <div className="main-header">AssetLoading</div>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
};
function FirstComponent() {
  return <link rel="stylesheet" href="style1.css" precedence="high" />;
}

function SecondComponent() {
  return <link rel="stylesheet" href="style2.css" precedence="low" />;
}
export default AssetLoading;
