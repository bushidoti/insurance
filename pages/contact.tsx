import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm px-4 text-center lg:mb-16 lg:px-6">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            تماس با ما
          </h2>
          <p className="text-gray-600 dark:text-gray-400 sm:text-xl">
             رسالت بيمه البرز، ايجاد سازماني جهاني تراز، رقابت پذير، متعهد نسبت به جامعه
              و پيشگام در ارائه خدمات متمايز به اشخاص حقيقي و حقوقي برای پوشش ريسک‌ها و جبران خسارت‌ها است.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              action="#"
              className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
            >
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="first-name" className="dark:text-white">نام</Label>
                <TextInput id="first-name" placeholder="حسین" required />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="last-name" className="dark:text-white">نام خانوادگی</Label>
                <TextInput id="last-name" placeholder="شاه محمدلو" required />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email" className="dark:text-white">آدرس ایمیل</Label>
                <TextInput
                  id="email"
                  placeholder="agent8002@bimehalborz.ir"
                  required
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="phone-number" className="dark:text-white">شماره تماس</Label>
                <TextInput
                  id="phone-number"
                  placeholder="09125446806"
                  required
                  type="number"
                />
              </div>
              <div className="grid grid-cols-1 gap-2 sm:col-span-2">
                <Label htmlFor="message" className="dark:text-white">پیام شما</Label>
                <Textarea
                  id="message"
                  placeholder="متن خود را بنویسید ......"
                  rows={6}
                  className="text-sm"
                />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  با ارسال و تایید این فرم شما&nbsp;
                  <a
                    href="#"
                    className="text-primary-600 hover:text-green-500 hover:underline dark:text-primary-500"
                  >
                    قوانین و مقررات
                  </a>
                  &nbsp;ما و&nbsp;
                  <a
                    href="#"
                    className="text-primary-600 hover:text-green-500 hover:underline dark:text-primary-500"
                  >
                    سیاست حفظ حریم خصوصی
                  </a>
                  &nbsp;ما را که توضیح می دهد چگونه ما ممکن است داده ها , از جمله اطلاعات شخصی شما را  برای اشخاص ثالث جمع آوری، استفاده و افشا کنیم.
                </p>
              </div>
              <Button type="submit" className='bg-green-600 hover:!bg-green-500 hover:text-black'>ارسال پیام</Button>
            </form>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <div
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                    className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                آدرس:
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                تهران <br/> افسریه شهرک شهید بهشتی
              </p>
            </div>
            <div>
              <div
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                    className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                تماس با ما:
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                هر گونه سوالی دارید حتما با ما در تماس باشید.
              </p>
              <a
                  href="tel:09125446806"
                  className="font-semibold hover:text-green-500 text-primary-600 hover:underline dark:text-primary-500"
              >
                09125446806
              </a>
            </div>
            <div>
              <div
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                    className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                ایمیل ما:
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                برای سوالات عمومی، از جمله درخواست خدمات بیمه البرز، به ما ایمیل بزنید.
              </p>
              <a
                  href="mailto:abc@example.com"
                  className="font-semibold hover:text-green-500 text-primary-600 hover:underline dark:text-primary-500"
              >
                agent8002@bimehalborz.ir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

