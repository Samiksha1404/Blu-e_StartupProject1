import qr1 from '../../assets/qr1.jpg';
import qr2 from '../../assets/qr2.jpg';

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
    <section data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col justify-center items-center px-4 py-14 bg-blue-950 md:px-16 md:mx-40 mt-8">
    <div className="w-full max-w-[616px]">
      <div className="flex flex-col gap-8 md:flex-row md:gap-5">
        {/* Left part */}
        <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col md:w-[69%]">
          <h2 className="text-3xl font-semibold text-white"> Download Plugeasy App <br />
            <span className="font-semibold text-white">for Charging with </span> <br />
            <span className="font-bold text-white">BLU-E </span> Shashtav Bharat</h2>
          <div className="flex flex-col gap-4 pt-4 w-[170px] animate-zoom"> 
            {/* Buttons */}
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
        
        {/* Right part */}
        <div className="flex flex-col md:w-[31%] md:ml-5">
          <div>
            {/* First QR Code */}
            <img src={qr1} alt="" />
          </div>
          <div className='pt-4'>
            {/* Second QR Code */}
            <img src={qr2} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default DownloadSection;