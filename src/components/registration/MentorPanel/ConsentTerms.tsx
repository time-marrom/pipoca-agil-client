import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GlobalContext } from "@/contexts/GlobalContext";
import { getSanityMentorContent } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { PortableText } from "@portabletext/react";
import { sanityComponents } from "@/components/PortableText";

interface ConsentTermsProps {
  content: SubscriptionContent;
}

export function ConsentTerms({ content }: ConsentTermsProps) {
  const { data } = useQuery({
    queryKey: ["mentor"],
    queryFn: getSanityMentorContent,
    initialData: content,
  });

  const { isAcceptedTerms, setIsAcceptedTerms, setMentorCurrentStep } =
    useContext(GlobalContext);

  function handleCheckboxChange(): void {
    setIsAcceptedTerms(!isAcceptedTerms);
  }

  console.log("data.terms", data.terms);
  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-12 px-4 border-none bg-[#5A0C94] text-white font-title text-base font-medium rounded-2xl p-2 xl:m-0 hover:translate-y-[-10px] hover:duration-1000 hover:transition-all hover:shadow-lg hover:shadow-[#858585]">
        {data.buttonToOpenTerms}
      </AlertDialogTrigger>
      {/* <AlertDialogContent className="w-96 h-3/5 lg:w-max lg:h-3/5 overflow-y-auto  bg-[#F6F6F6]"> */}
      <AlertDialogContent className="max-w-3xl w-96 h-3/5 lg:w-max lg:h-3/5 overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal md:font-medium text-2xl md:text-[32px] font-title text-start py-8">
            {data.termsTitle}
          </AlertDialogTitle>
          <AlertDialogDescription className="font-normal text-base font-sans overflow:scroll text-start text-theme-grayscale-black">
            <div className="w-full h-full flex flex-col justify-center items-start text-start font-sans text-black space-y-2">
              <PortableText value={data.terms} components={sanityComponents} />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="w-full h-2/4  bg-[#FCFCFC] sticky bottom-8">
          <div className="w-full flex items-center justify-center space-x-2  bg-[#FCFCFC]">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md checked:touch-pan-up checked:accent-[#5A0C94] caret-theme-secondary-light"
              id="terms"
              checked={isAcceptedTerms}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans py-6 "
            >
              {data.acceptTheTerms}
            </label>
          </div>
          <AlertDialogFooter className="w-full h-full flex justify-center items-center bg-sky-400">
            <div className="h-full w-full flex flex-row justify-center items-center py-4 bg-[#FCFCFC]">
              <AlertDialogAction
                className={` w-[104px] h-12 font-semibold text-base font-title rounded-2xl
              ${
                isAcceptedTerms
                  ? "bg-[#5A0C94] hover:bg-theme-secondary-dark hover:text-[#F6F6F6]"
                  : "bg-[#DEDEDE] hover:bg-theme-white-base"
              }`}
                disabled={!isAcceptedTerms}
                onClick={() => setMentorCurrentStep(1)}
              >
                {data.buttonToSubmit}
              </AlertDialogAction>
              <AlertDialogAction className=" w-[77px] h-12 font-semibold text-base font-title mx-4 bg-transparent border-2 border-theme-secondary-base rounded-2xl text-theme-secondary-base hover:border-theme-secondary-light hover:text-theme-secondary-light hover:bg-theme-white-base">
                {data.buttonToCancel}
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
