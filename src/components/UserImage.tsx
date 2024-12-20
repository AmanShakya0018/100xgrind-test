import React from "react";
import Image from "next/image";

export default function UserImage({ image }: any) {
  return (
    <div>
      <Image
        className="w-full h-full rounded-full cursor-pointer"
        src={image || ""}
        width={40}
        height={40}
        alt="user_profile_image"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}