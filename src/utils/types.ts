export type profileType ={
    name:string;
    login:string;
    avatar_url:string;
    blog:string;
    bio:string;
    public_repos:number;
    public_gists:number;
}
export const defaultProfile: profileType[]=[
    {
        name:"Psychology Simango",
        login:"Void-Muerte",
        avatar_url:"https://avatars.githubusercontent.com/u/95903000?v=4",
        blog:"",
        bio: "Highly motivated and enthusiastic full MERN stack junior developer who aspires to be meticulous towards accessible web applications",
        public_repos:10,
        public_gists:0
    }
]