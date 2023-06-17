'use client'

import { useEffect, useState } from 'react';
import {
    JobList,
    FormatList,
    SearchCus,
    MultiFilter,
    FilterForm,
    Footer
} from "@/app/components"
import {
    optionLanguage,
    optionPayment,
    optionPlace,
    optionWork,
} from "@/app/constants"
import ReactPaginate from 'react-paginate';
import JobService from '../services/jobs';
import CategoryService from '../services/category'
import JobResponse from '@/models/jobResponse';
import CategoryResponse from '@/models/categoryResponse';
import { number } from 'yup';
import { useTranslation } from 'react-i18next';

// interface BodyContentProps {
// businessList: BusinessItem[];
// }

// const FilterCus: React.FC = () => {
//     const [priceFrom, setPriceFrom] = useState<number | null>(null);
//     const [priceTo, setPriceTo] = useState<number | null>(null);
//     const [selectedTimeFrom, setSelectedTimeFrom] = useState<Date | null>(null);
//     const [selectedTimeTo, setSelectedTimeTo] = useState<Date | null>(null);

//     const handlePriceChange = (from: number, to: number) => {
//         setPriceFrom(from);
//         setPriceTo(to);
//     };

//     const handleTimeChange = (from: Date, to: Date | null) => {
//         setSelectedTimeFrom(from);
//         setSelectedTimeTo(to);
//     };

//     return (
//         <FilterForm onPriceChange={handlePriceChange} onTimeChange={handleTimeChange} />
//     );
// };

const List_business = () => {
    const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
    const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
    const [jobCount, setJobCount] = useState(0); // Tổng số job
    const [jobs, setJobs] = useState<JobResponse[]>([]); // Job trong trang hiện tại
    const [offerFrom, setOfferFrom] = useState(0);
    const [offerTo, setOfferTo] = useState(0);
    const [filterCategories, setFilterCategories] = useState<number[]>([]);
    const { t } = useTranslation()

    useEffect(() => {
        JobService.getCount()
            .then((jobCountResponse: any) => {
                setJobCount(jobCountResponse);
            })
        CategoryService.get()
            .then(categoriesResponse => {
                setCategories(categoriesResponse.value);
            })
    }, [])

    useEffect(() => {
        JobService.getOpenJob({
            skip: currentPage * itemsPerPage,
            offerFrom: offerFrom,
            offerTo: offerTo,
            categories: filterCategories
        })
            .then((jobsResponse: any) => {
                setJobs(jobsResponse.value);
                setJobCount(jobsResponse["@odata.count"])
            })
    }, [currentPage, offerFrom, offerTo, filterCategories])

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

    // Xử lý sự kiện chuyển trang
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const filterContent = (
        <div className="
                flex
                flex-col
                gap-1
            "
        >
            <h1 className="text-xl">
                {t("Filter")}:
            </h1>
            <FilterForm
                onPriceChange={(from, to) => {
                    setOfferFrom(!isNaN(from) ? from : 0);
                    setOfferTo(!isNaN(to) ? to : 0);
                }}
                // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
                onTimeChange={(from, to) => { }}
            />
            <MultiFilter
                title={t("Skill") ?? ""}
                placeholder={t("Choose Skill") ?? ""}
                options={categories.map(c => ({
                    value: c.Id, label: c.Name
                }))}
                setFilterCategories={setFilterCategories}
            />
            <MultiFilter
                title={t("Language") ?? ""}
                placeholder={t("Choose Language") ?? ""}
                options={optionLanguage}
            />
            <MultiFilter
                title={t("Place") ?? ""}
                placeholder={t("Choose Place") ?? ""}
                options={optionPlace}
            />
            <MultiFilter
                title={t("Works") ?? ""}
                placeholder={t("Choose Work") ?? ""}
                options={optionWork}
            />
            <MultiFilter
                title={t("Payment") ?? ""}
                placeholder={t("Choose Payment") ?? ""}
                options={optionPayment}
            />
        </div>
    )

    // const BodyContent: React.FC<BodyContentProps> = () => {
    const BodyContent = (
        // return (
        <div className="flex flex-col gap-3">
            {jobs.map((item) => (
                <JobList
                    key={item.Id}
                    id={item.Id.toString()}
                    title={item.Name}
                    date={getDurationLeft(item)}
                    description={item.Description}
                    categories={getCategories(item)}
                    price={item.Offer}
                    businessName={item.BusinessName}
                />
            ))}
            {/* {businessList.map((item) => (
                <JobList
                    key={item.id as string}
                    {...item}
                />
            ))} */}

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={Math.ceil(jobCount / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName="
                        flex gap-2 
                        justify-center 
                        my-20
                    "
                pageLinkClassName="
                        px-3 py-2 
                        rounded 
                        bg-gray-200 
                        text-gray-700
                    "
                activeLinkClassName="
                        font-bold 
                        bg-gray-500 
                        text-white
                    "
                disabledClassName="
                        opacity-50 
                        cursor-not-allowed
                    "
            />
        </div>
    );
    // };

    return (
        <div>
            <SearchCus />
            <FormatList
                filter={filterContent}
                body={BodyContent}
            />
            <Footer />
        </div>
    )
}

export default List_business