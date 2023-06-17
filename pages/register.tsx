'use client'

import { RiLockPasswordFill } from "react-icons/ri"
import { IoMail } from "react-icons/io5"
import { FaUserEdit } from "react-icons/fa"
import Select from "react-select"
import {
  Input,
  FormatForm,
  FormatCusMd,
  Container
} from "@/app/components"
import AuthService from '../services/auth'
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-toastify"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useTranslation } from "react-i18next"

const Register = () => {
  const router = useRouter();
  const { t } = useTranslation()
  const options = [
    { value: "Click Choose Role", label: "Click Choose Role", isDisabled: true },
    { value: "Business", label: "Doanh Ngiệp" },
    { value: "Freelancer", label: "Freelancer" },
  ];

  const [isFreelancer, setIsFreelancer] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required")
      .email("Invalid email format"),
    password: yup.string().required("Password is required")
      .min(6, "Password must be atleast 6 character")
      .max(25, "Password must be less than 25 character"),
    confirmPassword: yup.string().required("Confirm is required")
      .oneOf([yup.ref('password')], 'Confirm must match')
  }).required();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isFreelancer: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data.isFreelancer = isFreelancer === "Freelancer" ? true : false
    console.log(data)

    AuthService.register(data)
      .then(() => {
        toast.success('Registered!');
        router.push("login");
      })
      .catch((error) => {
        console.log(error.response.data)
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const bodyContent = (
    <form className="px-28 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FaUserEdit}
        id="firstName"
        name="firstName"
        placeholder={t("First Name") ?? ""}
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Input
        icon={FaUserEdit}
        id="lastName"
        name="lastName"
        placeholder={t("Last Name") ?? ""}
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Input
        icon={IoMail}
        id="email"
        name="email"
        placeholder="Mail"
        type="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Input
        icon={RiLockPasswordFill}
        id="password"
        name="password"
        placeholder={t("Password") ?? ""}
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Input
        icon={RiLockPasswordFill}
        id="confirmPassword"
        name="confirmPassword"
        placeholder={t("Confirm Password") ?? ""}
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Select
        options={options}
        className="text-xl"
        placeholder={t("Select...")}
        isClearable
        onChange={(input) => {
          setIsFreelancer(input?.value)
        }}
      />
      <button
        type="submit"
        className="
          w-full 
          bg-pink-cus-bt 
          rounded-50 
          h-16 
          text-xl 
          font-semibold 
          text-white
          mt-5
        "
      >
        {t("SIGN UP")}
      </button>
    </form>
  )

  const footerContent = (
    <div className="px-28">
      <h1>
        {t("Already have an account?")}
        <button
          onClick={() => router.push('/login')}
          className="
            text-pink-cus-tx 
            hover:underline
          "
        > {t("Log in")}
        </button>
      </h1>
    </div>
  )

  return (
    <FormatCusMd>
      <Container>
        <FormatForm
          title="Register"
          body={bodyContent}
          footer={footerContent}
        />
      </Container >
    </FormatCusMd >
  )
}

export default Register