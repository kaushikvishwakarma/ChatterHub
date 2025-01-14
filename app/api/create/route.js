import { StreamChat } from "stream-chat"

//ENter you api key and secret here which you will get from getstream app 
const api_key = process.env.NEXT_PUBLIC_API_KEY;
const api_secret =process.env. NEXT_PUBLIC_SECRET_KEY;
const user_id = "user_2rX78b1iKxR1KkMME6SkAgTdMf8";
export async function GET() {
  
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  
  const token = serverClient.createToken(user_id);
  console.log(token);
  return Response.json({ message: 'Hello World' })
}