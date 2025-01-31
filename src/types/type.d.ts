type ButtonProps = {
  style?: React.CSSProperties;
  title: string;
};
type CardProps = {
  title: string;
  data: { name: string; link?: string }[];
  contentStyle?: React.CSSProperties;
  type?: string;
};
