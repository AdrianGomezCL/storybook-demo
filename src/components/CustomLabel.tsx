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
  
  /**
   *   Tipo de etiqueta
   */
  color: "primary" | "secondary";

  /**
   *   Texto capitalizado
   */
  allCaps: boolean;
}

export const CustomLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
}: Props) => {
  return <span className={`customLabel ${size} text-${color} ${ allCaps && "text-uppercase" }`}>{label}</span>;
};
