const Separator = ({
  size,
}: {
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}) => {
  switch (size) {
    case "small":
      return <div className="col-span-12 h-small"></div>;
    case "medium":
      return <div className="col-span-12 h-medium"></div>;
    case "large":
      return <div className="col-span-12 h-large"></div>;
    case "xlarge":
      return <div className="col-span-12 h-xlarge"></div>;
    case "xxlarge":
      return <div className="col-span-12 h-auto md:h-xxlarge "></div>;
    default:
      return <div className="col-span-12 h-small"></div>;
  }
};

export default Separator;
