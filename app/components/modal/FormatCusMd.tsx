'use client'

interface FormatCusMdProps {
    children: React.ReactNode
}

const FormatCusMd: React.FC<FormatCusMdProps> = ({
    children
}) => {
    return (
        <div
            className="
                px-20
                py-20
            "
        >
            {children}
        </div>
    )
}

export default FormatCusMd