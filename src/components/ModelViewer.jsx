import React, { Suspense, useEffect, useRef } from "react";

import Cpp from "./Cpp";
import Gabe from "./Gabe"

export default function ModelViewer(props) {
  return (
    <Suspense fallback={null}>
      {/* <Gabe/> */}
      <Cpp/>
    </Suspense>
  );
}
