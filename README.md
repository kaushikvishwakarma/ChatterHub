# ChatterHub - Random Video Chat

A Next.js application that enables random video chat between users using Stream's Video SDK.

## Features

- Random video chat matching
- Real-time video and audio communication
- User authentication with Clerk
- Modern UI with Tailwind CSS
- Responsive design

## Prerequisites

- Node.js 18 or later
- npm or yarn
- A Stream account with API credentials
- A Clerk account for authentication

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream Video API
NEXT_PUBLIC_API_KEY=your_stream_api_key
NEXT_PUBLIC_SECRET_KEY=your_stream_secret_key
NEXT_PUBLIC_ANALYTICS_TOKEN=your_stream_analytics_token
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and create a new project.

3. Import your GitHub repository.

4. Add the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_API_KEY`
   - `NEXT_PUBLIC_SECRET_KEY`
   - `NEXT_PUBLIC_ANALYTICS_TOKEN`

5. Deploy your project.

## Security Considerations

- Never commit your `.env` file to version control
- Keep your API keys and secrets secure
- Use environment variables for all sensitive information
- Regularly rotate your API keys and secrets

## License

MIT

## Project Structure

```
chatterhub/
|-- pages/                # Next.js pages
|-- components/           # Reusable components
|-- styles/               # CSS or Tailwind styles
|-- utils/                # Utility functions
|-- public/               # Static assets
|-- .env.local            # Environment variables
|-- package.json          # Dependencies and scripts
```

## Screenshots

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/a4c73f9c-9909-4b87-a16d-f6ab6f057b97" />

![image](https://github.com/user-attachments/assets/b8498b01-e8fc-462f-9181-04171f7869a2)

![image](https://github.com/user-attachments/assets/b6ed2257-485b-401d-94a0-6aae0c28851d)

![image](https://github.com/user-attachments/assets/52832abb-18e4-47cb-a480-9ce0315fd935)

![image](https://github.com/user-attachments/assets/8e004914-c980-4ffc-afd7-318d5dc267e6)

## Contributions

Feel free to contribute to this project. Here are the steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [GetStream Documentation](https://getstream.io/docs/)

## Contact

For any inquiries or support, please contact:

- **Your Name**: vkaushik13804\@gmail.com
- **GitHub**: Kaushikvishwakarma




