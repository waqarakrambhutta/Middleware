import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl xl:max-w-[1370px] lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4 ">
            <div className="relative overflow-hidden w-full rounded-lg ring-1 ring-white/15 max-lg:rounded-t-[1.5rem] lg:rounded-tl-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/main.jpg"
                className="h-80 w-full object-cover object-left"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#01AD87] uppercase tracking-[1px]">
                  Releases
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Push to deploy
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg ring-1 ring-white/15 lg:rounded-tr-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i2.jpeg"
                className="h-80 object-cover"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#01AD87] uppercase tracking-[1px]">
                  Integrations
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg  ring-1 ring-white/15 lg:rounded-bl-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i3.jpeg"
                className="h-80 object-cover"
              />
              <Link href={"/"} className="absolute inset-0" />

              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#01AD87] uppercase tracking-[1px]">
                  Security
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Advanced access control
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="relative overflow-hidden w-full rounded-lg ring-1 ring-white/15 max-lg:rounded-b-[1.5rem] lg:rounded-br-[1.5rem] border-[1px] border-gray-300 bg-white">
              <Image
                height={512}
                width={512}
                alt=""
                src="/i6.jpeg"
                className="h-80 object-cover w-full object-left"
              />
              <Link href={"/"} className="absolute inset-0" />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-[#01AD87] uppercase tracking-[1px]">
                  Performance
                </h3>
                <p className="mt-2 text-xl font-bold tracking-tight">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue
                  vel commodo vulputate. Maecenas at augue sed elit dictum
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
