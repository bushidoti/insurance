import { Button, Carousel } from "flowbite-react";
import Image from "next/image";


const CarouselHome = () => {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                انتخاب امن برای حفاظت از آینده شما
              </h2>
              <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:max-w-3xl">
                بیمه، روشی برای محافظت از خود در برابر خسارت‌های مالی است.
                بیمه‌گذار متعهد می‌شود خسارت‌ها را در صورت وقوع رویداد خاصی جبران کند.
                بیمه‌گیرنده نیز حق بیمه را پرداخت می‌کند. این روش، ریسک‌های مالی را کاهش می‌دهد.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" color="gray" className="[&>span]:items-center  hover:!bg-green-500 hover:!text-white" outline>
                <svg
                  aria-hidden="true"
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                بیشتر بدانید
              </Button>
            </div>
          </div>
          <Carousel dir='ltr' className="h-64 md:h-96">
              <Image
                width={600}
                height={500}
                src="/carousel2.jpeg"
                className="rounded-lg"
                alt="carousel2"
              />
              <Image
                width={600}
                height={500}
                src="/carousel3.jpeg"
                className="rounded-lg"
                alt="carousel3"
              />
              <Image
                width={600}
                height={500}
                src="/carousel4.jpg"
                className="rounded-lg"
                alt="carousel4"
              />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselHome;
