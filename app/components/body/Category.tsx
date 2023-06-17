'use client'

import CategoryBox from "../CategoryBox"
import Container from "../Container"
import { FormatCusMd } from "../modal"
import { categories } from "@/app/constants"
import { ButtonCus } from "../body"
import { useTranslation } from "react-i18next"

const Category = () => {
    const { t } = useTranslation()
    return (
        <FormatCusMd>
            <Container>
                <div className="
                        flex 
                        flex-col 
                        gap-3 
                        md:gap-0 
                        z-10
                    "
                >
                    <div className="
                            flex 
                            flex-row 
                            justify-center 
                            items-center
                        "
                    >
                        <h1 className="
                                text-5xl 
                                font-semibold
                            "
                        >
                            <span>{t("Choose Different")} </span>
                            <span className="text-pink-cus-tx">{t("Category")}</span>
                        </h1>
                    </div>
                    <div className="
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-4 
                            gap-4 
                            justify-center 
                            mt-20
                        "
                    >
                        {categories.map((item) => (
                            <CategoryBox
                                key={item.label}
                                image={item.src}
                                label={item.label}
                            />
                        ))}
                    </div>
                    <ButtonCus />
                </div>
            </Container>
        </FormatCusMd>
    )
}

export default Category