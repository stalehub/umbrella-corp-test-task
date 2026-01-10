const HomeHeader = () => {
  return (
    <div className="w-full md:h-48 md:grid md:grid-cols-3">
      <div className="hidden w-48 p-2.5 md:inline-block md:col-span-1">
        <img
          className="object-contain"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af9f2648-395d-4dff-be05-b84b6f5923f7/d39nmgo-8c0f3d97-49fc-480d-93da-af16a49e439c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmOWYyNjQ4LTM5NWQtNGRmZi1iZTA1LWI4NGI2ZjU5MjNmN1wvZDM5bm1nby04YzBmM2Q5Ny00OWZjLTQ4MGQtOTNkYS1hZjE2YTQ5ZTQzOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UJQNyM13dvaUcC2ADL0RhUzlk2VmCj3Az49JF6fANPI"
        />
      </div>
      <div className="hidden md:inline-block md:col-span-1 italic text-sm sm:text-base overflow-y-scroll">
        <h2 className="text-red-600 text-base">Welcome to Umbrella</h2>
        <p>Umbrella Corporation was founded in 1980s.</p>
        <p>The headquarters of Umbrella is located in Europe.</p>
        <p>
          Umbrella had influence in the production and sale of cosmetics,
          chemicals, pharmaceuticals, industrial machine production, consumer
          products, health foods, the transportation industry and tourism.
        </p>
      </div>
      <div className="md:h-48 md:col-span-1 p-0.5 overflow-y-scroll">
        <div className="md:flex">
          <img
            className="object-contain border-2 border-transparent rounded-sm md:block"
            src="/images/umb_lobby.jpg"
          />
          <img
            className="hidden md:inline-block object-fill border-2 border-transparent rounded-sm"
            src="/images/umb_intro_larger.jpg"
          />
        </div>
        <div className="hidden md:flex">
          <img
            className="border-2 border-transparent rounded-sm"
            src="/images/umb_lab_photo.jpg"
          />
          <img
            className="w-[474px] border-2 border-transparent rounded-sm"
            src="https://static.wikia.nocookie.net/residentevil/images/8/81/Management_training_facility.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
