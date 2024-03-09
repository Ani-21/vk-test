import { Button } from "@vkontakte/vkui";

type GenerateFactProps = {
  onRefetch: () => void;
  isLoading: boolean;
};
const GenerateFact = (props: GenerateFactProps) => {
  const { onRefetch, isLoading } = props;
  return (
    <Button stretched onClick={onRefetch} loading={isLoading}>
      Get fact
    </Button>
  );
};

export default GenerateFact;
