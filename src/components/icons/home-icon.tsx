const HomeIcon = ({ fill, width = "100", height = "100" }: Record<string, string>) => {
  return (
    <>
      <svg width={width} height={height}  xmlns="http://www.w3.org/2000/svg" >
        <path 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
        fill={fill}
        />
      </svg>
    </>



  );
};

export default HomeIcon;
