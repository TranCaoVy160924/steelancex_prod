'use client'
import { useTranslation } from "react-i18next"
interface DegreeItemProps {
    title?: string;
    place?: string;
    date?: string;
    description?: string;
}

const DegreeItem: React.FC<DegreeItemProps> = ({
    title,
    place,
    date,
    description
}) => {
    const { t } = useTranslation()
    return (
        <section className="p-4 gap-2 text-xl">
            <h1 className="font-medium mb-2">
                {title}
            </h1>
            <h2>
                {place}
            </h2>
            <h2>
            {t("Date")} {date}
            </h2>
            <h2>
                {description}
            </h2>
        </section>
    )
}

export default DegreeItem