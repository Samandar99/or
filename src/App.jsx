import React, { useEffect, useState } from "react";
import { isIOS, isMobile } from "react-device-detect";

const App = () => {
  const [appStoreLink, setAppStoreLink] = useState("#");

  useEffect(() => {
    const getAppStoreLink = () => {
      if (isMobile) {
        return isIOS
          ? "https://apps.apple.com/us/app/your-app-id"
          : "https://play.google.com/store/apps/details?id=your.app.package";
      } else {
        return "#";
      }
    };

    // Устанавливаем URL-адрес магазина приложений сразу при загрузке компонента
    setAppStoreLink(getAppStoreLink());
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз при загрузке компонента

  return (
    <div>
      {/* Используем уже определенный URL-адрес магазина приложений */}
      <a href={appStoreLink}>{isMobile ? "Download App" : "Download Desktop App"}</a>
    </div>
  );
};

export default App;
