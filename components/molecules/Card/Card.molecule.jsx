import Button from '@/components/atoms/Button/Button.atom';

const Card = ({ title = 'null', author = 'null', totalEdition = 'null', firstPublish = 'null' }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="./assets/hero/books.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>

        <div className="grid grid-cols-5 space-x-2">
          <span className="col-span-1">Author :</span>
          <span className="truncate col-span-4">{author}</span>
        </div>

        <div className="grid grid-cols-3 space-x-2">
          <span className="col-span-1">Total Edition :</span>
          <span className="truncate col-span-2">{totalEdition}</span>
        </div>

        <div className="grid grid-cols-3 space-x-2">
          <span className="col-span-1">First Publish :</span>
          <span className="truncate col-span-2">{firstPublish}</span>
        </div>

        <div className="card-actions justify-end">
          <Button text={'Detail'} variant={'btn-primary'} />
        </div>
      </div>
    </div>
  );
};

export default Card;
