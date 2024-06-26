import { Button } from "flowbite-react";
import type { FC } from "react";

const BackgroundImageCardsHero: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://fararu.com/files/fa/news/1399/8/5/783880_976.jpg')] bg-cover  bg-center bg-no-repeat p-8 text-right bg-blend-multiply hover:bg-blend-normal"
          >
            <h2 className="mb-5 max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-green-500">
              بیمه بدنه
            </h2>
            <Button className="border-green-400 border bg-transparent dark:bg-transparent dark:hover:bg-white text-green-500 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              اطلاعات بیشتر
            </Button>
          </a>
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://bimesho.com/wp-content/uploads/2021/06/Life-Insurance1.jpg')] bg-cover bg-center bg-no-repeat p-8 text-right bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <h2 className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-green-500">
              بیمه عمر
            </h2>
            <Button className="border-green-400 border bg-transparent dark:bg-transparent dark:hover:bg-white text-green-500 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              اطلاعات بیشتر
            </Button>
          </a>
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://alborzinskh.ir/wp-content/uploads/2024/01/%D9%85%D9%86%D9%86%D9%86%D9%86.png')] bg-cover bg-center bg-no-repeat p-8 text-right bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <h2 className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-green-500">
              طرح شوکا
            </h2>
            <Button className="border-green-400 border bg-transparent dark:bg-transparent dark:hover:bg-white text-green-500 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              اطلاعات بیشتر
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImageCardsHero;
