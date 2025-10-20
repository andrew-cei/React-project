interface ButtonProps {
    variant?: "primary" | "outline" | "destructive";
    children: string;
    rounded: boolean | undefined;
}

export const Button = ({variant="primary",children, rounded=false}: ButtonProps) => {
    let className = "rounded-md "
    // Estilo redondeado
    if (rounded === true){
        className = "rounded-3xl ";
    }
    // Estilo principal
    if (variant === "primary"){
        className = className + "bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    }
    // Estilos alternativos
    else if (variant === "outline"){
        className = className + "bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 ring-inset hover:bg-gray-50";
    } else if (variant === "destructive"){
        className = className + "bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-indigo-600";
    }
    return <button type="button" className={className}>{children}</button>
}