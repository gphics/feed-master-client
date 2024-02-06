
import Image from "next/image";

import Hero from "../public/images/svg/icon.svg";
function LoadingComponent() {
  return (
    <div>
      <div className="loading-component">
        <Image
          className="loading-icon"
          src={Hero}
          priority={true}
          alt="loader ..."
        />
      </div>
    </div>
  );
}

export default LoadingComponent;
