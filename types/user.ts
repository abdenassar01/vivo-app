import {t} from 'i18next';
import {z} from 'zod';

export const userSchema = z.object({
  id: z.number().optional(),
  email: z
    .string({required_error: t('email-required')})
    .email(t('email-invalid')),
  password: z
    .string({required_error: t('password-required')})
    .max(32, t('password-max-lenght'))
    .min(8, t('password-min-lenght')),
  passwordConfirm: z
    .string({required_error: t('password-required')})
    .max(32, t('password-max-lenght'))
    .min(8, t('password-min-lenght')),
  phone: z.string({required_error: t('phone-required')}),
  fullname: z.string({required_error: t('fullname-required')}),
  avatar: z.string({required_error: t('avatar-required')}),
  cni: z.string({required_error: t('cni-required')}),
  cniFile: z.string({required_error: t('cni-file-required')}),
});
// .refine(data => data.password === data.passwordConfirm, {
//   message: t('password-not-match'),
//   path: ['passwordConfirm'],
// });

export const loginSchema = userSchema.pick({
  phone: true,
  password: true,
});

export const signupStepOne = userSchema.pick({
  fullname: true,
  // email: true,
  phone: true,
});

export const signupStepTwo = userSchema.pick({
  password: true,
  passwordConfirm: true,
});

export const signupStepThree = userSchema.pick({
  cni: true,
  cniFile: true,
  avatar: true,
});

export type User = z.infer<typeof userSchema>;
