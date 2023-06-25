import { Theme } from "@emotion/react"
import { SxProps, TextFieldVariants } from "@mui/material"

export interface BasePasswordInputProps {
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
}

export interface SimplePasswordInputProps extends BasePasswordInputProps {
    sx?: SxProps<Theme>,
    variant?: TextFieldVariants,
}

export type PasswordInputDefaultComponentProps = SimplePasswordInputProps;

export interface DefaultPasswordInputProps {
    InputComponent?: React.ComponentType<PasswordInputDefaultComponentProps>,
    inputComponentProps: PasswordInputDefaultComponentProps
}

export interface PasswordInputProps<InputPropsType extends BasePasswordInputProps> {
    InputComponent: React.ComponentType<InputPropsType>,
    inputComponentProps: InputPropsType
}