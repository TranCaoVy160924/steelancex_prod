'use client'

import Image from "next/image"

const ImageCus = () => {
    return (
        <div className="
                hidden
                md:block
                relative 
                z-0 
                mt-20
            "
            style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
        >
            <Image
                src="/images/banner.png"
                alt="banner"
                className="relative z-0"
                height="600"
                width="600"
            />
        </div>
    )
}

export default ImageCus