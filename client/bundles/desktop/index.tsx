import CustomBrowserRouter from "client/components/CustomBrowserRouter";
import store from "client/utils/infrastructure/store";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";

import DesktopBundle from "./Desktop";

export { DesktopBundle };

// todo: Change any to explicit type
export default (data: SSRData) => {
  hydrate(
    <Provider store={store}>
      <CustomBrowserRouter>
        <DesktopBundle data={data} />
      </CustomBrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};
