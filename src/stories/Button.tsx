import styled from 'styled-components'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button<{primary: boolean}>`
  box-sizing: border-box;
  padding: .5rem;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary: theme.colors.secondary};
  border: ${({ primary, theme }) => primary ? 'none' : `1px solid ${theme.colors.primary}`};
  color: ${({ primary, theme }) => primary ? theme.colors.secondary: theme.colors.primary};
  border-radius: 4px;
  min-height: 2rem;
  min-width: 64px;
  transition: transform 250ms;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:active {
    outline: ${({ theme }) => theme.colors.tertiary} solid;
  }
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      {...props}
    >
      {label}
    </StyledButton>
  )
}
