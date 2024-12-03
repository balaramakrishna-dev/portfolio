export default function GradientText({
    children,
    className = "",
    colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default colors
    animationSpeed = 8, // Default animation speed in seconds
    showBorder = false, // Default overlay visibility
  }) {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
    };
  
    return (
      <div className={`relative w-full p-1 m-0 mx-auto flex flex-row rounded-[1.25rem] font-medium backdrop-blur-[10px] transition-shadow duration-500 ease-out overflow-hidden cursor-pointer ${className}`}>
        {showBorder && (
          <div
            className="absolute inset-0 bg-[length:300%_100%] animate-gradient border-radius-inherit z-0 pointer-events-none"
            style={gradientStyle}
          ></div>
        )}
        <div
          className="relative z-2 inline-block bg-[length:300%_100%] bg-clip-text text-transparent animate-gradient"
          style={gradientStyle}
        >
          {children}
        </div>
      </div>
    );
  }
  