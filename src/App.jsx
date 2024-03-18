import React from "react";
import { isIOS, isMobile } from "react-device-detect";

const App = () => {
  const getAppStoreLink = () => {
    if (isMobile) {
      return isIOS
        ? "https://apps.apple.com/us/app/your-app-id"
        : "https://play.google.com/store/apps/details?id=your.app.package";
    } else {
      return "#";
    }
  };

  return (
    <div>
      <a href={getAppStoreLink()}>{isMobile ? "Download App" : "Download Desktop App"}</a>
    </div>
  );
};

export default App;
