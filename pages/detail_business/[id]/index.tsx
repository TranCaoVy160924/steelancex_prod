'use client'

import {
  Footer,
  ReviewBusiness,
  DetailBusiness,
  FormatBusiness,
  OfferBusiness
} from "@/app/components"
import { businessList, freelancerList } from "@/app/constants";
import CategoryResponse from "@/models/categoryResponse";
import JobResponse from "@/models/jobResponse";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import CategoryService from '../../../services/category';
import JobService from '../../../services/jobs';
import { MyContext } from "@/app/layout";
import useQrModal from "@/hooks/useQrModal";
// import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface Offer {
  comment: string;
  price: number;
  date: number;
}

const DetailBusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<JobResponse>();
  const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
  const [businessJobs, setBusinessJobs] = useState<JobResponse[]>([]);
  const { currentUser } = useContext(MyContext);
  const useQr = useQrModal();

  useEffect(() => {
    CategoryService.get()
      .then(categoriesResponse => {
        setCategories(categoriesResponse.value);
      })
      .catch(error => {
        console.log(error);
      })
    JobService.getDetail(id)
      .then((jobDetailResponse: JobResponse) => {
        console.log(jobDetailResponse)
        setJob(jobDetailResponse)
      })
      .catch((error: Error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    JobService.getJobByBusiness(job?.BusinessName)
      .then((jobByBusinessResponse: any) => {
        console.log(jobByBusinessResponse);
      })
      .catch((error: Error) => {
        console.log(error);
      })
  }, [job])

  // Check
  if (!job) {
    return <div>Not Data</div>;
  }

  const getDurationLeft = (job: JobResponse) => {
    const expiredDate = new Date(job.ApplyExpireDate); // Replace with your start date
    const currentDate = new Date();
    const timeDifference = expiredDate.getTime() - currentDate.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    return dayDifference;
  }

  const getCategories = (job: JobResponse) => {
    const categoryIds = job.Categories;
    let categoriesString = "";
    categoryIds.forEach(cId => {
      categoriesString += `${categories.find(c => c.Id === cId)?.Name}, `
    })

    return categoriesString.replace(/, $/, '');
  }

  function calculateAveragePrice(offers?: Offer[]) {
    if (!offers || offers.length === 0) return 0;
    const totalPrice = offers.reduce((sum, offer) => sum + offer.price, 0);
    return totalPrice / offers.length;
  }

  const reviewContent = (
    <ReviewBusiness
      key={id as string}
      title={job.Name}
      price={job.Offer}
    />
  )

  const detailContent = (
    <DetailBusiness
      key={id as string}
      id={id as string}
      description={job.Description}
      skills={getCategories(job)}
      openDateLeft={getDurationLeft(job)}
      currentUser={currentUser}
      useQr={useQr}
    />
  )

  // const offerContent = (
  //   <div className="flex flex-col text-xl bg-white shadow-lg p-6">
  //     <h1 className="font-bold py-2">
  //       {freelancerList.filter(item => item.offer).length} freelancer offer average price of{" "}
  //       {freelancerList
  //         .filter(item => item.offer)
  //         .reduce((total, item) => total + calculateAveragePrice(item.offer), 0) /
  //         freelancerList.filter(item => item.offer).length}
  //       $ for this Job
  //     </h1>
  //     <div className="border-b-2"></div>
  //     {freelancerList
  //       .filter(item => item.offer) // Filter out items without an offer
  //       .slice(0, 100) // Limit the list to the first 100 items
  //       .map((item) => (
  //         <OfferBusiness
  //           key={item.id}
  //           src={item.src}
  //           title={item.title}
  //           offer={item.offer}
  //         />
  //       ))}
  //   </div>
  // )

  const jobCompanyContent = (
    <div className="flex flex-col text-xl bg-white shadow-lg p-6">
      <h1 className="font-bold py-2">Other jobs from this company</h1>
      <div className="border-b-2"></div>

    </div>
  )

  const similarJobContent = (
    <div className="flex flex-col text-xl bg-white shadow-lg p-6">
      <h1 className="font-bold py-2">Similar jobs</h1>
      <div className="border-b-2"></div>

    </div>
  )

  return (
    <>
      <FormatBusiness
        review={reviewContent}
        detail={detailContent}
        // offer={offerContent}
        jobCompany={jobCompanyContent}
        similarJob={similarJobContent}
      />
      <Footer />
    </>
  )
}

export default DetailBusinessPage