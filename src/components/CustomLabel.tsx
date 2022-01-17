import "./customLabel.css";

export interface Props {
  /**
   * Texto de la etiqueta
   */
  label: string;
  /**
   *   Tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
}

export const CustomLabel = ({ label = "No label", size = "normal" }: Props) => {
  return <span className={`${size}`}>{label}</span>;
};
