export const BackgroundVideo: React.FC = () => (
  <video autoPlay loop muted className="absolute w-full h-full object-cover">
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)
