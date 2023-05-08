import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon.atom';
import DetailProfileReview from '@/components/molecules/DetailProfileReview/DetailProfileReview.molecules';

const DetailReview = () => {
  return (
    <div>
      <h1 className="text-lg">Ulasan</h1>
      <div className="grid grid-cols-12 bg-red-500 w-full place-items-stretch">
        <div className="col-span-11">
          <DetailProfileReview />
        </div>
        <div className="bg-blue-300 space-x-2">
          <ButtonIcon />
          <ButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default DetailReview;
