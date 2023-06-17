'use client'

import Container from "../Container"
import { GetStarted, ImageCus } from "../body"

const Banner = () => {
    return (
        <Container>
            <div className="
                    flex 
                    flex-row 
                    my-20 
                "
            >
                <GetStarted />
                <ImageCus />
            </div>
        </Container>
    )
}

export default Banner