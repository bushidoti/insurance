import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import type {ReactElement} from "react";
import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <section dir='rtl' className="bg-gray-700 bg-opacity-60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-white"
        >
          <Image width={48} height={48} className='w-[64px] h-[64px]' src="/logo.png" alt="Logo"/>
        </a>
        <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            تغییر گذرواژه
          </h2>
          <form className="mt-4 space-y-4 md:space-y-5 lg:mt-5">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="dark:text-white">آدرس ایمیل یا شماره تلفن همراه</Label>
              <TextInput
                id="email"
                name="email"
                placeholder="agent8002@bimehalborz.ir"
                required
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="password" className="dark:text-white">گذرواژه جدید</Label>
              <TextInput
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="confirm-password" className="dark:text-white">تایید گذرواژه</Label>
              <TextInput
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
                type="confirm-password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox
                  aria-describedby="terms-background"
                  id="terms-background"
                  required
                />
              </div>
              <div className="mr-3 text-sm">
                <Label htmlFor="terms-background" className="text-gray-500 dark:text-gray-300">
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="/terms"
                  >
                    قوانین و مقررات&nbsp;
                  </Link>
                  را قبول میکنم
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:!bg-green-500 hover:text-black">
              تغییر گذرواژه
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


ResetPasswordForm.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
        {page}
    </>
  )
}