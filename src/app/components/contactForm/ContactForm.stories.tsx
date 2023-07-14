import { Meta, StoryObj } from '@storybook/react';
import UserForm, { IUserForm } from './ContactForm';
import { mockUserFormProps } from './ContactForm.mocks';

const meta: Meta<typeof UserForm> = {
  component: UserForm,
};

export default meta;
type Story = StoryObj<typeof UserForm>;

export const Primary: Story = {
  args: {
    ...mockUserFormProps.base,
  } as IUserForm,
};
