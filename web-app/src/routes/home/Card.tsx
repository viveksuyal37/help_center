interface CardPropsT {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardPropsT) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg w-[300px] h-[150px] bg-gray-100 ">
      <h3 className="pb-2 mb-1 text-xl font-semibold border-b border-gray-300">
        {title}
      </h3>
      <div className="max-h-[100px] overflow-auto">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
