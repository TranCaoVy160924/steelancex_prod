'use client'

import {
    Footer,
    FormatList,
    MultiFilter,
    SearchCus,
    FreelancerList,
    RatingFilter,
    FilterForm
} from "@/app/components"
import {
    freelancerList,
    optionArrangement,
    optionExperience,
    optionJob,
    optionPrice,
    optionSkill,
    optionTypeWork
} from "@/app/constants"
import Select from "react-select"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import CategoryResponse from "@/models/categoryResponse"
import JobResponse from "@/models/jobResponse"
import FreelancerService from '../services/freelancerProfiles';
import CategoryService from '../services/category'
import FreelancerResponse from "@/models/freelancerResponse"
import { useTranslation } from "react-i18next"

// interface FreelancerItem {
//     id: string;
//     src: string;
//     title?: string;
//     label?: string;
//     description?: string;
//     price?: number;
//     star: number
// }

// interface BodyContentProps {
//     freelancerList: FreelancerItem[];
// }

const List_freelancer = () => {
    const itemsPerPage = 10; // Số mục hiển thị trên mỗi trang
    const [categories, setCategories] = useState<CategoryResponse[]>([]); // Các category
    const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
    const [freelancerCount, setFreelancerCount] = useState(0); // Tổng số job
    const [freelancers, setFreelancers] = useState<FreelancerResponse[]>([]); // Job trong trang hiện tại
    const [offerFrom, setOfferFrom] = useState(0);
    const [offerTo, setOfferTo] = useState(0);
    const [filterCategories, setFilterCategories] = useState<number[]>([]);
    const { t } = useTranslation()

    // // Lấy danh sách các mục trên trang hiện tại
    // const getCurrentPageItems = (): FreelancerItem[] => {
    //     const startIndex = currentPage * itemsPerPage;
    //     const endIndex = startIndex + itemsPerPage;
    //     return freelancerList.slice(startIndex, endIndex);
    // };

    const handleRatingFilterChange = (rating: number) => {
        console.log('Filter rating changed:', rating);
    }

    useEffect(() => {
        FreelancerService.getCount()
            .then(freelancerCountResponse => {
                setFreelancerCount(freelancerCountResponse);
            })
        CategoryService.get()
            .then(categoriesResponse => {
                setCategories(categoriesResponse.value);
            })
    }, [])

    useEffect(() => {
        FreelancerService.get({
            skip: currentPage * itemsPerPage,
            priceFrom: offerFrom,
            priceTo: offerTo,
            categories: filterCategories
        })
            .then(freelancersResponse => {
                console.log(freelancersResponse)
                setFreelancers(freelancersResponse.value);
                setFreelancerCount(freelancersResponse["@odata.count"])
            })
    }, [currentPage, offerFrom, offerTo, filterCategories])

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
                placeholder={t("Choose skill") ?? ""}
                options={categories.map(c => ({
                    value: c.Id,
                    label: c.Name
                }))}
                setFilterCategories={setFilterCategories}
            />
            <MultiFilter
                title={t("What job do you need?") ?? ""}
                placeholder={t("Choose field of work") ?? ""}
                options={optionJob}
            />
            <MultiFilter
                title={t("Prior experience") ?? ""}
                placeholder={t("Choose Experience") ?? ""}
                options={optionExperience}
            />
            <MultiFilter
                title={t("Hourly Rate (USD)") ?? ""}
                placeholder={t("Choose Price/Hour") ?? ""}
                options={optionPrice}
            />
            <div className="
                    w-full 
                    h-auto 
                    px-3 
                    py-3 
                    gap-5 
                    border-[1px] 
                    rounded-15 
                    shadow-lg 
                    bg-white
                "
            >
                <h1 className="font-semibold my-3">{t("Working")}</h1>
                <RatingFilter onChange={handleRatingFilterChange} />
            </div>
            <div className="
                    w-full 
                    h-auto 
                    px-3 
                    py-3 
                    gap-5 
                    border-[1px] 
                    rounded-15 
                    shadow-lg 
                    bg-white
                "
            >
                <h1 className="font-semibold my-3">{t("Working")}</h1>
                <Select
                    placeholder="Choose arrangement"
                    options={optionArrangement}
                    className="my-3"
                    isClearable
                    isMulti
                    filterOption={(option, inputValue) =>
                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                    }
                />
                <Select
                    placeholder="Choose type"
                    options={optionTypeWork}
                    className="my-3"
                    isClearable
                    isMulti
                    filterOption={(option, inputValue) =>
                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                    }
                />
            </div>
        </div>
    )

    const BodyContent = (
        // return (
        <div className="flex flex-col gap-3">
            {freelancers.map((item) => (
                <FreelancerList
                    key={item.Id.toString()}
                    id={item.Id.toString()}
                    src={item.ImageUrl}
                    fullname={item.Fullname}
                    title={item.Title}
                    description={item.Description}
                    price={item.Price}
                    {...item}
                />
            ))}

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={Math.ceil(freelancerCount / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName="
                        flex 
                        gap-2 
                        justify-center
                        my-20
                    "
                pageLinkClassName="
                        px-3 
                        py-2 
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
        // );
    );
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

export default List_freelancer