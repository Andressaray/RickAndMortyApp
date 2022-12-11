interface Props {
  title: string;
  text: string | undefined;
}

const DescriptionType = ({ title, text = "" }: Props) => {
  return (
    <div className="flex mt-4">
      <p className="text-white font-bold underline">{title}: </p>
      <p className="text-white ml-2 capitalize overflow-hidden">{text}</p>
    </div>
  );
};

export default DescriptionType;
