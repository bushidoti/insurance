import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import type {ReactElement} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  return (
    <section dir='rtl' className="bg-gray-700 bg-opacity-60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <Link
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-white"
        >
          <Image width={48} height={48} className='w-[64px] h-[64px]' src="/logo.png" alt="Logo"/>
        </Link>
        <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              وارد حساب کاربری خود شوید
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label htmlFor="email" className="mb-2 block dark:text-white">آدرس ایمیل یا شماره تلفن همراه</Label>
                <TextInput
                  id="email"
                  placeholder="name@company.com یا 09125446806"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 block dark:text-white">گذرواژه</Label>
                <TextInput
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Checkbox id="remember-background" required />
                  </div>
                  <div className="mr-3 text-sm">
                    <Label htmlFor="remember-background" className="text-gray-500 dark:text-gray-300">مرا به خاطر بسپار</Label>
                  </div>
                </div>
                <Link
                  href="/password_reset"
                  className="text-sm hover:text-green-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  گذرواژه را فراموش کردی ؟
                </Link>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:!bg-green-500 hover:text-black">
                ورود
              </Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                <Link color="none" href="/signup" className="w-full hover:text-green-500 font-medium text-primary-600 dark:text-primary-500 p-0 [&>span]:p-0 hover:underline">
                   حساب کاربری نداری ؟
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
        {page}
    </>
  )
}