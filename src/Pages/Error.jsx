import * as React from "react";
import MatrixParallax from "react-matrix-parallax";
import { useTranslation } from "react-i18next";
import "i18n/i18n";

function Error() {
  const { t } = useTranslation();

  return (
    <>
      <React.Fragment>
        <MatrixParallax
          color="rgba(122, 229, 114, 0.87)"
          backgroundColor="rgba(0,0,0,1)"
        >
          <h1>404</h1>
          <h2 style={{ maxWidth: "100vw" }}>{t("NotFound")}</h2>
        </MatrixParallax>
      </React.Fragment>
    </>
  );
}
export default Error;
