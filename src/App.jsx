import React, { useEffect } from "react";
import { isIOS, isMobile } from "react-device-detect";

const App = () => {
  useEffect(() => {
    const redirectUserToAppStore = () => {
      if (isMobile) {
        if (isIOS) {
          window.location.href = "https://apps.apple.com/uz/app/aka-taxi/id6446449252";
        } else {
          window.location.href = "https://play.google.com/store/apps/details?id=com.rtholdings.rttaxi";
        }
      }
    };

    redirectUserToAppStore();
  }, []);

  return (
    <div>
      {/* Оставляем только текст, который будет виден в случае, если перенаправление не произошло */}
      {!isMobile && <p>{isMobile ? "Download App" : "Download Desktop App"}</p>}
    </div>
  );
};



export default App;
