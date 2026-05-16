import Image from "next/image";

type UserAvatarProps = {
  name: string;
  className?: string;
  src?: string;
};

export function UserAvatar({
  name,
  className = "h-10 w-10",
  src = "/user_avatar.png",
}: UserAvatarProps) {
  return (
    <div
      className={["relative shrink-0 overflow-hidden rounded-full", className].join(
        " ",
      )}
    >
      <Image
        src={src}
        alt={name}
        fill
        sizes="50px"
        className="object-cover"
      />
    </div>
  );
}
