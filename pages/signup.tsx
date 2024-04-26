import type {ReactElement} from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
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
            <h2 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              حساب کاربری خود را بسازید
            </h2>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email" className="dark:text-white">آدرس ایمیل</Label>
                <TextInput
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="number" className="dark:text-white">شماره همراه</Label>
                <TextInput
                    id="number"
                    name="number"
                    placeholder="09125446806"
                    required
                    type="number"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="username" className="dark:text-white">گذرواژه</Label>
                <TextInput
                    id="username"
                    name="username"
                    placeholder="••••••••"
                    required
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="confirm-password" className="dark:text-white">تکرار گذرواژه</Label>
                <TextInput
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    required
                    type="confirm-password"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  تاریخ تولد
                </p>
                <div className="flex items-center gap-1">
                  <div className="ml-4 w-full">
                    <Label htmlFor="day" className="sr-only dark:text-white">
                      روز
                    </Label>
                    <Select id="day" defaultValue='روز'>
                      <option>روز</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </Select>
                  </div>
                  <div className="ml-4 w-full">
                    <Label htmlFor="month" className="sr-only">
                      ماه
                    </Label>
                    <Select id="month" defaultValue='ماه'>
                      <option>ماه</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="year" className="sr-only">
                      سال
                    </Label>
                    <Select id="year" defaultValue='سال'>
                      <option>سال</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center me-2">
                  <Checkbox
                      aria-describedby="terms-background"
                      id="terms-background"
                      required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                      htmlFor="terms-background"
                      className="text-gray-500 dark:text-gray-300"
                  >
                    من&nbsp;
                    <Link
                        className="font-medium text-primary-600 hover:underline hover:text-green-500 dark:text-primary-500"
                        href="/terms"
                    >
                      قوانین و مقررات&nbsp;
                    </Link>
                    را تایید میکنم
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:!bg-green-500 hover:text-black">
                ساخت حساب کاربری
              </Button>
              <p className="text-center text-sm text-gray-900 dark:text-white font-medium">
                <Link
                    href="/signin"
                    className="font-medium text-primary-600 hover:text-green-500 hover:underline dark:text-primary-500"
                >
                  حساب کاربری دارید ؟
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
        {page}
    </>
  )
}

