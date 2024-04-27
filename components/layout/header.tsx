import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";
import {ChevronDownIcon, PhoneIcon} from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function CarIcon() {
  return <Image src='/car.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}

function FireIcon() {
  return <Image src='/fire.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}

function LifeIcon() {
  return <Image src='/life.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function TreatmentIcon() {
  return <Image src='/treatment.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function FreightIcon() {
  return <Image src='/freight.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function PlaneIcon() {
  return <Image src='/plane.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function LiabilityIcon() {
  return <Image src='/liability.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function EngineeringIcon() {
  return <Image src='/engineering.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}
function ThirdPartyIcon() {
  return <Image src='/third_party.png' className='w-[48px] h-[48px]' alt='car' width={48} height={48}/>
}

const products = [
  {name: 'بیمه ثالث', description: 'بیمه ثالث، پوششی برای خسارت‌های وارده ' +
        'به دیگران در حوادث رانندگی است. شامل خسارت‌های بدنی و خسارت به اموال.', href: '#', icon: ThirdPartyIcon},
  {name: 'بیمه بدنه', description: 'بیمه بدنه، پوششی برای خسارت‌های وارده به خودروی شما است. شامل خسارت‌های ناشی از تصادفات،' +
        ' سرقت، آتش سوزی.', href: '#', icon: CarIcon},
  {
    name: 'بیمه آتش سوزی',
    description: 'بیمه آتش سوزی، پوششی برای خسارت‌های ناشی از آتش به دارایی‌ها مانند خانه و ماشین است.',
    href: '#',
    icon: FireIcon
  },
  {name: 'بیمه عمر', description: 'بیمه عمر، قراردادی بین شخص و شرکت بیمه است. در زمان فوت یا ' +
        'پایان مدت بیمه، مبلغی به بیمه‌گذار یا وارثان او پرداخت می‌شود.', href: '#', icon: LifeIcon},
  {name: 'بیمه درمان', description: 'بیمه درمان، پوششی برای هزینه‌های خدمات درمانی است. ' +
        'شامل بازپرداخت هزینه‌های بیمارستان، دارو، مراقبت‌های ویژه.', href:'#', icon: TreatmentIcon},
  {name: 'بیمه باربری', description: 'بیمه باربری، پوششی برای خسارت‌های حمل و نقل کالا است. شامل خسارت‌های تصادفات، سرقت، آتش' +
        ' سوزی. حق بیمه پرداخت می‌شود و خسارت‌ها پوشش داده می‌شوند.', href: '#', icon: FreightIcon},
  {name: 'بیمه مسافرتی', description: 'بیمه مسافرتی، پوششی برای خسارت‌های ممکن در سفر است. شامل بیماری، تصادف، لغو سفر ' +
        'و بیشتر. حق بیمه پرداخت می‌شود و خسارت‌ها پوشش داده می‌شوند.', href: '#', icon: PlaneIcon},
  {name: 'بیمه مسئولیت', description: 'بیمه مسئولیت، پوششی برای خسارت‌های وارده به دیگران است. شامل خسارت‌های' +
        ' بدنی یا خسارت به اموال. حق بیمه پرداخت می‌شود و خسارت‌ها پوشش داده می‌شوند.', href: '#', icon: LiabilityIcon},
  {name: 'بیمه مهندسی', description: 'بیمه مهندسی، پوششی برای خسارت‌های پروژه‌های' +
        ' ساختمانی و مهندسی است. شامل خسارت‌های ناشی از حوادث غیرمترقبه.', href: '#', icon: EngineeringIcon},
]

const callsToAction = [
  {name: 'تماس با واحد فروش', href: 'tel:09125446806', icon: PhoneIcon},
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="relative isolate z-10 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">نمایندگی بیمه البرز کد 8002</span>
              <Image className="w-[48px] h-[48px]" width={48} height={48} src="/logo.png" alt="Logo"/>
            </Link>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold  hover:text-green-500 leading-6 text-gray-900">
              خانه
            </Link>
            <Link href="/blog" className="text-sm font-semibold hover:text-green-500 leading-6 text-gray-900">
              وبلاگ
            </Link>
            <Popover>
              <Popover.Button
                  className="flex hover:text-green-500 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                بیمه ها
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
              </Popover.Button>

              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                    className="absolute  inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-green-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {products.map((item) => (
                        <div key={item.name}
                             className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-green-50">
                          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-green-50 group-hover:bg-white">
                            <item.icon aria-hidden="true"/>
                          </div>
                          <Link href={item.href}
                                className="mt-6 hover:text-green-500 block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0"/>
                          </Link>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div>
                        {callsToAction.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center hover:text-green-500 justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                              {item.name}
                            </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link href="/contact" className="text-sm font-semibold hover:text-green-500 leading-6 text-gray-900">
              تماس با ما
            </Link>
            <Link href="/about" className="text-sm font-semibold hover:text-green-500 leading-6 text-gray-900">
              درباره ما
            </Link>
          </Popover.Group>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <Link href="/signin"
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 hover:text-green-500 lg:text-gray-900">
              ورود
            </Link>
            <Link
                href="/signup"
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-black hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              ساخت حساب
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>

        </nav>
        <Dialog as="div" dir={'rtl'} className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10"/>
          <Dialog.Panel
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="w-[48px] h-[48px]" width={48} height={48} src="/logo.png" alt="Logo"/>
              </Link>
              <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="ml-auto rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                ساخت حساب
              </Link>
              <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">

                  <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    خانه
                  </Link>
                  <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    وبلاگ
                  </Link>
                  <Disclosure  as="div" className="-mx-3">
                    {({open}) => (
                        <>
                          <Disclosure.Button
                              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            بیمه ها
                            <ChevronDownIcon
                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                                <Disclosure.Button
                                    onClick={() => setMobileMenuOpen(false)}
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {item.name}
                                </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                    )}
                  </Disclosure>
                  <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    تماس با ما
                  </Link>
                  <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    درباره ما
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                      href="/signin"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ورود
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}
