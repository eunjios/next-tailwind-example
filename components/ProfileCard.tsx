interface Props {
  user: {
    username: string;
    text: string;
    avatar: string;
  };
}

export default function ProfileCard({ user }: Props) {
  return (
    <div className="flex max-w-sm items-center space-x-5 rounded-xl bg-slate-800 p-6 shadow-lg hover:opacity-90 ">
      <div className="shrink-0">
        <img
          className="h-12 w-12 rounded-full"
          src={user.avatar}
          alt="아바타"
        />
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-50">
          {user.username}
        </div>
        <p className="text-sm font-normal text-gray-400">{user.text}</p>
      </div>
    </div>
  );
}
