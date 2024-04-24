
const Ios = ({url}: {url: string}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-20 gap-0">
      <div className="text-center">
        <iframe
          title={`iPhone 2G/3G/3GS`}
          src={url}
          width={320}
          height={480} // Assuming aspect ratio of 3:2
          frameBorder="0"
          allowFullScreen
        />
        <p className="text-center">iPhone 5</p>
      </div>
      <div className=" text-center">
        <iframe
          title={`iPhone 6/6s`}
          src={url}
          width={375}
          height={667} 
          frameBorder="0"
          allowFullScreen
        />
        <p className="text-center">iPhone 6Plus/6sPlus</p>
      </div>
      <div className=" text-center">
        <iframe
          title={`iPhone 6Plus/6sPlus`}
          src={url}
          width={414}
          height={736}
          frameBorder="0"
          allowFullScreen
        />
        <p className="text-center">iPhone 2G/3G/3GS</p>
      </div>
    </div>
    )
  }
  
  
  export default Ios
  