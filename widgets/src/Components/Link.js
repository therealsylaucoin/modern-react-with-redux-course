const Link = ({ className, href, children}) => {
    const onClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href);
        //this will let the Route components that the route has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    );
};

export default Link;