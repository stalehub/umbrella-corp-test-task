import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoplsScreen = () => {
  if (window.screen.width < 811) {
    return null;
  }

  const WindowTitle = ({ title }: { title: string }) => {
    return (
      <div className="border-2 border-gray-800">
        <span className="flex justify-between bg-green-950">
          <h2 className="bg-green-950 text-white italic">{title}</h2>
          <FontAwesomeIcon
            className="w-5 bg-stone-200 border-2 border-stone-600"
            icon={faX}
          />
        </span>
      </div>
    );
  };

  return (
    <div>
      <div className="absolute md:w-2/5 top-32 left-4 bg-green-800 opacity-60 border-2 border-stone-400">
        <WindowTitle title="Uses of Medicinal Herbs" />

        <div className="w-11/12 text-white italic">
          <p className="p-1">
            It is a well-known fact that there exist many plants that are
            credited with medicinal healing powers. Since ancient times, mankind
            has been healing wounds and diseases using various plants.
          </p>
          <p className="p-1">
            The green herb recovers physical strength. The blue herb neutralizes
            natural toxins. However, the red herb has no real effect by itself.
            We have found that mixing green and red herbs results in a magnified
            effect.
          </p>
        </div>
      </div>

      <div className="absolute md:w-1/4 md:h-auto top-32 right-8 border-2 border-stone-400 opacity-70">
        <WindowTitle title="Keeper Room Monitor" />
        <img
          className="object-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ed11ce8-4d93-4212-b784-3954b8dd2658/delh9z5-5753c7b6-216d-41ac-9555-d6084674a8d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllZDExY2U4LTRkOTMtNDIxMi1iNzg0LTM5NTRiOGRkMjY1OFwvZGVsaDl6NS01NzUzYzdiNi0yMTZkLTQxYWMtOTU1NS1kNjA4NDY3NGE4ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UIKfi2a58cePyukJr1P8Noz_nfdzIOov3AmoDmidfDY"
        />
      </div>

      <div className="relative md:w-1/4 md:h-auto top-60 left-6 bg-emerald-900 border-2 border-stone-400 opacity-70">
        <WindowTitle title="System Check" />
        <p className="italic text-stone-200 p-1">
          {new Date(Date.now()).toUTCString()}
        </p>
        <p className="italic text-stone-200 p-1">System Status: All green</p>
      </div>
    </div>
  );
};

export default RoplsScreen;
