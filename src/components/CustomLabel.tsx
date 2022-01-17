import "./customLabel.css";

export interface Props {
    /**
     *   Texto capitalizado
     */
    allCaps?: boolean;

    /**
     * Color personalizado del fondo
     */
     backgroundColor?: string;

    /**
     *   Tipo de etiqueta
     */
    color?: "primary" | "secondary";

    /**
     * Color personalizado de la fuente
     */
     fontColor?: string;

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
    backgroundColor,
    fontColor,
    label = "No label",
    size = "normal",
}: Props) => {
    return (
        <span
            className={`customLabel ${size} text-${color} ${
                allCaps && "text-uppercase"
            }`}
            style={{ color: fontColor, backgroundColor }}
        >
            {label}
        </span>
    );
};
