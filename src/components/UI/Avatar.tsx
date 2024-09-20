interface AvatarProps {
  size?: string;
}

export default function Avatar({ size = '10rem' }: AvatarProps) {
  return (
    <div className="avatar -z-20">
      <div
        className="m-5 rounded-full shadow-custom-avatar"
        style={{ width: size, height: size }}
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Avatar"
        />
      </div>
    </div>
  );
}