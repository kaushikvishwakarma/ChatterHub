
import ChatForum from '@/components/ChatForum';
import { currentUser } from '@clerk/nextjs/server';

export default async function Page({ params }) {
    
    const user = await currentUser();
    const slug = (await params).slug

    return <ChatForum slug={slug} clerkUser={{id:user.id, name: user.firstName ,token: user.publicMetadata.token}} />
  }