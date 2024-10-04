interface AvatarProps {
  size?: string
  img: string
}

export default function Avatar({ size = "10rem", img }: AvatarProps) {
  return (
    <div className="avatar -z-20">
      <div className="m-5 rounded-full shadow-custom-avatar" style={{ width: size, height: size }}>
        <img className="h-full w-full rounded-full object-cover" src={img} alt="Avatar" />
      </div>
    </div>
  )
}
