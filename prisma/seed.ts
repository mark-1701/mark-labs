import { auth } from '../src/lib/auth';

async function main() {
  const result = await auth.api.signUpEmail({
    body: {
      name: 'Marco',
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASSWORD!
    }
  });

  console.log('Usuario creado:', result.user.email);
}

main();
