import * as React from "react";
import MatrixParallax from "react-matrix-parallax";

function Error() {
  return (
    <>
      <React.Fragment>
        <MatrixParallax
          color="rgba(122, 229, 114, 0.87)"
          backgroundColor="rgba(0,0,0,1)"
        >
          <h1>404</h1>
          <h2 style={{ maxWidth: "100vw" }}>Page Not Found!!</h2>
        </MatrixParallax>
      </React.Fragment>
    </>
  );
}
export default Error;
