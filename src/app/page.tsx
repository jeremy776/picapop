"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Developer = [
  {
    name: "Angga Islami Pasya",
    role: "Backend Developer",
    image: "/dev/angga.jpeg",
    github: "https://github.com/AnggaaIs",
  },
  {
    name: "Wahyu Pamungkas",
    role: "UI / UX Designer",
    image: "/dev/wahyu.jpeg",
    github: "https://github.com/Devstore120",
  },
  {
    name: "Christian Jeremy",
    role: "Frontend Developer",
    image: "/dev/jeremy.jpeg",
    github: "https://github.com/jeremy776",
  },
];

export default function Home() {
  const router = useRouter();
  const [templates, setTemplates] =
    useState<{ label: string; filename: string }[]>();

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data))
      .catch((err) => console.error("Error fetching templates:", err));
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center px-10 pt-10 min-h-[80vh]">
        <div className="flex h-full flex-col gap-10 md:gap-0 md:flex-row justify-between items-center max-w-6xl md:p-5 rounded-xl w-full">
          <div className="w-full items-center md:items-start flex justify-center flex-col">
            <h1 className="md:text-5xl text-3xl text-center md:text-left font-semibold">Satu Klik, Foto Makin Aesthetic!</h1>
            <p className="text-md md:text-lg text-center md:text-left mt-2">
              Pilih template, ambil foto, dan bagikan hasilnya dalam sekejap!
            </p>

            <button
              onClick={() => {
                router.push("/templates");
              }}
              className="btn mt-4 btn-success w-full md:w-1/2 btn-wide"
            >
              Pilih bingkai
            </button>
          </div>
          <div className="hidden w-full md:flex items-center justify-center md:items-end md:justify-end">
            <div className="mt-10 md:mt-1 h-[350px] w-[300px] flex items-center justify-center relative">
              <Image
                className="absolute left-0 top-0 -rotate-12"
                src="/example/template1.png"
                alt="contoh"
                width={100}
                height={100}
              />
              <Image
                className="absolute left-16 top-14 -rotate-6"
                src="/example/template2.png"
                alt="contoh"
                width={100}
                height={100}
              />
              <Image
                className="absolute left-34 top-0 rotate-6"
                src="/example/template3.png"
                alt="contoh"
                width={100}
                height={100}
              />
              <Image
                className="absolute left-50 top-18 rotate-16"
                src="/example/template4.png"
                alt="contoh"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <section className="">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="mb-10 lg:mb-16 text-center">
            <h2 className="text-2xl mb-1 md:font-extrabold font-semibold tracking-tight leading-tight text-center md:text-3xl">Kolaborasi yang Menginspirasi!</h2>
            <p className="text-base-content/80">Kami bekerja sama dengan berbagai mitra untuk menghadirkan pengalaman yang lebih seru dan kreatif bagi pengguna.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:flex md:justify-center md:items-center md:flex-wrap dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
              <svg className="h-9 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 125 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.828 7.11521C64.828 8.52061 63.6775 9.65275 62.2492 9.65275C60.8209 9.65275 59.6704 8.52061 59.6704 7.11521C59.6704 5.70981 60.7813 4.57766 62.2492 4.57766C63.7171 4.6167 64.828 5.74883 64.828 7.11521ZM54.1953 12.2293C54.1953 12.4636 54.1953 12.854 54.1953 12.854C54.1953 12.854 52.9655 11.2923 50.3469 11.2923C46.0225 11.2923 42.6502 14.5327 42.6502 19.0221C42.6502 23.4726 45.9829 26.7518 50.3469 26.7518C53.0051 26.7518 54.1953 25.1513 54.1953 25.1513V25.815C54.1953 26.1272 54.4334 26.3615 54.7508 26.3615H57.9644V11.6828C57.9644 11.6828 55.0285 11.6828 54.7508 11.6828C54.4334 11.6828 54.1953 11.956 54.1953 12.2293ZM54.1953 21.6378C53.6002 22.4966 52.41 23.2383 50.9818 23.2383C48.4426 23.2383 46.4985 21.6768 46.4985 19.0221C46.4985 16.3675 48.4426 14.806 50.9818 14.806C52.3703 14.806 53.6399 15.5867 54.1953 16.4065V21.6378ZM60.3448 11.6828H64.1535V26.3615H60.3448V11.6828ZM117.237 11.2923C114.619 11.2923 113.389 12.854 113.389 12.854V4.6167H109.58V26.3615C109.58 26.3615 112.516 26.3615 112.794 26.3615C113.111 26.3615 113.349 26.0882 113.349 25.815V25.1513C113.349 25.1513 114.579 26.7518 117.198 26.7518C121.522 26.7518 124.895 23.4726 124.895 19.0221C124.895 14.5717 121.522 11.2923 117.237 11.2923ZM116.603 23.1993C115.135 23.1993 113.984 22.4575 113.389 21.5986V16.3675C113.984 15.5867 115.254 14.7668 116.603 14.7668C119.142 14.7668 121.086 16.3284 121.086 18.9831C121.086 21.6378 119.142 23.1993 116.603 23.1993ZM107.597 17.6557V26.4005H103.788V18.0852C103.788 15.6648 102.994 14.6888 100.852 14.6888C99.7015 14.6888 98.5113 15.2744 97.7574 16.1332V26.3615H93.9488V11.6828H96.964C97.2814 11.6828 97.5195 11.956 97.5195 12.2293V12.854C98.6302 11.7218 100.098 11.2923 101.566 11.2923C103.233 11.2923 104.621 11.7609 105.732 12.6977C107.081 13.7908 107.597 15.1962 107.597 17.6557ZM84.7048 11.2923C82.0862 11.2923 80.8564 12.854 80.8564 12.854V4.6167H77.0476V26.3615C77.0476 26.3615 79.9834 26.3615 80.2611 26.3615C80.5787 26.3615 80.8166 26.0882 80.8166 25.815V25.1513C80.8166 25.1513 82.0465 26.7518 84.665 26.7518C88.9895 26.7518 92.3617 23.4726 92.3617 19.0221C92.4015 14.5717 89.0292 11.2923 84.7048 11.2923ZM84.0699 23.1993C82.602 23.1993 81.4515 22.4575 80.8564 21.5986V16.3675C81.4515 15.5867 82.721 14.7668 84.0699 14.7668C86.6091 14.7668 88.5531 16.3284 88.5531 18.9831C88.5531 21.6378 86.6091 23.1993 84.0699 23.1993ZM73.7547 11.2923C74.9052 11.2923 75.5003 11.4876 75.5003 11.4876V14.9621C75.5003 14.9621 72.3264 13.908 70.3427 16.1332V26.4005H66.534V11.6828C66.534 11.6828 69.4699 11.6828 69.7476 11.6828C70.065 11.6828 70.3029 11.956 70.3029 12.2293V12.854C71.0171 12.0342 72.5644 11.2923 73.7547 11.2923ZM32.4423 24.4806C32.2699 24.0722 32.0976 23.6297 31.9252 23.2554C31.6493 22.6427 31.3736 22.0641 31.1322 21.5197L31.0978 21.4855C28.719 16.3804 26.1678 11.2073 23.4787 6.10219L23.3752 5.89799C23.0995 5.38748 22.8237 4.84294 22.5479 4.29839C22.2031 3.68577 21.8584 3.03913 21.3068 2.42652C20.2036 1.06516 18.6177 0.316406 16.9284 0.316406C15.2046 0.316406 13.6533 1.06516 12.5156 2.35845C11.9985 2.97107 11.6192 3.61771 11.2745 4.23032C10.9987 4.77486 10.7229 5.31941 10.4471 5.82992L10.3436 6.03413C7.68904 11.1392 5.10339 16.3124 2.7246 21.4175L2.69012 21.4855C2.44879 22.0301 2.17299 22.6087 1.89719 23.2214C1.72481 23.5957 1.55244 24.0041 1.38006 24.4466C0.93188 25.7058 0.793978 26.897 0.966355 28.1222C1.34558 30.6748 3.06935 32.8189 5.44815 33.7719C6.3445 34.1463 7.27534 34.3164 8.24065 34.3164C8.51645 34.3164 8.8612 34.2824 9.137 34.2483C10.2747 34.1122 11.4468 33.7378 12.5845 33.0912C13.9981 32.3083 15.3425 31.1852 16.8595 29.5517C18.3764 31.1852 19.7554 32.3083 21.1344 33.0912C22.2721 33.7378 23.4443 34.1122 24.5819 34.2483C24.8577 34.2824 25.2025 34.3164 25.4782 34.3164C26.4436 34.3164 27.4089 34.1463 28.2708 33.7719C30.6841 32.8189 32.3733 30.6408 32.7526 28.1222C33.0283 26.931 32.8904 25.7398 32.4423 24.4806ZM16.9259 25.893C15.1377 23.6468 13.9786 21.5327 13.5812 19.7488C13.4156 18.9891 13.3825 18.3284 13.4818 17.7338C13.5481 17.2053 13.7467 16.7429 14.0118 16.3465C14.6409 15.4546 15.7007 14.893 16.9259 14.893C18.1512 14.893 19.2441 15.4216 19.8402 16.3465C20.1051 16.7429 20.3037 17.2053 20.37 17.7338C20.4694 18.3284 20.4363 19.0221 20.2707 19.7488C19.8733 21.4995 18.7142 23.6136 16.9259 25.893ZM30.3665 27.6033C30.1305 29.3326 28.9509 30.8293 27.2993 31.4945C26.4903 31.8269 25.6139 31.9267 24.7376 31.8269C23.895 31.7273 23.0523 31.4611 22.176 30.9623C20.9624 30.2971 19.749 29.2662 18.3334 27.7363C20.558 25.0424 21.9062 22.5813 22.4118 20.3864C22.6477 19.3554 22.6815 18.4242 22.5804 17.5595C22.4456 16.7281 22.1422 15.9632 21.6703 15.298C20.6255 13.8014 18.8727 12.9367 16.9178 12.9367C14.9628 12.9367 13.21 13.8347 12.1652 15.298C11.6933 15.9632 11.39 16.7281 11.2551 17.5595C11.1203 18.4242 11.154 19.3887 11.4237 20.3864C11.9293 22.5813 13.3112 25.0757 15.5021 27.7695C14.1202 29.2994 12.873 30.3304 11.6596 30.9955C10.7832 31.4945 9.94059 31.7605 9.09795 31.8603C8.18787 31.9599 7.31152 31.8269 6.53628 31.5277C4.88468 30.8625 3.70497 29.366 3.46902 27.6365C3.36791 26.8051 3.43531 25.9737 3.77238 25.0424C3.8735 24.7098 4.04202 24.3774 4.21055 23.9782C4.4465 23.4461 4.71615 22.8807 4.9858 22.3153L5.0195 22.2489C7.34523 17.2935 9.83948 12.2383 12.4349 7.31623L12.536 7.11668C12.8056 6.61782 13.0753 6.0857 13.3449 5.58684C13.6146 5.05472 13.9179 4.55585 14.2886 4.12351C14.9965 3.32532 15.9403 2.89298 16.9852 2.89298C18.03 2.89298 18.9738 3.32532 19.6817 4.12351C20.0524 4.55585 20.3557 5.05472 20.6255 5.58684C20.8951 6.0857 21.1647 6.61782 21.4343 7.11668L21.5355 7.31623C24.0971 12.2716 26.5914 17.3267 28.9171 22.2821V22.3153C29.1867 22.8475 29.4227 23.4461 29.6924 23.9782C29.8609 24.3774 30.0294 24.7098 30.1305 25.0424C30.4003 25.9071 30.5013 26.7385 30.3665 27.6033Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section> */}

      <div className="flex flex-col items-center p-10 mt-5 bg-base-200 rounded-3xl">
        <div className="flex flex-col items-center max-w-2xl md:p-5 rounded-xl w-full">
          <h1 className="text-center text-4xl font-semibold">Template Foto</h1>
          <p className="text-center text-base">
            Kami menyediakan beberapa template foto yang bisa kamu gunakan
          </p>
          <div className="mt-10 place-content-around w-[100%] grid grid-cols-2 md:grid-cols-4 gap-4">
            {templates?.slice(0, 4).map((template, index) => (
              <div
                key={index}
                className="items-center p-2 flex-col justify-center flex w-full hover:bg-primary/40 transition-all ease hover:py-4 rounded-xl"
              >
                <p className="mb-2 text-center">{template.label}</p>
                <Image
                  className="rounded-md"
                  src={`/template/${template.filename}`}
                  alt={`${template.label}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full mb-20">
        <div className="left-0 h-[350px] -top-45 w-full items-center justify-center flex from-base-100 via-base-100 bg-gradient-to-t to-transparent absolute">
          <button
            className="btn btn-success btn-wide"
            onClick={() => {
              router.push("/templates");
            }}
          >
            Lihat semua template
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center px-2 mt-20">
        <div className="flex flex-col items-center max-w-7xl md:p-5 rounded-xl w-full">
          <section className="body-font w-full">
            <div className="container py-25">
              <div className="flex flex-col text-center w-full mb-10">
                <h3 className="text-center text-4xl font-semibold">Tim Kami</h3>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Kerja bareng, bikin solusi, selesai bersama
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                {Developer.map((dev) => (
                  <div key={dev.name} className="p-2 w-full">
                    <div className="shadow-sm h-full flex items-center border-secondary/90 border p-4 rounded-2xl">
                      <Image
                        alt="team"
                        width={50}
                        height={50}
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={dev.image}
                      />
                      <div className="flex-grow">
                        <h2 className="title-font font-medium text-bold">
                          {dev.name}
                        </h2>
                        <p className="text-sm text-accent">{dev.role}</p>
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
