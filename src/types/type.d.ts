type ButtonProps = {
  style?: React.CSSProperties;
  title: string;
  link?: string;
};

type CardProps<T = string | { name: string; link?: string }> = {
  title: string;
  data: T[];
  contentStyle?: React.CSSProperties;
  type?: string;
};
