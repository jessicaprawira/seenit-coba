import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from './components/AuthForm';

describe('AuthForm component', () => {
    it('should render login form by default', () => {
        render(<AuthForm />);
        expect(
            screen.getByRole('heading', { name: /login/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/enter your email/i),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/enter your password/i),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /login/i }),
        ).toBeInTheDocument();
    });

    it('should switch to register form when button is clicked', () => {
        render(<AuthForm />);
        const switchButton = screen.getByRole('button', { name: /register/i });
        fireEvent.click(switchButton);

        expect(
            screen.getByRole('heading', { name: /register/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /register/i }),
        ).toBeInTheDocument();
    });
});