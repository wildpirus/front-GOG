import { createBrowserRouter} from "react-router-dom";
import { DetailCharacter } from "../views/detailCharacter/detailCharacter";
import { CreateHeroe } from "../views/Heroes/CreateHeroe";
import { Heroes } from "../views/Heroes/Heroes";
import { Villians } from "../views/Villians/Villians";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Heroes/>,
  },
  {
    path: "/villians",
    element: <Villians/>,
  },
  {
    path:"/heroe/:id",
    element: <DetailCharacter/>
  },
  {
    path:"/heroe/create",
    element: <CreateHeroe/>
  }
]);