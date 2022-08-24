import GithubProvider from "next-auth/providers/github"
import NextAuth, {NextAuthOptions} from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
    ],
    callbacks: {
        async jwt({token, account}) {
            if (account) {
            token.accessToken = account.access_token;
            }

            return token;
        }
    }
}

export default NextAuth(authOptions);