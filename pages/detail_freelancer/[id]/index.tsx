'use client'

import { FormatCusMd, Container, Footer, ModalEdit, ModalPayment } from "@/app/components";
import {
  DegreeFreelancer,
  DescFreelancer,
  EducationFreelancer,
  FormatFreelancer,
  ProductFreelancer,
  ReviewFreelancer,
  SectionFreelancer
} from "@/app/components/freelancer";
import { useRouter } from "next/router";
import { freelancerList } from "@/app/constants";
import { useContext, useEffect, useState } from "react";
import FreelancerResponse from "@/models/freelancerResponse";
import FreelancerService from '../../../services/freelancerProfiles'
import CategoryService from '../../../services/category';
import CategoryResponse from "@/models/categoryResponse";
import { SkillItem } from "@/app/components/freelancer/DescFreelancer";
import { MyContext } from "@/app/layout";
import editQrModal from "@/hooks/useEditModal";
import usePaymentModal from "@/hooks/usePaymentModal";
import useQrModal from "@/hooks/useQrModal";

const DetailFreelancerPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 0)
  const [freelancer, setFreelancer] = useState<FreelancerResponse>();
  const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
  const { currentUser } = useContext(MyContext)
  const usePayment = usePaymentModal();
  const useQr = useQrModal();

  useEffect(() => {
    console.log("id: ", id);
    if (!id) {
      router.push("/list_freelancer");
    }
    else {
      FreelancerService.getDetail(id)
        .then(freelancerDetailResponse => {
          console.log(freelancerDetailResponse)
          setFreelancer(freelancerDetailResponse)
        })
        .catch(err => {
          router.push("/list_freelancer");
        })
      CategoryService.get()
        .then(categoriesResponse => {
          setCategories(categoriesResponse.value);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [])

  const getCategories = (freelancer: FreelancerResponse): SkillItem[] => {
    const categoryIds = freelancer.Categories;
    return categoryIds.map(cId => ({
      title: `${categories.find(c => c.Id === cId)?.Name}`
    }))
  }

  // const ProductContent = (
  //   <ProductFreelancer product={product} />
  // )

  // const EducationContent = (
  //   <EducationFreelancer education={education} />
  // )

  // const DegreeContent = (
  //   <DegreeFreelancer degree={degree} />
  // )
  // Check
  if (!freelancer) {
    return <div>Not Data</div>;
  }

  const reviewContent = (
    <ReviewFreelancer
      src={freelancer.ImageUrl}
      title={freelancer.Title}
      // star={star}
      address={freelancer.Address}
      // country={country}
      price={freelancer.Price}
    // recommence={recommence}
    />
  )

  const bodyContent = (
    <>
      <DescFreelancer
        usePayment={usePayment}
        title={freelancer.Fullname}
        label={freelancer.Title}
        // star={star}
        // rateStar={rateStar}
        // numberCmt={numberComment}
        // performance={performance}
        detail={freelancer.Description}
        skill={getCategories(freelancer)}
        isPremium={currentUser.IsPremium.valueOf()}
        useQr={useQr}
      />

      {/* <SectionFreelancer
        title="Products"
        body={ProductContent}
      /> */}

      {/* <SectionFreelancer
        title="Education"
        body={EducationContent}
      />

      <SectionFreelancer
        title="Degree"
        body={DegreeContent}
      />  */}
    </>
  )

  return (
    <>
      <FormatCusMd>
        <Container>
          <FormatFreelancer
            review={reviewContent}
            body={bodyContent}
          />
        </Container>
      </FormatCusMd >
      <ModalPayment freelancer={freelancer} />
      <Footer />
    </>
  );
};

export default DetailFreelancerPage;
