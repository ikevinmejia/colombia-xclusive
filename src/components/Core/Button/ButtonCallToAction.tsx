import { Button, ButtonProps, Link } from '@nextui-org/react'

interface Props extends ButtonProps {
    href: string,
    label: string,
}

const ButtonCallToAction = ({href, label, ...buttonProps}:Props) => {
  return (
    <Button as={Link}  href={href} color="primary" target="_blank" {...buttonProps} >
        {label}
    </Button>
  )
}

export default ButtonCallToAction