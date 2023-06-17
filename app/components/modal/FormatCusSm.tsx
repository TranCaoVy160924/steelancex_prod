'use client'

interface FormatCusSmProps {
    children: React.ReactNode
}

const FormatCusSm: React.FC<FormatCusSmProps> = ({
    children
}) => {
    return (
        <div
            className="
                hidden
                md:block
                px-20
            "
        >
            {children}
        </div>
    )
}

export default FormatCusSm