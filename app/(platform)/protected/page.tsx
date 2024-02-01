import { UserButton } from '@clerk/nextjs';

export default async function ProtectedPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
