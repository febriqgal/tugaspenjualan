/* eslint-disable @next/next/no-img-element */
import ButtonC from "@/components/button";
import { Poppins } from "next/font/google";
import Head from "next/head";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Head>
        <title>Tugas Penjualan</title>
      </Head>
      <main
        className={`${inter.className}  flex flex-col justify-center items-center min-h-screen mx-10 lg:mx-20 lg:w-[500px] lg:m-auto gap-10`}
      >
        <div className="flex justify-between w-full">
          <div className="bg-slate-50 h-[40px] w-[40px] rounded-xl hover:scale-105 duration-500 transition-all items-center flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8036 3.22166C15.9574 2.83707 16.3939 2.65001 16.7785 2.80384L16.9457 2.87073C18.6247 3.54231 19.964 4.85947 20.6634 6.527L20.7402 6.71009C20.9004 7.09207 20.7207 7.5316 20.3387 7.69182C19.9567 7.85204 19.5172 7.67228 19.357 7.29031L19.2802 7.10721C18.7362 5.81024 17.6945 4.78579 16.3886 4.26345L16.2214 4.19656C15.8368 4.04272 15.6498 3.60624 15.8036 3.22166Z"
                fill="#28303F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.24499 3.22166C8.09115 2.83707 7.65467 2.65001 7.27009 2.80384L7.10286 2.87073C5.42391 3.54231 4.08462 4.85947 3.38516 6.527L3.30836 6.71009C3.14814 7.09207 3.32791 7.5316 3.70988 7.69182C4.09185 7.85204 4.53138 7.67228 4.6916 7.29031L4.7684 7.10721C5.31243 5.81024 6.3541 4.78579 7.65995 4.26345L7.82717 4.19656C8.21176 4.04272 8.39882 3.60624 8.24499 3.22166Z"
                fill="#28303F"
              />
              <path
                d="M12 21C13.385 21 14.5633 20.1652 15 19H9C9.43668 20.1652 10.615 21 12 21Z"
                fill="#28303F"
              />
              <path
                opacity="0.4"
                d="M6.22281 19H17.7772C19.6056 19 20.6492 17.1609 19.5522 15.8721C19.0666 15.3016 18.7673 14.6249 18.6867 13.9153L18.2395 9.97519C17.9984 7.85063 16.4123 6.10719 14.2699 5.37366V5.26995C14.2699 4.01629 13.2537 3 12 3C10.7463 3 9.73005 4.01629 9.73005 5.26995V5.37366C7.58766 6.10719 6.0016 7.85063 5.76046 9.97519L5.31328 13.9153C5.23274 14.6249 4.93344 15.3016 4.44779 15.8721C3.35076 17.1609 4.39443 19 6.22281 19Z"
                fill="#28303F"
              />
            </svg>
          </div>
          <div className="bg-slate-50 h-[40px] w-[40px] rounded-xl hover:scale-105 duration-500 transition-all items-center flex justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.4" cx="12" cy="12" r="10" fill="#28303F" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.41421 10.4142 9.75 10 9.75C9.58579 9.75 9.25 9.41421 9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 9.54634 14.5899 10.0576 14.3138 10.4866C14.1409 10.7554 13.9387 11.0119 13.7523 11.2436C13.7182 11.286 13.6847 11.3275 13.6518 11.3683C13.4971 11.5597 13.3551 11.7354 13.2239 11.9158C12.9003 12.3605 12.75 12.6947 12.75 13V13.5C12.75 13.9142 12.4142 14.25 12 14.25C11.5858 14.25 11.25 13.9142 11.25 13.5V13C11.25 12.2007 11.6424 11.5398 12.011 11.0333C12.1667 10.8192 12.3373 10.6081 12.4925 10.4162C12.5236 10.3777 12.554 10.3401 12.5836 10.3033C12.7688 10.0731 12.9265 9.87065 13.0524 9.67495C13.1774 9.48068 13.25 9.24996 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75Z"
                fill="#28303F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V16C11.25 15.5858 11.5858 15.25 12 15.25Z"
                fill="#28303F"
              />
            </svg>
          </div>
        </div>
        <div className="bg-red-200 h-[100px] w-[100px] rounded-full overflow-clip">
          <img
            className="hover:scale-105 duration-500 transition-all"
            src="https://images.unsplash.com/photo-1683390379043-ec05d7cdf5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="#"
          />
        </div>
        <h1 className="font-extrabold text-lg">Tugas Penjualan</h1>
        <div className="flex flex-col w-full gap-4">
          <ButtonC title="Facebook" href="https://www.facebook.com/" />
          <ButtonC title="Youtube" href="https://www.youtube.com/" />
          <ButtonC title="Instagram" href="https://www.instagram.com/" />
          <ButtonC title="Twitter" href="https://twitter.com/" />
        </div>
        <h1 className="font-bold">© 2023</h1>
      </main>
    </div>
  );
}
