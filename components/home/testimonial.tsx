import { Carousel } from "flowbite-react";
import type { FC } from "react";

const CarouselSlider: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            نظرات
          </h2>
        </div>
        <div className="h-80 py-4 2xl:h-96">
          <Carousel
              dir='ltr'
            leftControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            }
            rightControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Next</span>
              </span>
            }
            theme={{
              root: {
                base: "relative h-72 md:h-70 md:mx-auto md:w-2/3",
                leftControl:
                  "absolute bottom-0 right-1/2 flex items-center justify-center px-4 focus:outline-none",
                rightControl:
                  "absolute bottom-0 left-1/2 flex items-center justify-center px-4 focus:outline-none",
              },
              indicators: {
                "base": "d-none"
              },
              scrollContainer: {
                base: "flex h-72 md:h-64 snap-mandatory overflow-y-visible overflow-x-scroll scroll-smooth rounded-lg",
              },
            }}
          >
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  &quot;
                  من به مدت چندین سال است که بیمه خودروی خود را از نمایندگی بیمه البرز تهیه می‌کنم و همیشه از کیفیت خدمات آنها راضی بوده‌ام. در مواقعی که نیاز به پشتیبانی داشتم، کارکنان با حوصله و دقت به سوالات من پاسخ دادند و در زمان بروز خسارت، پرداخت خسارت به سرعت و بدون دردسر انجام شد. بیمه درمان تکمیلی البرز نیز یکی از بهترین‌ها در بازار است و من برای خدمات درمانی خود هزینه بسیار کمی پرداخت می‌کنم. به همین دلیل، من به شدت نمایندگی بیمه البرز را به دیگران توصیه می‌کنم.
                  &quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  &quot;
با توجه به تجربه‌ای که از خرید بیمه عمر از نمایندگی بیمه البرز داشتم، می‌توانم بگویم که از پشتیبانی و خدمات پس از فروش آنها بسیار خرسندم. هر زمان که سوال یا مشکلی داشتم، به سرعت و با دقت به من کمک کردند.                  &quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  &quot;
به عنوان کسی که برای اولین بار از نمایندگی بیمه البرز بیمه خریداری کرده است، باید بگویم که تجربه بسیار خوبی بود. اطلاعات کامل و شفاف ارائه شد و تمامی شرایط و مزایای بیمه به خوبی توضیح داده شد. از اینکه انتخابم را بر اساس اطلاعات دقیق انجام دادم، خوشحالم.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                </div>
              </figcaption>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlider;
