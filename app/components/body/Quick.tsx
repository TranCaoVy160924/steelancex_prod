import { quicks } from "@/app/constants"
import QuickBox from "../QuickBox"
import Container from "../Container"
import { FormatCusSm } from "../modal"

const Quick = () => {
    return (
        <FormatCusSm>
            <div className="
                    flex 
                    flex-row 
                    justify-center
                "
            >
                <div className="
                        w-[90%] 
                        md:h-80
                        bg-white 
                        z-10 
                        shadow-lg 
                        rounded-12
                    "
                >
                    <Container>
                        <div className="
                                flex 
                                flex-row
                                gap-3 
                                md:gap-0
                                justify-between
                                items-center
                                py-10
                            "
                        >
                            {quicks.map((item) => (
                                <QuickBox
                                    key={item.label}
                                    icon={item.icon}
                                    label={item.label}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
        </FormatCusSm>
    )
}

export default Quick