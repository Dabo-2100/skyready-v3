'use client';
import { Form, Formik } from 'formik';
import clsx from 'clsx';
import Link from 'next/link';
import FormField from '@/shared/componenets/FormField';
import { LoginFormValues } from '@/app/(auth)/login/_domain/types';
import { loginSchema } from '@/app/(auth)/login/_domain/validators';
import { useLogin } from './_application/hooks/useLogin';

export default function LoginPage() {
  const [Login] = useLogin();
  const initialValues: LoginFormValues = { email: '', password: '', rememberIndex: false };
  const formStyle = clsx('w-[94%] md:w-[410px] flex flex-col gap-3 bg-gray-800 rounded-xl shadow py-5 px-4 border');

  const handleSubmit = (values: LoginFormValues) => {
    Login({ email: values.email, password: values.password, rememberIndex: values.rememberIndex });
  };

  return (
    <div className="w-full h-full bg-gray-900 overflow-auto flex items-center justify-center">
      <Formik<LoginFormValues> initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
        <Form className={formStyle}>
          <p className="text-[clamp(18px,3.5vw,24px)] font-bold ">Welcome Back to retrofit app</p>

          <FormField name="email" type="email" placeholder="Enter your email address" />
          <FormField name="password" type="password" placeholder="Enter your password" />

          <div className="w-full flex items-center justify-between">
            <FormField name="rememberIndex" type="checkbox" label="Remember Me" />
            <Link href="/forget">Forget password</Link>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}
