'use client'

import EducationItem from "./EducationItem"

interface EducationItem {
  title?: string;
  place?: string;
  date?: string;
}

interface EducationFreelancerProps {
  education: EducationItem[]
}

const EducationFreelancer: React.FC<EducationFreelancerProps> = ({
  education
}) => {
  return (
    <>
      {education.map((item) => (
        <EducationItem
          key={item.title}
          title={item.title}
          place={item.place}
          date={item.date}
        />
      ))}
    </>
  )
}

export default EducationFreelancer