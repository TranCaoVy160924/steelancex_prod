'use client'

interface FormatFreelancerProps {
    review?: React.ReactElement;
    body?: React.ReactElement;
}

const FormatFreelancer: React.FC<FormatFreelancerProps> = ({
    review,
    body,
}) => {
    return (
        <div className="grid grid-cols-4 gap-10">
            <div className="col-span-1 w-full h-auto">
              {review}
            </div>
            <div className="
                col-span-3 
                w-full 
                h-auto 
                space-y-5
              "
            >
                {body}
            </div>
          </div>
    )
}

export default FormatFreelancer