// import Swiper core and required modules


// Import Swiper styles
import { TestimoniesType } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonySlide = ({name, content}:{name: string, content: string}) => {
  return (
    <div className="bg-white py-8 px-7 rounded-md shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="50"
        height="50"
        x="0"
        y="0"
        viewBox="0 0 64 64"
        
      >
        <g>
          <path
            d="M50.63 26.226c-.13-1.394-.031-5.182 3.598-10.45a1 1 0 0 0-.116-1.274c-1.48-1.48-2.396-2.413-3.038-3.066-.845-.862-1.23-1.254-1.795-1.766a1.002 1.002 0 0 0-1.328-.013c-6.326 5.504-13.351 16.877-12.334 30.81.595 8.182 6.563 14.121 14.19 14.121 7.825 0 14.192-6.366 14.192-14.192 0-7.55-5.925-13.742-13.37-14.17zm-.824 26.362c-6.549 0-11.677-5.158-12.195-12.265-1.144-15.672 8.172-25.85 10.986-28.546.274.271.588.59 1.05 1.06.556.566 1.318 1.342 2.47 2.498-4.405 6.787-3.574 11.623-3.21 12.316.173.33.528.551.9.551 6.723 0 12.192 5.47 12.192 12.194 0 6.722-5.47 12.192-12.193 12.192zM15.114 26.226c-.13-1.39-.035-5.175 3.598-10.45a1 1 0 0 0-.116-1.274c-1.477-1.477-2.392-2.41-3.033-3.062-.848-.864-1.235-1.257-1.799-1.77a1.004 1.004 0 0 0-1.328-.014C6.111 15.16-.916 26.531.099 40.468c.598 8.181 6.566 14.12 14.192 14.12 7.827 0 14.194-6.366 14.194-14.192 0-7.551-5.926-13.744-13.371-14.17zm-.823 26.362c-6.547 0-11.678-5.158-12.198-12.266v.001c-1.14-15.674 8.175-25.851 10.99-28.546.275.271.59.591 1.052 1.063.556.566 1.317 1.34 2.467 2.495-4.405 6.788-3.574 11.623-3.21 12.315.173.33.528.552.9.552 6.723 0 12.193 5.47 12.193 12.194 0 6.722-5.47 12.192-12.194 12.192z"
            fill="#2b77ea"
            opacity="1"
            data-original="#000000"
            
          ></path>
        </g>
      </svg>
      <p className="mt-3">
        {/* I encountered God’s servant in a vision which encouraged me to attend
        the Impact meetings diligently as I was preparing for the church's Aluu
        Mbodo city crusade. I hearkened and was greatly impacted and better
        equipped for the crusade. As for the crusade, the crowd was
        overwhelming, lots of souls were won, unusual healings and deliverances
        took place - all to the glory of God! */}
        {content}
      </p>
    </div>
  );
};

export default TestimonySlide;