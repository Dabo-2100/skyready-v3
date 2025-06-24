'use client';
import { ErrorMessage, Field } from 'formik';

type Props = {
  name: string;
  type: 'text' | 'email' | 'password' | 'checkbox';
  placeholder?: string;
  label?: string;
  as?: string;
};

export default function FormField({ label, name, placeholder, type }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {type === 'checkbox' ? (
        <label className="flex items-center gap-2 cursor-pointer">
          <Field type="checkbox" name={name} className="checkbox checkbox-primary" />
          {label}
        </label>
      ) : (
        <>
          {label && <label>{label}</label>}
          <Field className="w-full input" type={type} name={name} placeholder={placeholder} />
        </>
      )}
      <ErrorMessage name={name} component={'div'} className="text-red-500 text-[12px]" />
    </div>
  );
}
