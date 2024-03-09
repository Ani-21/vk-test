import { useEffect } from "react";

import { Fact } from "../..";
import { getWordLetterLastIndex } from "../helpers/get-word-letter-last-index";

const useCaret = (data: Fact | undefined) => {
  useEffect(() => {
    const inputElement = document.getElementsByTagName("textarea");
    inputElement[0].focus();
    inputElement[0].selectionEnd = getWordLetterLastIndex(data?.fact, 0) ?? 0;
  }, [data]);
};

export default useCaret;
