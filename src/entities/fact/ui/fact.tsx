import { Div, FormItem, Spinner, Textarea } from "@vkontakte/vkui";
import useCaret from "../lib/hooks/use-caret";
import { Fact } from "../model/types/fact-api.types";

type FactProps = {
  data: Fact | undefined;
  isFetching: boolean;
  GenerateFact: JSX.Element;
};
const Fact = (props: FactProps) => {
  const { data, isFetching, GenerateFact } = props;
  useCaret(data);

  return (
    <>
      <FormItem top="Interesting fact">
        {isFetching && <Spinner />}
        {!isFetching && (
          <Textarea id="text" placeholder={"Get fact about cats"} value={data?.fact} />
        )}
      </FormItem>
      <FormItem>{GenerateFact}</FormItem>
    </>
  );
};

export default Fact;
