type ButtonProps = {
  style?: React.CSSProperties;
  title: string;
  link?: string;
};
type CardProps = {
  title: string;
  data: { name: string; link?: string }[];
  contentStyle?: React.CSSProperties;
  type?: string;
};
