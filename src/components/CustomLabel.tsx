import "./customLabel.css";

export interface Props {
    /**
     *   Texto capitalizado
     */
    allCaps?: boolean;

    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;

    /**
     *   Tipo de etiqueta
     */
    color?: "primary" | "secondary";

    /**
     * Texto de la etiqueta
     */
    label: string;

    /**
     *   Tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
}

export const CustomLabel = ({
    allCaps = false,
    color = "primary",
    fontColor,
    label = "No label",
    size = "normal",
}: Props) => {
    return (
        <span
            className={`customLabel ${size} text-${color} ${
                allCaps && "text-uppercase"
            }`}
            style={{ color: fontColor }}
        >
            {label}
        </span>
    );
};
