const SUPABASE_URL = `https://rkpkbgcxtxmmqwaozrit.supabase.co`;
const SUPABASE_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcGtiZ2N4dHhtbXF3YW96cml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NzksImV4cCI6MTk1OTkxNzQ3OX0.BlZaNNVLhHKpWOLgA-78IfDScamHmyZyr18toNO8npQ`;

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getPosts() {
    const resp = await client.from('bulletin-board').select('*');
    console.log(resp);
    return checkError(resp);
}
// console.log('hello', await getPosts())
//signup user
export async function upUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    console.log(resp);
    return checkError(resp);
}
//sign-in user
export async function inUser(email, password) {
    const { user, session, error } = await client.auth.signIn({ email, password });
    return checkError({ user, session, error });
}

//getUser
export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

//check for auth(checkAuth())

//logout
export async function logout() {
    await client.auth.signOut();
    location.replace('/');
}

//login .replace
export async function loggedInReplace() {
    if (await getUser()) {
        location.replace(`/`);
    }
}
