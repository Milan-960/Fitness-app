import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("Pages/Home"));
const ExerciseDetail = lazy(() => import("Pages/ExerciseDetail"));
const Error = lazy(() => import("../Pages/Error"));

export const routes = {
  HOME: "/",
  ExerciseDetail: "/exercise/:id",
};

const BaseRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} exact element={<Home />} />
        <Route path={routes.ExerciseDetail} element={<ExerciseDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
