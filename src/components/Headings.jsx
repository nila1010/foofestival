export default function Heading({ children, as = "h1", style = "none", customClass = "", size = "lg" }) {
  const Tag = as;
  const textStyle = {
    none: "",
    italic: "italic",
  };

  const headingStyle = {
    h1: "font-bold",
    h2: "font-medium",
    h3: "font-bold",
  };

  const headingSize = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  return <Tag className={`${textStyle[style]} ${headingSize[size]} ${headingStyle[as]} ${customClass} max-w-fit`}>{children}</Tag>;
}
