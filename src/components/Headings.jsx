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
    sm: "text-sm leading-tight",
    md: "text-md leading-tight",
    lg: "text-lg leading-tight",
    xl: "text-xl leading-tight",
    "2xl": "text-2xl leading-tight",
    "3xl": "text-3xl leading-tight",
  };

  return <Tag className={`${textStyle[style]} ${headingSize[size]} ${headingStyle[as]} ${customClass} max-w-fit`}>{children}</Tag>;
}
