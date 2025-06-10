const TvSeriesIcon = ({ fill }: Record<string, string>) => {
  return (
    <>
       <svg width="20" height="20" className=" text-gray-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" >
        <path 
        fill={fill}
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
      </svg>

    </>
  );
};

export default TvSeriesIcon;
