import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "tmhru6rrkr7r";
const api_secret = "us6zdpdgpw7286fw9vu76ar9efb3r4ap9gtyubqwzw9qvg4gq3bp6xnywccusn2w";
// const user_id = "user_2soAxP0olkzVPdMMpkGVNo4Mdfo";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  // Create user Token
  const token = serverClient.createToken(user?.data?.id);
  console.log("A New User has been Created", token);

  const client = await clerkClient();
  await serverClient.upsertUser({id: user.data.id})

  await client.users.updateUserMetadata(user?.data?.id, {
    publicMetadata: {
      token: token
    },
  })

  // Give access to this user in all the chats
  const slugs = ["python-chat-new","js-chat-new","react-chat-new","css-chat-new","web-chat-new"]
  slugs.forEach(async (item) => {
    const channel = serverClient.channel('messaging', item, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(item) + " Discussion",
      created_by_id: user.data.id,
    });
    await channel.create()
    channel.addMembers([user.data.id])
  })
  return Response.json({ message: "Hello World" })
}
