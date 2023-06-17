'use client'

import DegreeItem from "./DegreeItem"

interface Degree {
  title: string;
  place: string;
  date: string;
  description: string;
}

interface DegreeFreelancerProps {
  degree: Degree[];
}

const DegreeFreelancer: React.FC<DegreeFreelancerProps> = ({
  degree
}) => {
  return (
    <>
      {degree.map((item) => (
        <DegreeItem
          key={item.title}
          title={item.title}
          place={item.place}
          date={item.date}
          description={item.description}
        />
      ))}
    </>
  )
}

export default DegreeFreelancer