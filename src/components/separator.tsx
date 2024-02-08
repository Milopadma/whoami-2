const Separator = ({
  size,
}: {
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
}) => {
  switch (size) {
    case "small":
      return <div className="h-small col-span-12"></div>;
    case "medium":
      return <div className="h-medium col-span-12"></div>;
    case "large":
      return <div className="h-large col-span-12"></div>;
    case "xlarge":
      return <div className="h-xlarge col-span-12"></div>;
    case "xxlarge":
      return <div className="h-xxlarge col-span-12"></div>;
    default:
      return <div className="h-small col-span-12"></div>;
  }
};

export default Separator;
