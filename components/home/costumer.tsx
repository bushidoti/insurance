import type { FC } from "react";
import Image from "next/image";

const Customer: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 sm:gap-16 md:grid-cols-2 md:px-6 lg:gap-20 lg:py-16">
        <div className="mb-8 text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                مشتریان ما
          </h2>
          <p className="lg:text-xl">
            آیا به دنبال آرامش خاطر برای خود و خانواده‌تان هستید؟ ما در کنار شما هستیم تا با
            ارائه‌ی بیمه‌هایی جامع و مطمئن، هر لحظه از زندگی‌تان را تحت پوشش قرار دهیم.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12">
          <a href="https://www.aja.ir" target='_blank' className="flex items-center justify-center">
            <span className="sr-only">Airbnb</span>
               <Image
                width={128}
                height={128}
                src="/army.png"
                className="rounded-lg"
                alt="carousel2"
              />
          </a>
          <a href="https://www.oghab-asaluyeh.ir" target='_blank' className="flex items-center justify-center">
            <span className="sr-only">Google</span>
           <Image
                width={128}
                height={128}
                src="/oghab.png"
                className="rounded-lg"
                alt="carousel2"
              />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Customer;
