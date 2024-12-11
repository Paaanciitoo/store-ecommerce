import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] px-4 sm:px-6 lg:px-8 text-transparent bg-clip-text animate-breathing bg-gradient-to-r from-slate-900 to-slate-700">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

