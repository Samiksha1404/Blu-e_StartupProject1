const DownloadButton = ({ imageSrc, storeName, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">
    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-600 rounded-lg hover:bg-yellow-400 transition-colors ">
      <img loading="lazy" src={imageSrc} alt={`${storeName} logo`} className="shrink-0 w-[37px] h-[37px]" />
      <div>{storeName}</div>
    </div>
  </a>
);

const DownloadSection = () => {
  const downloadButtons = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14113a96f5818c86215d0ec82d5e5672d3ac191b4a35198d793c8c7b20fa736?apiKey=d7e5bab79af041058fcada747b413e1e&",
      storeName: "Apple Store",
      link: "https://www.example.com/apple-store-link"
    },
    { 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2226302f3402443cfd479bfe759297681457445d9e09392f0a5ef34990908b44?apiKey=d7e5bab79af041058fcada747b413e1e&", 
      storeName: "Google Play", 
      link: "https://www.example.com/google-play-link" 
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center px-4 py-14 bg-blue-950 md:px-16 md:mx-40 mt-8">
      <div className="w-full max-w-[616px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-5">
          <div className="flex flex-col md:w-[69%]">
            <h2 className="text-3xl font-semibold text-white"> Download the <br />
              <span className="font-bold text-white">BLU-E Shashtav Bharat</span> <br />
              <span className="font-bold text-white">Charging</span> Mobile App </h2>
          </div>
          <div className="flex flex-col gap-4 md:ml-5 md:w-[31%]">
            {downloadButtons.map((button, index) => (
              <DownloadButton
                key={index}
                imageSrc={button.imageSrc}
                storeName={button.storeName}
                link={button.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DownloadSection;