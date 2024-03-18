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

  // Определение URL-адреса магазина приложений сразу при загрузке компонента
  const appStoreLink = getAppStoreLink();

  return (
    <div>
      {/* Используем уже определенный URL-адрес магазина приложений */}
      <a href={appStoreLink}>
        {isMobile ? "Download App" : "Download Desktop App"}
      </a>
    </div>
  );
};

export default App;
