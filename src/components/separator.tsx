const Separator = ({
  size,
}: {
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}) => {
  switch (size) {
    case "small":
      return <div className="col-span-12 h-4"></div>;
    case "medium":
      return <div className="col-span-12 h-8"></div>;
    case "large":
      return <div className="col-span-12 h-16"></div>;
    case "xlarge":
      return <div className="col-span-12 h-24"></div>;
    case "xxlarge":
      return <div className="col-span-12 h-auto md:h-48"></div>;
    default:
      return <div className="col-span-12 h-4"></div>;
  }
};

export default Separator;
