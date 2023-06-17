'use client'

import { RiLockPasswordFill } from "react-icons/ri"
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoMail } from 'react-icons/io5'
import {
  // FieldValue, 
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form"
import AuthService from '../services/auth'
// import { useRouter } from "next/router"
import {
  Input,
  FormatForm,
  FormatCusMd,
  Container
} from "@/app/components"
import { toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
// import { json } from "stream/consumers"
import { useTranslation } from "react-i18next"
import { MyContext } from "@/app/layout"
import { useRouter } from "next/router"

const Login = () => {
  const { t } = useTranslation()
  const router = useRouter();
  const context = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    email: '',
    password: ''
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    AuthService.authenticate(data)
      .then(authResponse => {
        localStorage.setItem("auth", authResponse.token);
        AuthService.getUserProfile()
          .then(profileResponse => {
            localStorage.setItem("profile", JSON.stringify(profileResponse))
            AuthService.decodeJwtToken();
            // const username = `${profileResponse.firstname} ${profileResponse.lastname}`;
            toast.success(`Welcome ${profileResponse.username}`);
            context.setCurrentUser(AuthService.getUserInfo());
            reset(defaultValues)
            router.push("/");
          })
          .catch(error => {
            localStorage.removeItem("auth");
            toast.error(error.response.data);
          })
      })
      .catch(error => {
        console.log("Login error: ", error);
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const BodyContent: React.FC = () => {
    return (
      <form className="
          px-28 
          pt-20
          pb-10
      "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          icon={IoMail}
          disabled={isLoading}
          id="email"
          placeholder="Email"
          type="Email"
          register={register}
          errors={errors}
        />
        <Input
          icon={RiLockPasswordFill}
          disabled={isLoading}
          id="password"
          placeholder={t("Password") ?? ""}
          type="password"
          register={register}
          errors={errors}
        />
        <h1
          // onClick={() => { }}
          className="
            text-pink-cus-tx 
            cursor-pointer
            hover:underline
            mb-2
          "
        >
          {t("Forgot password ?")}
        </h1>
        <button
          // onClick={() => { }}
          className="
            w-full 
            bg-pink-cus-bt 
            rounded-50 
            h-16 
            text-xl 
            font-semibold 
            text-white
        "
        >
          {t("Sign in")}
        </button>
      </form>
    )
  }

  const footerContent = (
    <div className="space-y-10">
      <h1 className="
          text-center 
          text-pink-cus-bt
        "
      >
        {t("Or")}
      </h1>
      <div className="
          flex 
          flex-row 
          justify-center
        "
      >
        <FaFacebook size={80} className="text-blue-500 cursor-pointer mr-20" />
        <FcGoogle size={80} className="cursor-pointer" />
      </div>
    </div>
  )

  return (
    <FormatCusMd>
      <Container>
        <FormatForm
          title="Login"
          body={<BodyContent />}
          footer={footerContent}
        />
      </Container>
    </FormatCusMd>
  )
}

export default Login