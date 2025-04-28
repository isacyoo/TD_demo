export default function ALink({ href, children, blank = false }) {
    return (
        <a href={href} className="underline text-primary/90 hover:text-primary/80" target={blank ? "_blank" : "_self"}>{children}</a>
    )
}