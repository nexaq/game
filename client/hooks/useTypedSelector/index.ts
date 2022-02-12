import { TypedUseSelectorHook, useSelector } from "react-redux";

import { CommonStore } from "../../utils/infrastructure/store";

export const useTypedSelector: TypedUseSelectorHook<CommonStore> = useSelector;
