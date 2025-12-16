export async function login(data: { email: string; password: string }) {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 800));

  if (data.email && data.password) {
    return {
      token: "fake-jwt-token",
      user: {
        email: data.email,
      },
    };
  }

  throw new Error("Invalid credentials");
}

export async function signup(data: { email: string; password: string }) {
  await new Promise((res) => setTimeout(res, 800));
  return { message: "Account created" };
}
