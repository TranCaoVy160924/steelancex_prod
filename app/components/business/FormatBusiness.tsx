'use client'

import Container from "../Container";
import { FormatCusMd } from "../modal";

interface FormatBusinessProps {
    review?: React.ReactElement;
    detail?: React.ReactElement;
    offer?: React.ReactElement;
    jobCompany?: React.ReactElement;
    similarJob?: React.ReactElement;
}

const FormatBusiness: React.FC<FormatBusinessProps> = ({
    review,
    detail,
    jobCompany,
    offer,
    similarJob
}) => {
    return (
        <div className="flex flex-col mt-10">
            {review}
            <div className="border-b-4 border-blue-cus"></div>
            <FormatCusMd>
                <Container>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-2 space-y-6">
                            {detail}
                            {offer}
                        </div>
                        <div className="col-span-1 space-y-6">
                            {jobCompany}
                            {similarJob}
                        </div>
                    </div>
                </Container>
            </FormatCusMd>
        </div>
    )
}

export default FormatBusiness