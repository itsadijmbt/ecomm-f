import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
    </>
  );
}
export default Root;
