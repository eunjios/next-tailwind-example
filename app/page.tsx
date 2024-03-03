import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const user = {
    username: "@eunjios",
    text: "Frontend Enginner",
    avatar: "https://avatars.githubusercontent.com/u/77034159?v=4",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <ProfileCard user={user} />
      <ProfileCard user={user} />
    </main>
  );
}
