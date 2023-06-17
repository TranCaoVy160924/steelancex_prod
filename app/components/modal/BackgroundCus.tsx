'use client'

interface BackgroundProps {
    children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = ({
    children
}) => {
    return (
        <div className="
              absolute 
              inset-0 
              bg-cover 
              bg-center 
              w-full 
              h-cus-1
            "
            style={{
                backgroundImage: 'url("/images/background.png")',
            }}>
            {children}
        </div>
    )
}

export default Background